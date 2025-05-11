import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Onderzoeken";

const Chapter2_1 = () => {
  const content = (
    <div>
      <h2>Onderzoek</h2>
      <ul>
        <li>
          Onderzoeken: Je onderbouwt je analyse en relevantie van het
          praktijkprobleem met data vanuit verschillende beargumenteerde soorten
          betrouwbare bronnen en onderzoeksmethoden.
        </li>
        <li>
          Analyseren: Je voert een kritische evaluatie uit en verbindt hiermee
          de verschillende onderzoeksuitkomsten waarmee je antwoord geeft op de
          deelvragen en hoofdvraag.
        </li>
      </ul>
      <p>
        In dit deel hoofdstuk vind u alle bevindingen die ik gedaan heb tijdens
        mijn onderzoek. Ik introduceer hier ook de geïnterviewden en tevens mijn
        onderzoek methode
      </p>
      <h3>Audio gebruiker interviews</h3>
      <AudioPlayer
        fileName="content/chapter2/2.1introInterviewAudioGebruikers.mp3"
        title="Introductie onderzoek opset, vragenlijst en mail format"
      />
      <AudioPlayer
        fileName="content/chapter2/2.1Introductie geinterviewden  (Complete versie 09-05-2025).mp3"
        title="Introductie geinterviewden 09-05-2025"
      />
      <AudioPlayer
        fileName="content/chapter2/2.1inzichtenAudioGebruikerInterviews(11-05-2025).mp3"
        title="Inzichten uit de interviews met gebruikers 11-05-2025"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_1;
