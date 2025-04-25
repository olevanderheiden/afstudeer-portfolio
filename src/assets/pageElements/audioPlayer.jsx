import React, { useRef, useState } from "react";

const AudioPlayer = ({ fileName, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [showWarning, setShowWarning] = useState(false); // State to control the warning message

  const audioSrc = `audio/${fileName}`; // Local audio file path

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime / playbackRate);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 1000) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime / playbackRate);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    audioRef.current.playbackRate = newRate;
    setPlaybackRate(newRate);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const toggleTranscription = async () => {
    setShowWarning(true); // Show the warning message
    const userConfirmed = window.confirm(
      "Let op: De transcriptie-functionaliteit is experimenteel en kan onnauwkeurig zijn. Wilt u doorgaan?"
    );

    if (!userConfirmed) {
      setShowWarning(false); // Hide the warning if the user cancels
      return; // Exit if the user does not confirm
    }

    setIsTranscribing(true);
    setTranscription("Transscriptie wordt geladen...");

    try {
      // Prepend the server URL to the audioSrc for transcription
      const serverAudioUrl = `https://olevanderheiden.github.io/afstudeer-portfolio/${audioSrc}`;

      const response = await fetch("https://api.assemblyai.com/v2/transcript", {
        method: "POST",
        headers: {
          authorization: import.meta.env.VITE_ASSEMBLYAI_API_KEY, // Use the API key from the .env file
          "content-type": "application/json",
        },
        body: JSON.stringify({
          audio_url: serverAudioUrl, // Use the server URL for transcription
          language_code: "nl", // Set transcription language to Dutch
          speaker_labels: true, // Enable speaker diarization
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error("Failed to start transcription");
      }

      const data = await response.json();
      const transcriptId = data.id;

      // Poll for transcription results
      const pollResponse = await pollTranscriptionResult(transcriptId);

      // Format the transcription with speaker labels and line breaks
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

  // Helper function to format transcription with speaker labels
  const formatTranscriptionWithSpeakers = (utterances) => {
    return utterances
      .map((utterance) => `${utterance.speaker}:\n${utterance.text}`)
      .join("\n\n");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: "none" }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "50%",
            backgroundColor: isPlaying ? "#ff4d4d" : "#4caf50",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {isPlaying ? "Stop" : "Start"}
        </button>

        {/* Current Time / Adjusted Duration */}
        <span style={{ fontSize: "14px" }}>
          {formatTime(currentTime)} / {formatTime(duration / playbackRate)}
        </span>
      </div>

      {/* Seek Bar */}
      <input
        type="range"
        min="0"
        max="1000"
        value={(currentTime / (duration / playbackRate)) * 1000 || 0}
        onChange={handleSeek}
        style={{
          width: "100%",
          margin: "10px 0",
        }}
      />

      {/* Volume Control */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label htmlFor="volume" style={{ fontSize: "14px" }}>
          Volume:
        </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="100"
          value={volume * 100}
          onChange={handleVolumeChange}
          style={{ width: "100px" }}
        />
        <span style={{ fontSize: "14px" }}>{Math.round(volume * 100)}%</span>
      </div>

      {/* Playback Speed Control */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <label htmlFor="playbackRate" style={{ fontSize: "14px" }}>
          Afspeel snelheid:
        </label>
        <select
          id="playbackRate"
          value={playbackRate}
          onChange={handlePlaybackRateChange}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        >
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1">1x (Standaard)</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="1.75">1.75x</option>
          <option value="2">2x</option>
        </select>
      </div>

      {/* Warning Message */}
      {showWarning && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ff9800",
            borderRadius: "5px",
            backgroundColor: "#fff3e0",
            color: "#e65100",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <strong>Let op:</strong> De transcriptie-functionaliteit is
          experimenteel en kan onnauwkeurig zijn. Gebruik het alleen als u
          begrijpt dat de resultaten mogelijk niet betrouwbaar zijn. Tevens
          staat de ontwikkelaar van deze website niet achter het gebruik van
          generative Ai waar deze functie gebruik van maakt. Dit is niet alleen
          slecht voor planeet en het milieu, maar ook voor mensen die werken in
          een creatief beroep. Het is dus niet aan te raden om deze functie te
          gebruiken.
        </div>
      )}

      {/* Transcription Button */}
      <button
        onClick={toggleTranscription}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: isTranscribing ? "#ff9800" : "#2196f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        disabled={isTranscribing}
      >
        {isTranscribing
          ? "Transcriberen..."
          : "Start Transscriptie (Gebruikt Generative AI: Wordt niet aangeraden)"}
      </button>

      {/* Transcription Display */}
      {transcription && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            width: "100%",
            whiteSpace: "pre-wrap",
          }}
        >
          <h4>Transscriptie:</h4>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
