import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Onderzoeken";

const Chapter2_1 = () => {
  const content = (
    <div>
      <h2>Onderzoek</h2>
      <p>
        In dit deel hoofdstuk vind u alle bevindingen die ik gedaan heb tijdens
        mijn onderzoek. Ik introduceer hier ook de geïnterviewden en tevens mijn
        onderzoek methode
      </p>
      <AudioPlayer
        fileName="content/chapter2/2.1introInterviewAudioGebruikers.mp3"
        title="Introductie onderzoek opset, vragenlijst en mail format"
      />
      <AudioPlayer
        fileName="content/chapter2/2.1Introductie geinterviewden (incomplete versie 23-04-2025).mp3"
        title="Introductie geinterviewden en vragen over gebruikte hulpmiddelen (Interviews tot 23-04-2025)"
      />
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter2_1;
