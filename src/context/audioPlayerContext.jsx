import React, { createContext, useState, useContext } from "react";

// This context is used to manage the global state of the audio player
// It allows for the management of volume, playback rate, and currently playing audio
//This way audio levels and playback speed will stay consistent regardless of the page the user is on

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const [globalVolume, setGlobalVolume] = useState(
    parseFloat(localStorage.getItem("audioPlayerVolume")) || 1
  );
  const [globalPlaybackRate, setGlobalPlaybackRate] = useState(
    parseFloat(localStorage.getItem("audioPlayerPlaybackRate")) || 1
  );
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null);

  return (
    <AudioPlayerContext.Provider
      value={{
        globalVolume,
        setGlobalVolume,
        globalPlaybackRate,
        setGlobalPlaybackRate,
        currentlyPlayingAudio,
        setCurrentlyPlayingAudio,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => useContext(AudioPlayerContext);
