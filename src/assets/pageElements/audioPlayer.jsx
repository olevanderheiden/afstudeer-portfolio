import React, { useRef, useState, useEffect } from "react";
import { useAudioPlayerContext } from "../../context/AudioPlayerContext";
import { toggleTranscription } from "../logic/transcriptionLogic";
import "../../index.css";

//Consttants and usestate variable used in the AudioPlayer component
const AudioPlayer = ({ fileName, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [isTranscriptionVisible, setIsTranscriptionVisible] = useState(false);

  //Make it possible to let the volume and playback rate be set globally
  const {
    globalVolume,
    setGlobalVolume,
    globalPlaybackRate,
    setGlobalPlaybackRate,
    currentlyPlayingAudio,
    setCurrentlyPlayingAudio,
  } = useAudioPlayerContext();

  //Get the audio file name from the props
  const audioSrc = `audio/${fileName}`;

  //Handle the volume and playback rate when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = globalVolume;
      audioRef.current.playbackRate = globalPlaybackRate;
    }
  }, [globalVolume, globalPlaybackRate]);

  //Handle the audio ended event to reset the play button state
  useEffect(() => {
    const handleAudioEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  //Handle play and pause events
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audioRef.current) {
        currentlyPlayingAudio.pause();

        // Reset the play button state of the previously playing audio
        if (currentlyPlayingAudio.dataset) {
          const previousAudioPlayer = currentlyPlayingAudio.dataset.audioPlayer;
          if (previousAudioPlayer) {
            previousAudioPlayer.isPlaying = false; // Reset the state
          }
        }

        setCurrentlyPlayingAudio(null);
      }

      audioRef.current.play();
      setCurrentlyPlayingAudio(audioRef.current);
      setIsPlaying(true);
    }
  };

  //Make sure the correct time is displayed when the audio is played
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime / globalPlaybackRate);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  //Allow the user to scroll through the audio using the slider
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 1000) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime / globalPlaybackRate);
  };

  //Update the volume when the user changes it
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setGlobalVolume(newVolume);
    localStorage.setItem("audioPlayerVolume", newVolume);
  };

  //Update the playback rate when the user changes it
  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setGlobalPlaybackRate(newRate);
    localStorage.setItem("audioPlayerPlaybackRate", newRate);
  };

  //Format the time to be displayed in the audio player so that it can be understood by the user
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  //Make call to the transcription function when the user clicks on the button
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
      {/* Volume controls */}
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

      {/* Playback rate controls*/}
      <div className="playback-rate-controls">
        <label htmlFor="playbackRate">Afspeelsnelheid:</label>
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
      {/* Show warning message if transcription is available */}
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
            className="transcription-button"
          >
            Sluit Transscriptie
          </button>
          <div
            dangerouslySetInnerHTML={{ __html: transcription }}
            className="transcription"
          ></div>
        </div>
      )}
      {/* Show button to toggle transcription visibility */}
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
