import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Nawoord";

const Chapter7 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer fileName="content/chapter7/7.nawoord.mp3" title="Nawoord" />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter7;
