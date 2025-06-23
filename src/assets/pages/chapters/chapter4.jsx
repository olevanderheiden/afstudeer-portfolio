import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Het product";

const Chapter4 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter4/4.intro.mp3"
        title="Introductie Hoofdstuk 4"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4;
