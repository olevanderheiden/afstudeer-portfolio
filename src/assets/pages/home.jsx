import React from "react";
import Layout from "../pageElements/Layout";
import AudioPlayer from "../pageElements/audioPlayer";

const HomePage = () => {
  const content = (
    <div>
      <h2>Welkom op de afstudeer portfolio van Ole va der Heiden</h2>
      <p>
        Dit portfolio is voor het over grote deel in Audio vorm. Gebruik de
        audio spelers in de verschillende (deel) hoofdstukken. Om naar
        bewijslevering en onderbouwing te luisteren. Is het geluid te zacht?,
        praat ik te langzaam?, of wil je naar een bepaalde sectie luisteren?
        Wees dan niet bang om de diverse besturings functies van de audio speler
        te gebruiken. Deze uitleg tekst is hieronder ook te beluisteren. Op die
        manier heeft u gelijk een idee van de audio speler.
      </p>
      <AudioPlayer fileName="content/home/home.mp3" title="Home page intro" />
    </div>
  );

  return <Layout content={content} />;
};

export default HomePage;
