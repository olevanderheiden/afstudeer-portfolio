import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import IframeElement from "../../pageElements/iframeElement";

export const title = "Iteratie 4 proof of concept";

const Chapter4_6 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <p>
        Hier vind je mijn uiteindelijke proof of concept in zijn live versie.
        Deze versie bevat de verbeteringen die ik heb gemaakt op basis van de
        feedback die ik heb gekregen van audio gebruikers als ook de klanten van
        Digitaal Toegankelijk.
      </p>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="test.mp3"
        title="Onderbouwing eindversie (coming soon"
      />
      <IframeElement
        src="https://olevanderheiden.github.io/afstudeerProject/"
        title="Proof of concept (Eindversie)"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_6;
