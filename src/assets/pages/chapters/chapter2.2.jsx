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
      <ImageElement
        src="content/chapter2/prototype1DrawnPrototype.png"
        title="Prototype 1 low fidelity prototype 1 (figma pagina ontwerp)"
        alt="Een afbeelding die de algemene layout van de overons pagina laat zien. Er is nog geen gebruik gemaakt van kleuren echte foto's. Er is een balk met navigatie opties aanwezig. Daar onder zijn er velden om afbeeldingen van verschillende afdelingen binnen digitaal toegankelijk te laten zien. Onder deze sectie vind je een twee afbeeldingen naast elkaar die het kantoor van Digitaal toegankelijk laten zien. Zowel de onder als boven verdieping. Als laatste sectie boven de footer vind je nog twee afbeeldingen die het werk van Digitaal toegankelijk laten zien met een voor en na afbeelding."
      />
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter2_2;
