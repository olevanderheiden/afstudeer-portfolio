import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import IframeElement from "../../pageElements/iframeElement";

export const title = "Iteratie 4 proof of concept";

const Chapter4_6 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <p>
        Hier vind je mijn uiteindelijke proof of concept in zijn live versie.
        Deze versie bevat de verbeteringen die ik heb gemaakt op basis van de
        feedback die ik heb gekregen van audio gebruikers als ook de klanten van
        Digitaal Toegankelijk.
      </p>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter4/4.6.onderbouwingEindVersie.mp3"
        title="Onderbouwing eindversie"
      />
      <IframeElement
        src="https://olevanderheiden.github.io/afstudeerProjectFinalPortfolioVersion/"
        title="Proof of concept (Eindversie) (Build datum: 16-06-2025)"
      />
      <p>
        Dit is de laatse versie die ik heb gemaakt voor de deadline van mijn
        afstudeer portfolio. Ik heb echter nog een aantal weken de tijd om nog
        wat verbeteringen of nieuwe features toe te voegen. om te zorgen dat het
        proof of concept wat hier wordt getoond niet instrijd is met wat ik
        vertel in de onderbouwing hier boven, is het proof of concept wat hier
        wordt getoond op een eigen github repository geplaatst. Ik hoop nog wat
        verbeteringen te kunnen demonstreren tijdens de presentatie van mijn
        afstudeer project. De meest recente versie van het proof of concept. is
        te vinden op deze{" "}
        <a href="https://olevanderheiden.github.io/afstudeerProject/">
          Github pages pagina
        </a>
        .
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_6;
