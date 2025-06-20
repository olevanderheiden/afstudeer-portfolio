import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Ontwerpen";

const Chapter2_2 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
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
      <AudioPlayer
        fileName="content/chapter2/2.2.WatHebIkGedaanVoorOntwerpen.mp3"
        title="Wat heb ik gedaan voor ontwerpen?"
      />
      <ImageElement
        src="content/chapter2/2.2.persona.png"
        title="Persona Martin de Vries (klanten van Digitaal Toegankelijk)"
        alt="Persona van Martin de Vries, 42-jarige man in marketing en websitebeheer. Praktisch, kostenbewust, weinig kennis van digitale toegankelijkheid. Gericht op efficiëntie en minimale klachten, met frustratie over mogelijke kosten en regelgeving."
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_2;
