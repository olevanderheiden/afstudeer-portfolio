import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Onderzoeksmethoden";

const Chapter1_4 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <AudioPlayer
        fileName={"content/chapter1/1.4.onderzoekMethoden.mp3"}
        title={"Gebruikte onderzoeksmethoden"}
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_4;
//
