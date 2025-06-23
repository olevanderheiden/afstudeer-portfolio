import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Iteratie 1 ontwerpschetsen";

const Chapter4_2 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <AudioPlayer
        fileName="content/chapter2/2.2uitLegOnwerpSchets1.mp3"
        title="Uitleg van mijn gedachteproces tijdens het maken van de eerste schets"
      />
      <ImageElement
        src="content/chapter2/prototype1DrawnPrototype.png"
        title="Prototype 1 low fidelity prototype 1 (figma pagina ontwerp)"
        alt="Een afbeelding die de algemene layout van de 'Over ons' pagina laat zien. Er is nog geen gebruik gemaakt van kleuren of echte foto's. Er is een balk met navigatie opties aanwezig. Daaronder zijn er velden om afbeeldingen van verschillende afdelingen binnen Digitaal Toegankelijk te laten zien. Onder deze sectie vind je twee afbeeldingen naast elkaar die het kantoor van Digitaal Toegankelijk laten zien. Zowel de onder- als bovenverdieping. Als laatste sectie boven de footer vind je nog twee afbeeldingen die het werk van Digitaal Toegankelijk laten zien met een voor en na afbeelding."
      />
      <h4>Feedback ontvangen tijdens terugkomdag</h4>
      <p>
        Na het maken van dit eerste prototype heb ik de mogelijkheid gehad om
        tijdens een terugkomdag op school mijn concept met een van de docenten
        te bespreken. Dit was een erg waardevolle ervaring. Ik kreeg hierdoor de
        tip om te kijken naar websites die meer content tonen terwijl je scrolt.
        Iets vergelijkbaars zou ik namelijk ook kunnen doen met mijn audio
        ervaring, door meer content te tonen terwijl de audio naar verschillende
        secties van de audio ervaring scrolt. Hoe haalbaar dit is zal nog moeten
        blijken, maar het is wel een idee dat zowel mij als mijn stagebedrijf
        erg aanspreekt. Het voorbeeld wat hier als inspiratie diende vind je in
        de bronnenlijst aan de rechterkant van deze pagina.
      </p>
      <AudioPlayer
        fileName="content/chapter2/2.2InterviewPim.mp3"
        title="Feedback op schets 1 door Pim"
      />
      <ImageElement
        src="content/chapter2/prototype2DrawnPrototype.png"
        title="Prototype 2 low fidelity prototype 2 (Figma pagina-ontwerp) Aangepast na feedback"
        alt="Een afbeelding die de geüpdate layout laat zien die is ontstaan na de feedback van Pim. De sectie over verschillende afdelingen is vervangen door secties over verschillende werknemers van Digitaal Toegankelijk. Dit maakt de ervaring meer persoonlijk. Ook de sectie over projecten is vervangen door een segment over de filosofie van Digitaal Toegankelijk. De layout is anderzijds onveranderd. Lees de alt tekst van de vorige versie voor meer uitleg."
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_2;
