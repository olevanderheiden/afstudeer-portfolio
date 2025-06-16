import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Iteratie 4 proof of concept";

const Chapter3_11 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="test.mp3"
        title="Voor onderzoek naar doelgroep (coming soon"
      />
      <p>Inleven content komtie hier</p>
    </div>
  );

  return <Layout content={content} sources={sources} pageTitle={title} />;
};

export default Chapter3_11;
