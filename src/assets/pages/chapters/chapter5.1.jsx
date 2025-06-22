import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Conclusies";

const Chapter5_1 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter5/5.1.conclusies.mp3"
        title="Eindconclusies"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter5_1;
