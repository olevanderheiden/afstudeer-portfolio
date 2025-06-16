import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import { useNavigate } from "react-router-dom";

export const title = "Het product";

const Chapter3 = () => {
  const navigate = useNavigate();

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

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3;
