import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Zelfreflectie";

const Chapter5_2 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter5/5.2.reflectie.mp3"
        title="STARR reflectie"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter5_2;
