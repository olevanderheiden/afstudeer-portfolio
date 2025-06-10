import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Ondernemen";

const Chapter2_4 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
          Ondernemende houding en vaardigheden: Je hebt steekhoudende argumenten
          die -voor het bedrijf- de meerwaarde van jouw product aantonen ten
          opzichte van in het werkveld gebruikte alternatieven.
        </li>
        <li>
          Projectmatig werken en communiceren: Je onderhoudt contact met
          relevante stakeholders en experts binnen en buiten het bedrijf. Je
          werkt effectief met hen samen, houdt controle over je proces en
          communiceert daar duidelijk en regelmatig over.
        </li>
      </ul>
      <p>
        Ik heb tijdens het ontwikkelen van mijn project contact gehouden met een
        aantal stakeholders. Dit waren DT mijn opdracht gever, audio gebruikers
        en een aantal klanten van DT. Ik heb na het maken van mijn eerste
        clickbare prototype getest met de klanten van DT en de eerste
        functionele versie getest met audio gebruikers. De feedback die ik hier
        bij heb ontvangen vind je hier onder.
      </p>
      <AudioPlayer
        fileName="content/chapter2/2.4testenAudioGebruikersProofOfConcept.mp3"
        title="Test resultaten van testen met Audio gebruikers"
      />
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter2_4;
