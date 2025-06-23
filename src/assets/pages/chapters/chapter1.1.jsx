import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Digitaal Toegankelijk";

const Chapter1_1 = () => {
  const content = (
    <div>
      <h2>Digitaal Toegankelijk</h2>
      <AudioPlayer
        title="Over Digitaal Toegankelijk"
        fileName="content/chapter1/1.1OverDigitaalToegankelijk.mp3"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_1;
