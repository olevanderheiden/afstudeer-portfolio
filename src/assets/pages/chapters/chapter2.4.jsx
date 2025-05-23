import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Ondernemen";

const Chapter2_4 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
        Ondernemende houding en vaardigheden: Je hebt steekhoudende argumenten die -voor het bedrijf- de meerwaarde van jouw product aantonen ten opzichte van in het werkveld gebruikte alternatieven.
        </li>
        <li>
          Projectmatig werken en communiceren: Je onderhoudt contact met relevante stakeholders en experts binnen en buiten het bedrijf. 
          Je werkt effectief met hen samen, houdt controle over je proces en communiceert daar duidelijk en regelmatig over.
        </li>
      </ul>
      <p>Over Ondernemen</p>
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter2_4;
