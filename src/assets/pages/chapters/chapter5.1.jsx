import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Conclusies";

const Chapter5_1 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer fileName="test.mp3" title="Eind conclusies (coming soon)" />
      <p>Chapter 0 is coming here!</p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter5_1;
