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
      <h3>Testen met Doelgroep (Klikbaar prototype 1)</h3>
      <AudioPlayer
        fileName="2.1vijfVragenMethodeOnderbouwing.mp3"
        title="Onderbouwing 5 vragen methode"
      />
      <h3>Desk research</h3>
      <p>
        Hier vind je al mijn desk research. Je vind hier de conclusies die ik
        hier uit heb getrokken. In hoofdstuk 3 beantwoord ik ook iedere
        deelvraag op een individuele basis.
      </p>
      <h4>Wat is een goed ontwerp voor audio gebruikers?</h4>
      <p>
        Zoals je hebt kunnen horen in de interviews. Zijn er een aantal dingen
        die belangrijkzijn voor audio gebruikers. War er belangrijk wordt
        gevonden verschilt per persoon. Maar is ook afhankelijk van wat voor
        audio ervaring je aanbied. Zo is het overbrengen van enkel informatie
        vaak makkelijker te doen in tekstvorm. Dit heeft te maken met het feit
        dat het lastiger is om precieze segmenten ten vinden in een audio
        bestand. Echter voor het overbrengen van emotie, sfeer en persoonlijke
        verhalen is audio vell geschikter. OOk word er doro alle geinterviewden
        voorkeur gegeven aan menselijke stemmen. Text to speech heeft zo zijn
        plaats, maar zeker niet bij een persoonlijk verhaal. AI daar in tegen
        word als onprettig ervaren door iedere geinterviewde. Zo wordt het als
        onpersoonlijk, vlak en niet authentiek ervaren. Bovendien is de uistraap
        van AI vaak niet logisch omdat het niet altijd op een zin of alinea
        basis wordt gedaan maar per klank. Dit vinden de geinterviewden niet
        pretig!
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
      <h4>Welke alternatieven bestaan er en wat leren we ervan?</h4>
      <p>
        Eén van de alternatieven is al genoemd tijdens de interviews. Dit zijn{" "}
        <a href="begrippen?=SCREENREADER">schermlezers </a>zoals:{" "}
        <a href="begrippen?search=JAWS">Jaws</a>,{" "}
        <a href="begrippen?search=NVDA">NVDA</a>,{" en"}
        <a href="begrippen?search=VoiceOver">VoiceOver</a>. Dit zijn programma's
        die de tekst op een scherm voorlezen. Dit is dus absoluute een concurent
        van de audio ervaring die ik aan het ontwikkelen ben. Dit heeft echter
        heel andere doeleinden. Het overbrengen van emotie en sfeer is namelijk
        niet mogelijk met een schermlezer. Dit komt doordat er gebruik wordt
        gemaakt van text to speech(een computer stem). En dit soort stemmen zijn
        niet bedoeld om emotie over te brengen. Dit wordt niet alleen bevestigd
        door mein eigen ervaringen met het gebruiken van schermlezers die ik heb
        gehad in het verleden. Maar de mensen die ik heb geinterviewd die
        gebruik maken van schermlezers bevestigen dit ook.
      </p>
      <h4>Welke pagina's zijn geschikt voor een audio ervaring?</h4>
      <p>
        Tijdens mijn ontwikkel proces heb ik meerdere pagina's overwogen als
        demonstratie van de audio ervaring.
      </p>
      <ul>
        <li>
          Blog/Nieuws pagina: Digitaal toegankelijk heef een blog dus dit zou
          technisch gezien makkelijk kunnen.
        </li>
        <li>
          Overons pagina: Dit is een pagina die informatie over Digitaal
          toegankelijk en haar medewerkers geeft. Dit is erg geschickt voor een
          audio ervagin omdat het de mogelijkheid biedt om mensen een idee te
          geven van de toon, sfeer en filosofie van Digitaal Toegankelijk.
        </li>
        <li>
          De hele website: Dit maakt de audio ervaring een beshickbaar over de
          hele website en dus bruikbaar voor wie dan ook de site bezoekt.
        </li>
        <li>
          Gesymuleeerde webshop: Dit zou een losse demo zijn om het nut van de
          audio ervaring te laten zien. Dit is echter niet een daadwerkelijke
          toepassing die door iedereen die digitaal toegankelijk bzoekt
          grootschalig gebruikt of toegepast kan worden.
        </li>
      </ul>
      <p>
        Na het bespreken van de diverse mogelijheden met Pim kwamen we tot de
        conclusie dat het meest ligsch zou zijn om de pagina er een te laten zij
        die ook daadwerkelijk door DT gbruikt kon worden. Hier door viel de
        gesimuleerde webshop af. Ook was het al snel duidelijk tijdens
        gesprekken dat de hele website deze feature geven veel te ambitieus zou
        zijn. Dit was niet alleen door een gebrek aan tijd die ik heb voor mijn
        stage project. Maar ook omdat dit de beschickbare middelen voor het
        maken van dit product ernstig zou beperken. Dit komt doordat DT voor hun
        website Wordpress gebruikt. En hoewel dit erg geschickt is voor het
        maken van een website. Is het niet het meest flexibele CMS(content
        management systeem) dat er is. Met het oog hier op heb ik samen met Pim
        besloten dat ik voor nu mijn audio ervaring zal maken in een systeem
        waar mee ik goed bekend ben. De pagina zal voor nu een op zich zelf
        staande pagina zijn.
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_1;
