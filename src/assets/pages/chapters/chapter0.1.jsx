import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Samenvating";

const Chapter0_1 = () => {
  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      <h2>Samenvatting & Begrippenlijst</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer fileName="test.mp3" title="Introducties" />
      <p>Chapter 0 is coming here!</p>
    </div>
  );

  return <Layout content={content} sources={sources} pageTitle={title} />;
};

export default Chapter0_1;
