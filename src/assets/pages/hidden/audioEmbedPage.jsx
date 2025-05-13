import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AudioPlayer from "../../pageElements/audioPlayer";

const AudioEmbedPage = () => {
  const [searchParams] = useSearchParams();
  const fileName = searchParams.get("file"); // Get the audio file name from the query parameter
  const title = searchParams.get("title") || "Audio"; // Optional title parameter
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audioElement = document.querySelector("audio");

    if (audioElement) {
      // Attempt to autoplay the audio
      audioElement.play().catch(() => {
        console.warn("Autoplay blocked by the browser.");
        setAutoplayBlocked(true); // Update state if autoplay is blocked
      });
    }
  }, []);

  if (!fileName) {
    return <p>Error: No audio file specified.</p>;
  }

  return (
    <div>
      <AudioPlayer fileName={fileName} title={title} />
      {autoplayBlocked && (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
          Autoplay is blocked by your browser. Please press the play button to
          start the audio.
        </p>
      )}
    </div>
  );
};

export default AudioEmbedPage;
