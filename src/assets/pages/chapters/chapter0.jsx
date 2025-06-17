import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Introductie";

const Chapter0 = () => {
  const content = (
    <div>
      <h2>Hoofdstuk 0: Introducties</h2>
      <h3>Introductie stage project</h3>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter0/0.introductie.mp3"
        title="Introducties"
      />
      <h3>Ontwerp en bouw van de portfolio website</h3>

      <AudioPlayer
        fileName="content/chapter2/2.2PortfolioSiteTourV2.mp3"
        title="Portfolio website tour en uitleg van designkeuzes"
      />
      <ImageElement
        src="content/chapter2/PortfolioSiteEersteOntwerpSchets.png"
        title="Portfolio website ontwerpschets gemaakt April 2025"
        alt="Dit is de ontwerpschets die ik gemaakt heb voor mijn porfolio website. Het is een hele ruwe schets zonder kleur of content op de website. Er is een menubalk bovenin met pagina's zoals: Home, Bronnen en begrippen, Aan
        de linkerkant is een lijst van hoofdstukken te zien waarmee je naar de verschillende hoofdstukken van het portfolio kan nagiveren.
        Het middelste gedeelte van de pagina is waar de daadwerkelijke content van de pagina te zien is. Dit kunnen afbeeldingen, teksten of audiobestanden zijn.
        De rechterkant bevat een lijst van gebruikte bronnen bij ieder hoofdstuk. Als laatste de sectie onderaan de pagina is de footer met hierin vooral een copyright icon en referentie wie deze site heeft gemaakt. "
      />
      <ImageElement
        src="content/chapter2/audOntwerpPaginaOnderzoeken.png"
        title="Oud ontwerp voor het redesign (beluister audio opname voor meer details)"
        alt="Een afbeelding die het oude ontwerp laat zien van de portfolio website.
      Objecten hebben heel veel witruimte en zijn daardoor klein en haast onleesbaar
      voor lezers!"
      />
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter0;
