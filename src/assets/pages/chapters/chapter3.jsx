import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import { useNavigate } from "react-router-dom";

export const title = "Onderzoeksvragen";

const Chapter3 = () => {
  const navigate = useNavigate();
  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.introductie.mp3"
        title="Introductie hoofstuk 3"
      />
    </div>
  );

  return <Layout content={content} sources={sources} pageTitle={title} />;
};

export default Chapter3;
