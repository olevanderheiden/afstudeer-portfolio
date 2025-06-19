import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

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
        fileName="content/chapter2/2.2.ontwerpen.mp3"
        title="Wat heb ik gedaan voor ontwerpen? (coming soon)"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_2;
