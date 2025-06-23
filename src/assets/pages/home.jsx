import React from "react";
import Layout from "../pageElements/Layout";
import AudioPlayer from "../pageElements/audioPlayer";

const HomePage = () => {
  const content = (
    <div>
      <h2>Welkom op het afstudeerportfolio van Ole van der Heiden</h2>
      <p>
        Het portfolio is voor het overgrote deel in audio vorm opgenomen. Je
        kunt hieronder horen hoe dit in de praktijk werkt.
      </p>
      <AudioPlayer fileName="content/home/homeV2.mp3" title="Homepage intro" />
    </div>
  );

  return <Layout content={content} />;
};

export default HomePage;
