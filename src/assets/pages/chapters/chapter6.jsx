import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Aanbevelingen";

const Chapter6 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter6/6.aanbevelingen.mp3"
        title="Mijn aanbevelingen voor doorontwikkeling"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter6;
