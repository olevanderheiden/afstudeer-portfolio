import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Welke alternatieven bestaan er en wat leren we ervan?";

const Chapter3_3 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.3.antwoordDeelvraag3.mp3"
        title="Antwoord deelvraag 3"
      />
      <p>
        ReadSpeaker is recentelijk ook gebruik gaan maken van AI-stemmen voor
        hun voorleesfunctionaliteit. Hoewel dit meer natuurlijk klinkende
        leeservaringen geeft, is het nog erg merkbaar dat het AI-stemmen zijn.
        Daarnaast is het voor Digitaal Toegankelijk niet wenselijk AI-stemmen te
        gebruiken. Dit is nog een nadeel voor het gebruik van dit alternatief
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3_3;
