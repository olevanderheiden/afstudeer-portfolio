import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";
import IframeElement from "../../pageElements/iframeElement";

export const title = "Introductie";

const Chapter0 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <h3>Introductie stageproject</h3>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter0/0.introductie.mp3"
        title="Introducties"
      />
      <h3>Ontwerp en bouw van de portfoliowebsite</h3>

      <AudioPlayer
        fileName="content/chapter2/2.2PortfolioSiteTourV2.mp3"
        title="Portfoliowebsite tour en uitleg van designkeuzes"
      />
      <IframeElement
        src="https://www.youtube.com/embed/-YGbKIHLt48?si=n3TXuyAVJ8cqr5R_"
        title="Tour door de code van de portfoliowebsite"
      />
      <ImageElement
        src="content/chapter2/PortfolioSiteEersteOntwerpSchets.png"
        title="Portfoliowebsite ontwerpschets gemaakt april 2025"
        alt="Dit is de ontwerpschets die ik gemaakt heb voor mijn porfoliowebsite. Het is een hele ruwe schets zonder kleur of content op de website. Er is een menubalk bovenin met pagina's zoals: Home, Bronnen en begrippen, Aan
        de linkerkant is een lijst van hoofdstukken te zien waarmee je naar de verschillende hoofdstukken van het portfolio kan nagiveren.
        Het middelste gedeelte van de pagina is waar de daadwerkelijke content van de pagina te zien is. Dit kunnen afbeeldingen, teksten of audiobestanden zijn.
        De rechterkant bevat een lijst van gebruikte bronnen bij ieder hoofdstuk. Als laatste de sectie onderaan de pagina is de footer met hierin vooral een copyright icon en referentie wie deze site heeft gemaakt. "
      />
      <ImageElement
        src="content/chapter2/audOntwerpPaginaOnderzoeken.png"
        title="Oud ontwerp voor het redesign (beluister audio-opname voor meer details)"
        alt="Een afbeelding die het oude ontwerp laat zien van de portfoliowebsite.
      Objecten hebben heel veel witruimte en zijn daardoor klein en haast onleesbaar
      voor lezers!"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter0;
