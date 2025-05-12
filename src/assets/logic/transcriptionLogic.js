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

  // Check if transcription exists in local storage
  const storedTranscription = localStorage.getItem(audioSrc);
  if (storedTranscription) {
    setTranscription(storedTranscription);
    setShowWarning(false);
    return;
  }

  setIsTranscribing(true);
  setTranscription("Transscriptie wordt geladen. Dit kan een paar minuten duren. Een moment geduld alstublieft...");

  try {
    const serverAudioUrl = `https://olevanderheiden.github.io/afstudeer-portfolio/${audioSrc}`;

    // Check if the file exists on the server
    const headResponse = await fetch(serverAudioUrl, { method: "HEAD" });
    if (!headResponse.ok) {
      throw new Error("Audio file not found on the server");
    }

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

  return utterances
    .map((utterance) => {
      // Replace terms in the text with links
      const linkedText = utterance.text.replace(
        new RegExp(`\\b(${Object.keys(termMap).join("|")})\\b`, "gi"),
        (match) =>
          `<a href="begrippen?search=${encodeURIComponent(
            match
          )}" target="_blank">${
            termMap[match.toLowerCase()]
          }</a>`
      );

      // Return the speaker and the linked text
      return `<strong>${utterance.speaker}:</strong><br>${linkedText}`;
    })
    .join("<br><br>");
};
