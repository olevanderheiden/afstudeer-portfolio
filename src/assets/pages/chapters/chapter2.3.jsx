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
        fileName="content/chapter2/2.3.Ontwikkelen.mp3"
        title="Wat heb ik gedaan voor ontwikkelen?"
      />
      <p>
        De lijst met MoSCoW-prioriteiten, die ik heb opgesteld met mijn
        opdrachtgever Digitaal Toegankelijk, is te vinden op pagina{" "}
        <a href="chapter1.2">1.2 Probleemstelling en onderzoeksvraag</a>.
      </p>
      <p>
        Mijn technische analyse is te vinden op pagina{" "}
        <a href="chapter4.4">4.4 Onderzoek ontwikkeltools en technieken</a>.
      </p>
      <p>
        Mijn verschillende prototypes zijn te vinden in{" "}
        <a href="chapter4">Hoofstuk 4: Het product</a> en de deelhoofdstukken
        daarin.
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_3;
