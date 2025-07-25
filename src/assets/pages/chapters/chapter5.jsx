import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Conclusie";

const Chapter5 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter5/5.intro.mp3"
        title="Hoofdstuk 5 intro"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter5;
