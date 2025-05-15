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
      <h3>Desk research</h3>
      <p>
        Hier vind je al mijn desk research. Je vind hier de conclusies die ik
        hier uit heb getrokken. In hoofdstuk 3 beantwoord ik ook iedere
        deelvraag op een individuele basis.
      </p>
      <h4>Voegt de audio ervaring iets toe?</h4>
      <p>
        Om de vraag te beantwoorden ben ik op zoek gegaan naar bedrijven en
        instanties die en speciale audio ervaring aanbieden. Deze heb ik
        gevonden in de corspondent. Ik had all eens gehoord tijdens mijn minor
        journalistiek over het feit dat de corspondent, veel van hun artikelen
        ook in audio vorm aanbieden. Ook niet onbelangrijk is echter dat ze dit
        doen door het te laten voorlezen dor de persoon die het artikel
        geschreven heeft. Dit lijkt dus veel op de audio ervaring die we aan het
        bedenken zijn bij DT. Ik heb een aantal artikelen geluisterd die de
        corspondent aanbied. Je kan ze terug vinden in de bronnenlijst aan de
        rechter kant. De corspondent geef aan op hun website dat artikelen die
        in audio vorm beschickbaar zijn vaker worden gelezen dan artikelen die
        alleen in tekstvorm zijn. Dit is een belangrijke bevinding, en zecht
        iets over de toegevoegde waardie die een aurdio ervaring kan hebben.
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_1;
