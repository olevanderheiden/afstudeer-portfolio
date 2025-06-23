import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import ImageElement from "../../pageElements/imageElement";

export const title = "Hoe zorgen we ervoor dat de ervaring inspireert?";

const Chapter3_4 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.4.hoeZorgenWeErVoorDatDeErvaringInspireerd.mp3"
        title="Antwoord deelvraag 4"
      />
      <h3>Bewijs van e-mailcommunicatie</h3>
      <ImageElement
        title="Bewijs van e-mailcommunicatie Deel 1"
        src="content/chapter3/3.4.mailCommunicatieBewijsDeel1.png"
        alt="Toont e-mailcommunicatie tussen mij en klanten van Digitaal Toegankelijk. Er wordt onder andere gesproken over de problemen met pauzeren. En het feit dat er geen mogelijkheid is om vooruit te spoelen in de audio"
      />
      <ImageElement
        title="Bewijs van e-mailcommunicatie Deel 2"
        src="content/chapter3/3.4.mailCommunicatieBewijsDeel2.png"
        alt="Toont e-mailcommunicatie tussen mij en klanten van Digitaal Toegankelijk. Er wordt onder andere gesproken over de problemen met pauzeren. En het feit dat er geen mogelijkheid is om vooruit te spoelen in de audio"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3_4;
