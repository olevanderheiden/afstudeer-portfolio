import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Ontwikkelen";

const Chapter2_3 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
          Technische kennis en analyse: Je toont met je prototype, waarin de
          resultaten van je technische analyse gebruikt worden, aan dat deze
          correct en van niveau was doordat het voldoet aan de randvoorwaarden
          uit je conceptontwerp.
        </li>
        <li>
          Implementeren, testen en opleveren: Je levert een iteratief ontwikkeld
          prototype op volgens de bedrijfsstandaarden. Je kunt de correcte
          werking garanderen.
        </li>
      </ul>
      <AudioPlayer
        fileName="content/chapter2/2.3.ontwikkelen.mp3"
        title="Wat heb ik gedaan voor ontwikkelen?"
      />
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter2_3;
