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
          die voor het bedrijf de meerwaarde van jouw product aantonen ten
          opzichte van in het werkveld gebruikte alternatieven.
        </li>
        <li>
          Projectmatig werken en communiceren: Je onderhoudt contact met
          relevante stakeholders en experts binnen en buiten het bedrijf. Je
          werkt effectief met hen samen, houdt controle over je proces en
          communiceert daar duidelijk en regelmatig over.
        </li>
      </ul>
      <AudioPlayer
        fileName="content/chapter2/2.4.ondernemen.mp3"
        title="Wat heb ik gedaan voor ondernemen?"
      />
      <p>
        Voor meer informatie over mijn contact met stakeholders en experts, zie{" "}
        <a href="chapter2.5">Hoofdstuk 2.5</a> en{" "}
        <a href="chapter4">Hoofdstuk 4</a>.
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter2_4;
