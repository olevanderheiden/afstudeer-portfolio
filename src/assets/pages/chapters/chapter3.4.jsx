import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Hoe zorgen we ervoor dat de ervaring inspireert?";

const Chapter3_4 = () => {
  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.4.hoeZorgenWeErVoorDatDeErvaringInspireerd.mp3"
        title="Antwoord deelvraag 4"
      />
      <h3>Mail communicatie bewijs</h3>
      <ImageElement
        title="Mail communicatie bewijs Deel 1"
        src="content/chapter3/3.4.mailCommunicatieBewijsDeel1.png"
        alt="Toont mail communicatatie tussen mij en klanten van digitaal toegankelijk. Er wordt onder andere gesproken over de problemen met pauzeren. En het fijt dat er geen mogelijheid is om vooruit te spoelen in de audio"
      />
      <ImageElement
        title="Mail communicatie bewijs Deel 2"
        src="content/chapter3/3.4.mailCommunicatieBewijsDeel2.png"
        alt="Toont mail communicatatie tussen mij en klanten van digitaal toegankelijk. Er wordt onder andere gesproken over de problemen met pauzeren. En het fijt dat er geen mogelijheid is om vooruit te spoelen in de audio"
      />
    </div>
  );

  return <Layout content={content} sources={sources} pageTitle={title} />;
};

export default Chapter3_4;
