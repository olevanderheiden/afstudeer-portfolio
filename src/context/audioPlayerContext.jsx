import React, { createContext, useState, useContext } from "react";

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
