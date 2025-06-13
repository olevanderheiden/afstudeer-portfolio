import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Ontwerpen";

const Chapter2_2 = () => {
  const content = (
    <div>
      <h2>Ontwerp proces</h2>
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
        Hier vind je alles over mijn ontwerp proces. Van mijn gemaakte ontwerpen
        tot het overleg proces met mijn stage bedrijf over deze ontwerpen.
      </p>
      <h3>Ontwerp proces portfolio website</h3>
      <p>Informatie over de portfolio website komt hier....</p>
      <AudioPlayer
        fileName="content/chapter2/2.2PortfolioSiteTourV2.mp3"
        title="Porfolio website tour en uitleg van design keuzes"
      />
      <ImageElement
        src="content/chapter2/PortfolioSiteEersteOntwerpSchets.png"
        title="Portfolio website ontwerp schets gemaakt April 2025"
        alt="Dit is de ontwerp schets die ik gemaakt heb voor mijn porfolio website. Het is een hele ruwe schets zonder kleur of content op de website. Er is een menu balk bovenin met pagina's zoals: Home, Bronnen en begrippen, Aan
        de linker kant is een lijst van hoofstukken te zien waar mee je naar de verschillende hoofdstukken van het portfolio kan nagiveren.
        Het middelste gedeelte van de pagina is waar de daadwerkelijke content van de pagina te zien is. Dit kunnen afbeeldingen, teksten of audio bestanden zijn.
        De rechter kant bevat een lijst van gebruikte bronnen bij ieder hoofstuk. Als laatste de sectie onder aan de pagina is de footer met hier in vooral een copyright icon en referenctie wie dze site heeft gemaakt. "
      />
      <ImageElement
        src="content/chapter2/audOntwerpPaginaOnderzoeken.png"
        title="Aud ontwerp voor het redesign (beluister audio opname voor meer details)"
        alt="Een afbeelding die het aude ontwerp laat zien van de portfolio website.
      Objecten hebben heel veel wit ruimte en zijn daardoor klein en haast onleesbaar
      voor lezers!"
      />
      <h3>Ontwerp proces afstudeer project</h3>
      <AudioPlayer
        fileName="content/chapter2/2.2uitLegOnwerpSchets1.mp3"
        title="Uitleg van mijn gedachte proces tijdens het maken van de eerste schets"
      />
      <ImageElement
        src="content/chapter2/prototype1DrawnPrototype.png"
        title="Prototype 1 low fidelity prototype 1 (figma pagina ontwerp)"
        alt="Een afbeelding die de algemene layout van de overons pagina laat zien. Er is nog geen gebruik gemaakt van kleuren echte foto's. Er is een balk met navigatie opties aanwezig. Daar onder zijn er velden om afbeeldingen van verschillende afdelingen binnen digitaal toegankelijk te laten zien. Onder deze sectie vind je een twee afbeeldingen naast elkaar die het kantoor van Digitaal toegankelijk laten zien. Zowel de onder als boven verdieping. Als laatste sectie boven de footer vind je nog twee afbeeldingen die het werk van Digitaal toegankelijk laten zien met een voor en na afbeelding."
      />
      <h4>Feedback ontvangen tijdens terug kom dag</h4>
      <p>
        Na het maken van dit eerste prototype heb ik de mogelijkheid gehad
        tijdens een school terugkomdag mijn concept met een van de docenten te
        bespreken. Dit was een erg waardevolle ervaring. Ik kreeg hier door de
        tip om te kijken naar websites die meer content tonen terwijl je scrolt.
        Iets vergelijkbaars zou ik namelijk ook kunnen doen met mijn audio
        ervaring, door meer content te tonen terwijl de audio naar verschillende
        setcties van de audio ervaring scrolt. Hoe haalbaar dit is zal nog
        moeten blijken, maar het is wel een idee dat zowel mij als mijn stage
        bedrijf erg aanspreekt. Het voorbeeld wat hier als inspiratie diende
        vind u in de bronnen lijst aan de rechter kant van deze pagina.
      </p>
      <AudioPlayer
        fileName="content/chapter2/2.2InterviewPim.mp3"
        title="Feedback op schets 1 door Pim"
      />
      <ImageElement
        src="content/chapter2/prototype2DrawnPrototype.png"
        title="Prototype 2 low fidelity prototype 2 (figma pagina ontwerp) Aangepast na feedback"
        alt="Een afbeelding die de geupdate layout laat zien die is ontstaan na de feedback van pim. De sectie over verschillende afdelingen is vervangen door secties over verschillende leden van Digitaal Toegankelijk. Dit maakt de ervaring meer persoonlijk. Ook de sectie over projecten is vervangen door een segment over de filosofie van Digitaal Toegankelijk. De layout is ander zijds onverranderd. Lees de alt tekst van de vorige versie voor meer uitleg."
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_2;
