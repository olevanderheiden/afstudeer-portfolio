import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Wat is de toegevoegde waarde van de audioervaring?";

const Chapter3_2 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.2.antwoordDeelvraag2.mp3"
        title="Antwoord deelvraag 2"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3_2;
