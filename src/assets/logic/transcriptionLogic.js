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

  setIsTranscribing(true);
  setTranscription("Transscriptie wordt geladen...");

  try {
    const serverAudioUrl = `https://olevanderheiden.github.io/afstudeer-portfolio/${audioSrc}`;

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
    setTranscription(
      formattedTranscription || "Transscriptie niet beschikbaar."
    );
  } catch (error) {
    console.error("Error transcribing audio:", error);
    setTranscription("Fout bij het transcriberen van audio.");
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
  return utterances
    .map((utterance) => `${utterance.speaker}:\n${utterance.text}`)
    .join("\n\n");
};
