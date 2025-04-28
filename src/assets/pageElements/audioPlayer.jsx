import React, { useRef, useState, useEffect } from "react";
import { useAudioPlayerContext } from "../../context/AudioPlayerContext";
import { toggleTranscription } from "../logic/transcriptionLogic";
import "../../index.css";

// AudioPlayer component
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

  // Manage play and pause state
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

  // Manage the time update and duration of the audio shown in the UI
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime / globalPlaybackRate);
  };

  // Manage the loaded metadata of the audio file
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Manage the seek/scroll bar of the audio file
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 1000) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime / globalPlaybackRate);
  };

  // Handle the volume change of the audio playback; this affects the global volume state
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setGlobalVolume(newVolume);
    localStorage.setItem("audioPlayerVolume", newVolume);
  };

  // Handle the playback rate change of the audio playback; this affects the global playback rate state
  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setGlobalPlaybackRate(newRate);
    localStorage.setItem("audioPlayerPlaybackRate", newRate);
  };

  // Ensure that the displayed time is in the correct format of minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
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
      {/* Manages transcription call to the transcription code */}
      <button
        onClick={() =>
          toggleTranscription(
            audioSrc,
            setShowWarning,
            setIsTranscribing,
            setTranscription
          )
        }
        className={`transcription-button ${isTranscribing ? "loading" : ""}`}
        disabled={isTranscribing}
      >
        {isTranscribing ? "Transcriberen..." : "Start Transscriptie"}
      </button>
      {transcription && (
        <div className="transcription">
          <h4>Transscriptie:</h4>
          <div
            dangerouslySetInnerHTML={{ __html: transcription }}
            style={{ whiteSpace: "pre-wrap" }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;