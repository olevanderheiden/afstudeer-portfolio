import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Inleiding";

const Chapter1 = () => {
  const content = (
    <div>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="test.mp3"
        title="Chapter 1: Introductie (coming soon)"
      />
      <h2>Chapter 1</h2>
      <p>Chapter 1 is coming here!</p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1;
