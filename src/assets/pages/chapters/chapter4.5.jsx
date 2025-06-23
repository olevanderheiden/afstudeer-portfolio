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
        fileName="content/chapter4/4.5.beargumenterenTestVersie.mp3"
        title="Beargumentering testversie"
      />
      <IframeElement
        src="https://olevanderheiden.github.io/afstudeerProjectAudioTestVersion/"
        title="Proof of concept (Testversie)"
      />
      <h3>Feedback van de audiogebruikers</h3>
      <AudioPlayer
        fileName="content/chapter2/2.4testenAudioGebruikersProofOfConcept.mp3"
        title="Testresultaten van testen met audiogebruikers (5 testers)"
      />
      <h3>
        Feedback van auditor bij Digitaal Toegankelijk omtrent toegankelijkheid
      </h3>
      <AudioPlayer
        fileName="content/chapter4/4.5.feedbackOpToegankelijkheid.mp3"
        title="Feedback op toegankelijkheid van de applicatie"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_5;
