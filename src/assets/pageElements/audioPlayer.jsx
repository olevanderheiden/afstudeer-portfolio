import React, { useRef, useState, useEffect } from "react";
import { useAudioPlayerContext } from "../../context/AudioPlayerContext";

const AudioPlayer = ({ fileName, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const {
    globalVolume,
    setGlobalVolume,
    globalPlaybackRate,
    setGlobalPlaybackRate,
    currentlyPlayingAudio,
    setCurrentlyPlayingAudio,
  } = useAudioPlayerContext();

  const audioSrc = `audio/${fileName}`; // Local audio file path

  // Sync volume and playback rate with global state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = globalVolume;
      audioRef.current.playbackRate = globalPlaybackRate;
    }
  }, [globalVolume, globalPlaybackRate]);

  const togglePlayPause = () => {
    if (isPlaying) {
      // Pause the current audio
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Pause any currently playing audio
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audioRef.current) {
        currentlyPlayingAudio.pause();

        // Reset the isPlaying state of the previously playing audio
        const previousAudioComponent = currentlyPlayingAudio.parentElement;
        if (previousAudioComponent) {
          const previousAudioButton =
            previousAudioComponent.querySelector("button");
          if (previousAudioButton) {
            previousAudioButton.textContent = "Start"; // Reset button text
            previousAudioButton.style.backgroundColor = "#4caf50"; // Reset button color
          }

          // Reset the isPlaying state of the previous audio player
          const previousAudioInstance =
            previousAudioComponent.__reactFiber$?.return?.stateNode;
          if (previousAudioInstance) {
            previousAudioInstance.setIsPlaying(false);
          }
        }
      }

      // Play the current audio
      audioRef.current.play();
      setCurrentlyPlayingAudio(audioRef.current);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime / globalPlaybackRate);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 1000) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime / globalPlaybackRate);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setGlobalVolume(newVolume);
    localStorage.setItem("audioPlayerVolume", newVolume);
  };

  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setGlobalPlaybackRate(newRate);
    localStorage.setItem("audioPlayerPlaybackRate", newRate);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const toggleTranscription = async () => {
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
        <span style={{ fontSize: "14px" }}>
          {formatTime(currentTime)} /{" "}
          {formatTime(duration / globalPlaybackRate)}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="1000"
        value={(currentTime / (duration / globalPlaybackRate)) * 1000 || 0}
        onChange={handleSeek}
        style={{
          width: "100%",
          margin: "10px 0",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label htmlFor="volume" style={{ fontSize: "14px" }}>
          Volume:
        </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="100"
          value={globalVolume * 100}
          onChange={handleVolumeChange}
          style={{ width: "100px" }}
        />
        <span style={{ fontSize: "14px" }}>
          {Math.round(globalVolume * 100)}%
        </span>
      </div>
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
          value={globalPlaybackRate}
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
          begrijpt dat de resultaten mogelijk niet betrouwbaar zijn.
        </div>
      )}
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
