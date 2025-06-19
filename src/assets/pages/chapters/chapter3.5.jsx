import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Welke pagina's zijn geschikt voor een audioervaring?";

const Chapter3_5 = () => {
  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      <h2>{title}</h2>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter3/3.5.meestGeschicktePagina.mp3"
        title="Antwoord deelvraag 5"
      />
      <p>
        Je kan het volledige gesprek waar in ik heb besloten welke pagina we
        gaan doen voor de audio ervaring in de bijlagen. Onder het kopje
        "Overige gesprekken" in het bestand "Gesprek met Pim en Jo (07-04-2025)"{" "}
      </p>
    </div>
  );

  return <Layout content={content} sources={sources} pageTitle={title} />;
};

export default Chapter3_5;
