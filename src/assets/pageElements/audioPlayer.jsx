import React, { useRef, useState } from "react";

const AudioPlayer = ({ fileName, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

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
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
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

        {/* Current Time / Duration */}
        <span style={{ fontSize: "14px" }}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      {/* Seek Bar */}
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
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
    </div>
  );
};

export default AudioPlayer;
