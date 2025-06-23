import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Welke pagina's zijn geschikt voor een audioervaring?";

const Chapter3_5 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.5.meestGeschicktePagina.mp3"
        title="Antwoord deelvraag 5"
      />
      <p>
        Je kan het volledige gesprek waarin ik heb besloten welke pagina we gaan
        doen voor de audio-ervaring in de bijlagen vinden onder het kopje
        "Overige gesprekken" in het bestand "Gesprek met Pim en Jo (07-04-2025)"{" "}
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3_5;
