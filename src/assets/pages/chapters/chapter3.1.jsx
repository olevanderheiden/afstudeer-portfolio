import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Wat is een goed ontwerp voor audiogebruikers?";

const Chapter3_1 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.1.WatIsEenGoedOntwerpVoorAudioGebruikers.mp3"
        title="Antwoord deelvraag 1"
      />
      <p>Info over deel vraag 1 komt hier</p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3_1;
