import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer"; // Ensure the correct file name casing

export const title = "Test Title 1";

const Chapter1 = () => {
  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer fileName="test.mp3" title="Chapter 1: Introduction" />
      <h2>Chapter 1</h2>
      <p>Chapter 1 is coming here!</p>
    </div>
  );

  return <Layout content={content} sources={sources} />;
};

export default Chapter1;
