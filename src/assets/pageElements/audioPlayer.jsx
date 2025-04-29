import React, { useRef, useState, useEffect } from "react";
import { useAudioPlayerContext } from "../../context/AudioPlayerContext";
import { toggleTranscription } from "../logic/transcriptionLogic";
import "../../index.css";

const AudioPlayer = ({ fileName, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [isTranscriptionVisible, setIsTranscriptionVisible] = useState(false);

  const {
    globalVolume,
    setGlobalVolume,
    globalPlaybackRate,
    setGlobalPlaybackRate,
    currentlyPlayingAudio,
    setCurrentlyPlayingAudio,
  } = useAudioPlayerContext();

  const audioSrc = `audio/${fileName}`;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = globalVolume;
      audioRef.current.playbackRate = globalPlaybackRate;
    }
  }, [globalVolume, globalPlaybackRate]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audioRef.current) {
        currentlyPlayingAudio.pause();
        setCurrentlyPlayingAudio(null);
      }
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

  const handleTranscription = async () => {
    await toggleTranscription(
      audioSrc,
      setShowWarning,
      setIsTranscribing,
      (transcriptionText) => {
        setTranscription(transcriptionText);
        setIsTranscriptionVisible(true); // Automatically show transcription
      }
    );
  };

  return (
    <div className="media-container">
      <h3 className="media-title">{title}</h3>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: "none" }}
      />
      <div className="media-controls">
        <button
          onClick={togglePlayPause}
          className={`play-button ${isPlaying ? "stop" : "start"}`}
        >
          {isPlaying ? "Stop" : "Start"}
        </button>
        <span className="time-display">
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
        className="seek-bar"
      />
      <div className="volume-controls">
        <label htmlFor="volume">Volume:</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="100"
          value={globalVolume * 100}
          onChange={handleVolumeChange}
        />
        <span>{Math.round(globalVolume * 100)}%</span>
      </div>
      <div className="playback-rate-controls">
        <label htmlFor="playbackRate">Afspeel snelheid:</label>
        <select
          id="playbackRate"
          value={globalPlaybackRate}
          onChange={handlePlaybackRateChange}
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
        <div className="warning">
          <strong>Let op:</strong> Deze transcriptie maakt gebruik van
          generative AI. Het is hierdoor niet alleen potentieel onnauwkeurig,
          maar kan ook een grote invloed hebben op het milieu,
          klimaatverandering en de werkgelegenheid in creatieve sectoren. De
          maker van deze website staat niet achter het gebruik van generative AI
          en is niet verantwoordelijk voor de gevolgen die deze transcriptie kan
          hebben! Gebruik dit dus op eigen risico.
        </div>
      )}
      {!transcription && (
        <button
          onClick={handleTranscription}
          className={`transcription-button ${isTranscribing ? "loading" : ""}`}
          disabled={isTranscribing}
        >
          {isTranscribing ? "Transcriberen..." : "Start Transscriptie"}
        </button>
      )}
      {transcription && isTranscriptionVisible && (
        <div className="transcription">
          <button
            onClick={() => setIsTranscriptionVisible(false)}
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Sluit Transscriptie
          </button>
          <div
            dangerouslySetInnerHTML={{ __html: transcription }}
            style={{ whiteSpace: "pre-wrap" }}
          ></div>
        </div>
      )}
      {transcription && !isTranscriptionVisible && (
        <button
          onClick={() => setIsTranscriptionVisible(true)}
          style={{
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Toon Transscriptie
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;
