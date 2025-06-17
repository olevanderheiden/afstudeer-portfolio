import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Inleiding";

const Chapter1 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter1/1.introductie.mp3"
        title="Hoofdstuk 1: Introductie"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1;
