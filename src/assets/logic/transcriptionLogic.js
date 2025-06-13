import terms from "../terms.json";

export const toggleTranscription = async (
  audioSrc,
  setShowWarning,
  setIsTranscribing,
  setTranscription
) => {
  setShowWarning(true);
  const userConfirmed = window.confirm(
    "Let op: De transcriptie-functionaliteit is experimenteel en kan onnauwkeurig zijn. Wilt u doorgaan?"
  );

  if (!userConfirmed) {
    setShowWarning(false);
    return;
  }

  // Check if transcription exists in local storage an if so, use that instead of making a new request
  const storedTranscription = localStorage.getItem(audioSrc);
  if (storedTranscription) {
    setTranscription(storedTranscription);
    setShowWarning(false);
    return;
  }

  // If no stored transcription, proceed with the API call
  setIsTranscribing(true);
  setTranscription(
    "Transscriptie wordt geladen. Dit kan een paar minuten duren. Een moment geduld alstublieft..."
  );

  // Check if the audio file exists on the server (audio files can only be transsribed if they are included in the build on GitHub Pages, local files won't work)
  try {
    const serverAudioUrl = `https://olevanderheiden.github.io/afstudeer-portfolio/${audioSrc}`;

    // Check if the file exists on the server
    const headResponse = await fetch(serverAudioUrl, { method: "HEAD" });
    if (!headResponse.ok) {
      throw new Error("Audio file not found on the server");
    }

    // Proceed with the transcription request (uses a API key froma AsemblyAI that is stored in the .env file)
    const response = await fetch("https://api.assemblyai.com/v2/transcript", {
      method: "POST",
      headers: {
        authorization: import.meta.env.VITE_ASSEMBLYAI_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        audio_url: serverAudioUrl,
        language_code: "nl",
        speaker_labels: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error("Failed to start transcription");
    }

    const data = await response.json();
    const transcriptId = data.id;

    const pollResponse = await pollTranscriptionResult(transcriptId);

    const formattedTranscription = formatTranscriptionWithSpeakers(
      pollResponse.utterances
    );

    // Save transcription in local storage
    localStorage.setItem(audioSrc, formattedTranscription);

    setTranscription(
      formattedTranscription || "Transscriptie niet beschikbaar."
    );
  } catch (error) {
    //Handle errors in such a way that the users can understand what went wrong. This means informing them in the UI and not just in the console
    console.error("Error transcribing audio:", error);
    setTranscription(
      error.message === "Audio file not found on the server"
        ? "Transcriptie is niet beschickbaar omdat het bestand niet kan worden gevonden op de server."
        : "Fout bij het transcriberen van audio."
    );
  } finally {
    setIsTranscribing(false);
  }
};

// Function to poll the transcription result from AssemblyAI
const pollTranscriptionResult = async (transcriptId) => {
  const pollingEndpoint = `https://api.assemblyai.com/v2/transcript/${transcriptId}`;
  while (true) {
    const response = await fetch(pollingEndpoint, {
      headers: {
        authorization: import.meta.env.VITE_ASSEMBLYAI_API_KEY,
      },
    });

    const data = await response.json();
    if (data.status === "completed") {
      return data;
    } else if (data.status === "failed") {
      throw new Error("Transcription failed");
    }

    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
};

const formatTranscriptionWithSpeakers = (utterances) => {
  // Create a map of terms for quick lookup
  const termMap = terms.reduce((map, term) => {
    map[term.term.toLowerCase()] = term.term;
    return map;
  }, {});

  // Helper to split text into paragraphs every N sentences
  function splitIntoParagraphs(text, sentencesPerParagraph = 3) {
    // Split text into sentences (simple regex, can be improved)
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
      paragraphs.push(sentences.slice(i, i + sentencesPerParagraph).join(" "));
    }
    return paragraphs;
  }

  return utterances
    .map((utterance) => {
      // Replace terms in the text with links
      const linkedText = utterance.text.replace(
        new RegExp(`\\b(${Object.keys(termMap).join("|")})\\b`, "gi"),
        (match) =>
          `<a href="begrippen?search=${encodeURIComponent(
            match
          )}" target="_blank">${termMap[match.toLowerCase()]}</a>`
      );

      // Split into paragraphs
      const paragraphs = splitIntoParagraphs(linkedText, 3);

      // Return speaker and paragraphs
      return `<strong>${utterance.speaker}:</strong><br>${paragraphs
        .map((p) => p.trim())
        .filter(Boolean)
        .join("<br><br>")}`;
    })
    .join("<br><br>");
};
