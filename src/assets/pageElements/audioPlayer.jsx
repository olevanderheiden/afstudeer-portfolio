import React, { useRef, useState } from "react";

const AudioPlayer = ({ fileName, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1); // Default playback speed

  // Construct the full path to the audio file
  const audioSrc = `audio/${fileName}`;

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime / playbackRate); // Adjust current time based on playback speed
  };

  const handleAudioEnd = () => {
    audioRef.current.currentTime = 0; // Reset the audio to the beginning
    setCurrentTime(0); // Reset the displayed current time
    setIsPlaying(false); // Set the playing state to false
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

  // Adjusted duration based on playback speed
  const adjustedDuration = duration / playbackRate;

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
        onEnded={handleAudioEnd}
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
          {formatTime(currentTime)} / {formatTime(adjustedDuration)}
        </span>
      </div>

      {/* Seek Bar */}
      <input
        type="range"
        min="0"
        max="1000"
        value={(currentTime / adjustedDuration) * 1000 || 0}
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
          <option value="2.25">2.25x</option>
          <option value="2.5">2.5x</option>
          <option value="2.75">2.75x</option>
          <option value="3">3x</option>
        </select>
      </div>
    </div>
  );
};

export default AudioPlayer;
