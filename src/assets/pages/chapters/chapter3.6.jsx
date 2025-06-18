import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title =
  "Welke tools zijn het meest geschikt voor deze applicatie?";

const Chapter3_6 = () => {
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
        fileName="content/chapter3/3.6.antwoordDeelvraag6.mp3"
        title="Antwoord deelvraag 6"
      />
      <p>
        De tabel en een meer uitgebreide uitleg van de voor en nadelen van de
        verschillende mogelijke tools vind je in{" "}
        <a href="chapter4.4">Hoofdstuk 4.4</a>
      </p>
    </div>
  );

  return <Layout content={content} sources={sources} pageTitle={title} />;
};

export default Chapter3_6;
