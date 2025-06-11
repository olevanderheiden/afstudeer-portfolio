import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Welke alternatieven bestaan er en wat leren we ervan?";

const Chapter3_3 = () => {
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
        fileName="content/chapter3/3.3.antwoordDeelvraag3.mp3"
        title="Antwoord deelvraag 3"
      />
      <p>
        Read speaker is recentelijk ook gebruik gaan maken voor AI stemmen voor
        hun voorlees functionaliteit. Hoewel dit meer natuurlijk klinkend lees
        ervaringen geeft is dit nog erg merkbaar. Daar naast is het ook niet erg
        sociaal wenseljk Ai stemmen te gebruiken. Dit is nog een nadeel voor het
        gebruik van dit alternatief
      </p>
    </div>
  );

  return <Layout content={content} sources={sources} pageTitle={title} />;
};

export default Chapter3_3;
