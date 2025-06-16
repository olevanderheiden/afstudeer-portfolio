import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import IframeElement from "../../pageElements/iframeElement";

export const title = "Iteratie 3 Eerste werkende versie van de applicatie";

const Chapter3_10 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <p>
        Ik vond het erg belangrijk om met de audiogebruikers te kunnen testen.
        Daarvoor het ik een live versie gebouwd die je hieronder vindt. De
        feedbackpunten die ik heb gekregen van de audiogebruikers vind je
        hieronder ook terug.
      </p>
      <IframeElement
        src="https://olevanderheiden.github.io/afstudeerProjectAudioTestVersion/"
        title="Proof of concept (Test versie)"
      />
      <h3>Feedback van de audiogebruikers</h3>
      <AudioPlayer
        fileName="content/chapter2/2.4testenAudioGebruikersProofOfConcept.mp3"
        title="Test resultaten van testen met Audio gebruikers"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3_10;
