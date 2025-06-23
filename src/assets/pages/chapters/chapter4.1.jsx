import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import Table from "../../pageElements/table";

export const title = "Inleven en eerste interviews audiogebruikers";

const stakeholders = [
  {
    stakeholder: "Digitaal Toegankelijk",
    belang: (
      <ul>
        <li>Bedrijf goed presenteren</li>
        <li>Product verkopen</li>
        <li>Belang van audio tonen</li>
      </ul>
    ),
    positief: (
      <ul>
        <li>Presenteren al innovatief en toegankelijk</li>
        <li>Voorbeeld zijn voor andere bedrijven</li>
      </ul>
    ),
    negatief: (
      <ul>
        <li>Extra werk voor medewerkers</li>
        <li>Site onderhouden kost tijd/geld</li>
      </ul>
    ),
  },
  {
    stakeholder: "Werkzoekende",
    belang: (
      <ul>
        <li>Sfeer/cultuur/team leren kennen</li>
        <li>Beoordelen of DT bij hen past</li>
        <li>Een nieuwe manier van kennismaken met een werkgever</li>
      </ul>
    ),
    positief: (
      <ul>
        <li>Het krijgen van een completer beeld van de opdrachtgever</li>
        <li>Nieuwe manier van kennis verkrijgen over DT</li>
      </ul>
    ),
    negatief: (
      <ul>
        <li>Lang luisteren kan vermoeiend zijn</li>
        <li>Specifieke informatie kan minder snel opgezocht worden</li>
        <li>Auditieve input kan overweldigend zijn.</li>
      </ul>
    ),
  },
  {
    stakeholder: "Audiogebruikers",
    belang: (
      <ul>
        <li>Identieke informatie krijgen als ziende gebruikers</li>
        <li>Website kunnen navigeren op een auditief vriendelijkere manier</li>
      </ul>
    ),
    positief: (
      <ul>
        <li>Completer beeld van de sfeer en cultuur bij DT.</li>
        <li>Meer gelijkwaardige ervaring met ziende webgebruikers.</li>
        <li>Een voorbeeld van hoe audio-ervaringen kunnen werken.</li>
      </ul>
    ),
    negatief: (
      <ul>
        <li>
          Terugvinden van informatie kan moeilijker zijn, omdat je niet kan
          scrollen.
        </li>
        <li>Lang luisteren kan vermoeiend zijn.</li>
        <li>Te veel informatie geven kan overweldigend zijn.</li>
      </ul>
    ),
  },
  {
    stakeholder: "Ziende gebruikers",
    belang: (
      <ul>
        <li>Website navigeren zonder dingen te missen</li>
        <li>Informatie opdoen</li>
      </ul>
    ),
    positief: (
      <ul>
        <li>Informatie op een nieuwe manier ontvangen</li>
        <li>Leren hoe audiogebruikers het web navigeren</li>
        <li>Meer variatie in presentatievormen</li>
      </ul>
    ),
    negatief: (
      <ul>
        <li>Audio kan overweldigend zijn als je dat niet gewend bent.</li>
        <li>
          Het terugvinden van informatie kan moeilijker zijn doordat je er niet
          meer doorheen kan scrollen.
        </li>
        <li>
          Het lang luisteren kan vermoeiend zijn. En daardoor kan er informatie
          gemist worden.
        </li>
      </ul>
    ),
  },
  {
    stakeholder: "Klanten van DT",
    belang: (
      <ul>
        <li>
          Toegankelijke en gebruiksvriendelijke website voor hun eigen klanten
        </li>
        <li>Wil goed overkomen bij hun eigen klanten</li>
      </ul>
    ),
    positief: (
      <ul>
        <li>Een voorbeeld hebben om te kunnen volgen.</li>
        <li>Een nieuwe methode om zichzelf te presenteren.</li>
      </ul>
    ),
    negatief: (
      <ul>
        <li>
          Het maken en onderhouden van de audio-ervaring kost tijd en geld.
        </li>
        <li>Onderzoek doen naar audio-ervaringen kost tijd en geld.</li>
      </ul>
    ),
  },
];

const tableHeaders = [
  "Stakeholder",
  "Belang(en)",
  "Positieve gevolg(en)",
  "Negatieve gevolg(en)",
];

const Chapter4_1 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <h3>Analyse positieve en negatieve gevolgen</h3>
      <AudioPlayer
        fileName="content/chapter4/4.1.onderbouwingGevolgenTabel.mp3"
        title="Onderbouwing positieve en negatieve gevolgen"
      />
      <Table
        headers={tableHeaders}
        rows={stakeholders}
        renderRow={(row) => (
          <tr key={row.stakeholder}>
            <td>{row.stakeholder}</td>
            <td>{row.belang}</td>
            <td>{row.positief}</td>
            <td>{row.negatief}</td>
          </tr>
        )}
      />
      <h3>Interviews met audiogebruikers</h3>
      <AudioPlayer
        fileName="content/chapter2/2.1introInterviewAudioGebruikers.mp3"
        title="Introductie onderzoeksopzet, vragenlijst en opzet e-mail"
      />
      <AudioPlayer
        fileName="content/chapter2/2.1Introductie geïnterviewden  (Complete versie 09-05-2025).mp3"
        title="Introductie geïnterviewden 09-05-2025"
      />
      <AudioPlayer
        fileName="content/chapter2/2.1inzichtenAudioGebruikerInterviews(11-05-2025).mp3"
        title="Inzichten uit de interviews met gebruikers 11-05-2025"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_1;
