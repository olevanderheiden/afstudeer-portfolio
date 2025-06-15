import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Ontwerpen";

const Chapter2_2 = () => {
  const content = (
    <div>
      <h2>Ontwerpproces</h2>
      <ul>
        <li>
          Conceptualiseren: Je brengt samen met de doelgroep, door middel van
          verschillende methodes, hun waarden en behoeftes in kaart. Deze
          gebruik je om op de doelgroep afgestemde concepten te ontwerpen.
        </li>
        <li>
          Ontwerpen en prototypen: Je test een onderbouwd concept in
          verschillende iteraties bij de doelgroep, waardoor je bij elke
          iteratie een verbeterde versie genereert wat tot een eindontwerp
          leidt.
        </li>
      </ul>
      <p>
        Hier vind je alles over mijn ontwerpproces. Van mijn gemaakte ontwerpen
        tot het overlegproces met mijn stagebedrijf over deze ontwerpen.
      </p>
      <h3>Ontwerpproces portfolio website</h3>

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
      <h3>Ontwerpproces afstudeerproject</h3>
      <AudioPlayer
        fileName="content/chapter2/2.2uitLegOnwerpSchets1.mp3"
        title="Uitleg van mijn gedachteproces tijdens het maken van de eerste schets"
      />
      <ImageElement
        src="content/chapter2/prototype1DrawnPrototype.png"
        title="Prototype 1 low fidelity prototype 1 (figma pagina ontwerp)"
        alt="Een afbeelding die de algemene layout van de over ons pagina laat zien. Er is nog geen gebruik gemaakt van kleuren of echte foto's. Er is een balk met navigatie opties aanwezig. Daaronder zijn er velden om afbeeldingen van verschillende afdelingen binnen Digitaal Toegankelijk te laten zien. Onder deze sectie vind je twee afbeeldingen naast elkaar die het kantoor van Digitaal Toegankelijk laten zien. Zowel de onder- als bovenverdieping. Als laatste sectie boven de footer vind je nog twee afbeeldingen die het werk van Digitaal Toegankelijk laten zien met een voor en na afbeelding."
      />
      <h4>Feedback ontvangen tijdens terugkomdag</h4>
      <p>
        Na het maken van dit eerste prototype heb ik de mogelijkheid gehad om
        tijdens een terugkomdag op school mijn concept met een van de docenten
        te bespreken. Dit was een erg waardevolle ervaring. Ik kreeg hierdoor de
        tip om te kijken naar websites die meer content tonen terwijl je scrolt.
        Iets vergelijkbaars zou ik namelijk ook kunnen doen met mijn audio
        ervaring, door meer content te tonen terwijl de audio naar verschillende
        setcties van de audio ervaring scrolt. Hoe haalbaar dit is zal nog
        moeten blijken, maar het is wel een idee dat zowel mij als mijn
        stagebedrijf erg aanspreekt. Het voorbeeld wat hier als inspiratie
        diende vindt u in de bronnenlijst aan de rechterkant van deze pagina.
      </p>
      <AudioPlayer
        fileName="content/chapter2/2.2InterviewPim.mp3"
        title="Feedback op schets 1 door Pim"
      />
      <ImageElement
        src="content/chapter2/prototype2DrawnPrototype.png"
        title="Prototype 2 low fidelity prototype 2 (figma pagina ontwerp) Aangepast na feedback"
        alt="Een afbeelding die de geüpdate layout laat zien die is ontstaan na de feedback van Pim. De sectie over verschillende afdelingen is vervangen door secties over verschillende werknemers van Digitaal Toegankelijk. Dit maakt de ervaring meer persoonlijk. Ook de sectie over projecten is vervangen door een segment over de filosofie van Digitaal Toegankelijk. De layout is anderzijds onveranderd. Lees de alt tekst van de vorige versie voor meer uitleg."
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_2;
