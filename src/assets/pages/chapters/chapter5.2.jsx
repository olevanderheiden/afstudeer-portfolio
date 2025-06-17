import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Zelf reflectie";

const Chapter5_2 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer fileName="test.mp3" title="Zelf reflectie (coming soon)" />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter5_2;
