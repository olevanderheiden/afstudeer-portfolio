import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import IframeElement from "../../pageElements/iframeElement";

export const title = "Iteratie 3 Eerste werkende versie van de applicatie";

const Chapter4_5 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <p>
        Ik vond het erg belangrijk om met de audiogebruikers te kunnen testen.
        Daarvoor het ik een live versie gebouwd die je hieronder vindt. De
        feedbackpunten die ik heb gekregen van de audiogebruikers vind je
        hieronder ook terug.
      </p>
      <AudioPlayer
        fileName="content/chapter4/4.5beargumenterenTestVersie.mp3"
        title="Beargumentering test versie (coming soon)"
      />
      <IframeElement
        src="https://olevanderheiden.github.io/afstudeerProjectAudioTestVersion/"
        title="Proof of concept (Test versie)"
      />
      <h3>Feedback van de audiogebruikers</h3>
      <AudioPlayer
        fileName="content/chapter2/2.4testenAudioGebruikersProofOfConcept.mp3"
        title="Test resultaten van testen met Audio gebruikers"
      />
      <h3>
        Feedback van auditor bij Digitaal Toegankelijk omtrent toegankelijkheid
      </h3>
      <AudioPlayer
        fileName="content/chapter4/4.5feedbackAuditorDigitaalToegankelijk.mp3"
        title="Feedback op toegankelijkheid van de applicatie (coming soon)"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_5;
