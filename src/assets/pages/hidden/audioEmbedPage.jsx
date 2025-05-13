import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AudioPlayer from "../../pageElements/audioPlayer";

const AudioEmbedPage = () => {
  const [searchParams] = useSearchParams();
  const fileName = searchParams.get("file"); // Get the audio file name from the query parameter
  const title = searchParams.get("title") || "Audio"; // Optional title parameter

  useEffect(() => {
    const audioElement = document.querySelector("audio");

    if (audioElement) {
      // Attempt to autoplay the audio
      audioElement.play().catch(() => {
        console.warn("Autoplay blocked by the browser.");
      });
    }
  }, []);

  if (!fileName) {
    return <p>Error: No audio file specified.</p>;
  }

  return (
    <div>
      <AudioPlayer fileName={fileName} title={title} />
    </div>
  );
};

export default AudioEmbedPage;
