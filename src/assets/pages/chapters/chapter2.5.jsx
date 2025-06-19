import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Betrokken";

const Chapter2_5 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
          Maatschappelijke verantwoordelijkheid: Je houdt gedurende het hele
          proces rekening met de positieve en negatieve gevolgen van je product
          op directe en indirecte stakeholders, de natuur en de maatschappij.
        </li>
        <li>
          Lerend Vermogen: Je reflecteert regelmatig kritisch op je eigen
          handelen en vraagt om feedback om tot beargumenteerde verbeteracties
          te komen die je gedurende het proces aantoonbaar inzet.
        </li>
      </ul>
      <AudioPlayer
        fileName="content/chapter2/2.5.betrokken.mp3"
        title="Wat heb ik gedaan voor betrokken? (coming soon)"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_5;
