import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Ontwerpen";

const Chapter2_2 = () => {
  const content = (
    <div>
      <h2>Ontwerp proces</h2>
      <p>
        Hier vind je alles over mijn ontwerp proces. Van mijn gemaakte ontwerpen
        tot het overleg proces met mijn stage bedrijf over deze ontwerpen.
      </p>
      <h3>Ontwerp proces portfolio website</h3>
      <p>Informatie over de portfolio website komt hier....</p>
      <h3>Ontwerp proces afstudeer project</h3>
      <ImageElement
        src="content/chapter2/prototype1DrawnPrototype.png"
        title="Prototype 1 low fidelity prototype 1 (figma pagina ontwerp)"
        alt="Een afbeelding die de algemene layout van de overons pagina laat zien. Er is nog geen gebruik gemaakt van kleuren echte foto's. Er is een balk met navigatie opties aanwezig. Daar onder zijn er velden om afbeeldingen van verschillende afdelingen binnen digitaal toegankelijk te laten zien. Onder deze sectie vind je een twee afbeeldingen naast elkaar die het kantoor van Digitaal toegankelijk laten zien. Zowel de onder als boven verdieping. Als laatste sectie boven de footer vind je nog twee afbeeldingen die het werk van Digitaal toegankelijk laten zien met een voor en na afbeelding."
      />
      <AudioPlayer
        fileName="content/chapter2/2.2InterviewPim.mp3"
        title="Feedback op schets 1"
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
