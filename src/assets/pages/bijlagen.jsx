import Layout from "../pageElements/Layout";
import AudioPlayer from "../pageElements/audioPlayer";
import { planning } from "../planningdata";
import PlanningTree from "../pageElements/planningTree";
import "../../styles/planningTree.css";

export const title = "Bijlagen";

const Bijlagen = () => {
  const content = (
    <div>
      <h2>Bijlagen</h2>
      <p>
        Tijdens mijn stage heb ik een groot aantal interviews gedaan en extra
        onderzoek dat niet in zijn volledigheid op deze site staat. Je kunt dit
        hier alsnog beluisteren of bekijken.
      </p>
      <h3>Stage planning</h3>
      <p>
        Hier vind je de planning die ik heb gemaakt tijdens mijn
        stageperiode.Grijze{" "}
        <span className="planning-done">doorgestreepte</span> tekst betekent dat
        ik de (deel)taak in kwestie heb afgerond.{" "}
        <span className="planning-missed">Rode tekst</span> betekent dat ik het
        niet op tijd af had en het doorschuif naar de volgende week.
      </p>
      <PlanningTree nodes={planning} />
      <h3>Interviews met collega's:</h3>
      <AudioPlayer
        fileName="interviews/Aimee(20-03-2025-9am).mp3"
        title="Interview Aimee 20-02-2025"
      />
      <AudioPlayer
        fileName="interviews/Dana(27-03-2025.mp3"
        title="Interview Dana 27-03-2025"
      />
      <AudioPlayer
        fileName="interviews/Emma(20-03-2025-2pm).mp3"
        title="Interview Emma 20-02-2025"
      />
      <h3>Interviews met audiogebruikers:</h3>
      <AudioPlayer
        fileName="interviews/Carmen (16-04-2025).mp3"
        title="Interview Carmen 16-04-2025"
      />
      <AudioPlayer
        fileName="interviews/Mireille (17-04-2025).mp3"
        title="Interview Mireille 17-04-2025"
      />
      <AudioPlayer
        fileName="interviews/Kim Kreeft (25-04-2025).mp3"
        title="Interview Kim Kreeft 25-04-2025"
      />
      <AudioPlayer
        fileName="interviews/Sanne(06-05-2025).mp3"
        title="Interview Sanne Brand 06-05-2025"
      />
      <AudioPlayer
        fileName="interviews/Mauro(08-05-2025).mp3"
        title="Interview Mauro 08-05-2025"
      />
      <h3>Testen met audiogebruikers:</h3>
      <AudioPlayer
        fileName="test/PrototypeBesprekenMetKim.mp3"
        title="Testgesprek met Kim 04-06-2025"
      />
      <AudioPlayer
        fileName="test/PrototypeBesprekenMetMireille(ingekortDoorProblemen).mp3"
        title="Testgesprek met Mirelle 04-06-2025 (ingekort door technische problemen)"
      />
      <AudioPlayer
        fileName="test/PrototypeBesprekenMetCarmen.mp3"
        title="Testgesprek met Carmen 05-04-2025"
      />
      <AudioPlayer
        fileName="test/PrototypeBesprekenMetMauro.mp3"
        title="Testgesprek met Mauro 10-06-2025"
      />

      <h3>Begeleidingsgesprekken:</h3>
      <AudioPlayer
        fileName="begeleiding/GesprekStageBegeleider(20-03-25).mp3"
        title="Begeleidingsgesprek (20-03-2025)"
      />
      <AudioPlayer
        fileName="begeleiding/Progressie gesprek peter (20-02-25).mp3"
        title="Progressiegesprek met Peter (20-02-2025)"
      />

      <h3>Overige gesprekken:</h3>
      <AudioPlayer
        fileName="overigeGesprekken/super dure consultant onderzoeksideeën.mp3"
        title="Super dure consultant onderzoeksideeën (01-04-2025)"
      />
      <AudioPlayer
        fileName="overigeGesprekken/Gesprek  pim en jo (07-04-25).mp3"
        title="Gesprek met Pim en Jo (07-04-2025)"
      />
      <AudioPlayer
        fileName="overigeGesprekken/ontwerpSchetsBesprekenPim(25-04-2025).mp3"
        title="Ontwerpschets bespreken met Pim (25-04-2025)"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Bijlagen;
