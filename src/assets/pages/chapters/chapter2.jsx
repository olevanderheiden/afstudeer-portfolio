import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Afstudeercompetenties";

const Chapter2_1 = () => {
  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      <h2>Chapter 2</h2>
      <p>Chapter 2 is coming here!</p>
      <AudioPlayer
        fileName={"content/chapter2/2.introductie.mp3"}
        title={"Introductie Hoofdstuk 2 (comingsoon)"}
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_1;
