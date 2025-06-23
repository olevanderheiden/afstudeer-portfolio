import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Samenvatting";

const Chapter0_1 = () => {
  const content = (
    <div>
      <h2>Samenvatting</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter0/0.1.Samenvatting.mp3"
        title="Samenvatting"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter0_1;
