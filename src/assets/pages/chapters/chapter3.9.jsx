import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import Table from "../../pageElements/table";

const tableHeaders = [
  "Naam",
  "Beschrijving",
  "Voordelen",
  "Nadelen",
  "Voorkeur",
];

const tableRows = [
  {
    naam: "React Frontend + WordPress Backend (Headless)",
    beschrijving:
      "De tour en weergaven van de website worden gedaan door React en de backend en het beheren van de onderdelen wordt gedaan in Wordpress",
    voordelen: [
      "Content kan zonder programmeerkennis worden beheerd.",
      "Content beheren is simpel te beveiligen",
      "Ik heb volledige controle over hoe alles er uit gaat zien.",
      "Het maken van tourfuncties is makkelijk op te zetten met mijn kennis.",
      "Er is veel documentatie aanwezig om dit te kunnen maken en onderhouden",
      "Frontend en backend zijn netjes gescheiden wat goed is voor maintainability.",
    ],
    nadelen: [
      "Meer voor- en installatiewerk",
      "React moet los worden gestart ofwel handmatig of met Wordpress plugins zoals: WP Headless of wp React Starter",
      "Project moet op server gezet worden die MySQL ondersteunt.",
      "Door de scheiding van backend en frontend kan er wellicht verwarring ontstaan",
    ],
    voorkeur: "1",
  },
  {
    naam: "Wordpress (vanilla)",
    beschrijving:
      "Alle functionaliteit van de tour tot de content wordt gedaan in Wordpress",
    voordelen: [
      "Content bewerken is simpel",
      "Geen losse deployment zoals met React.",
      "Minder installatie en opzet werk.",
      "Alles is in 1 systeem ondergebracht",
    ],
    nadelen: [
      "Minder flexibiliteit",
      "Ingewikkelde logica is moeilijker te maken en zwaarder voor de website wat voor vertraging kan zorgen.",
      "Minder geschikt als dit op grote schaal gebruikt moet worden.",
      "Maken van custom plugins is wellicht nodig en daar heb ik weinig ervaring mee.",
    ],
    voorkeur: "2",
  },
  {
    naam: "Custom (van scratch)",
    beschrijving:
      "Ik maak mijn eigen frontend en backend voor deze functionaliteit.",
    voordelen: [
      "Enorm veel flexibiliteit.",
      "Veel mogelijkheden qua werking van de audiotour en makkelijk aantonen van innovatie.",
    ],
    nadelen: [
      "Enorm veel voor- en installatiewerk",
      "Onderhouden door niet programmeurs kan moeilijk zijn, zeker als ik daar niet op focus!",
      "Heel veel programmeerwerk door het hele proces",
      "Sluit niet aan op de bestaande systemen",
    ],
    voorkeur: "4",
  },
  {
    naam: "React (vanilla)",
    beschrijving:
      "Alle functionaliteit zowel frontend als backend wordt gedaan in React",
    voordelen: [
      "Weinig installatiewerk",
      "Functionaliteiten makkelijk te bouwen",
      "Werkt zonder MySQL Server",
      "Geen extra deployment stappen",
    ],
    nadelen: [
      "Moeilijk te onderhouden voor niet programmeurs.",
      "Sluit niet optimaal aan op bestaande systemen",
      "Content is niet bewerkbaar in een user interface",
    ],
    voorkeur: "3",
  },
];

const renderRow = (row) => (
  <tr>
    <td>{row.naam}</td>
    <td>{row.beschrijving}</td>
    <td>
      <ul>
        {row.voordelen.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </td>
    <td>
      <ul>
        {row.nadelen.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </td>
    <td>{row.voorkeur}</td>
  </tr>
);

export const title = "Onderzoek ontwikkel tools en technieken";

const Chapter3_9 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <p>
        Voor het maken van een eerste semi-professionele versie heb ik onderzoek
        gedaan naar verschillende manieren om het project op een zowel
        realistische als ook praktische manier voor mij en het bedrijf te maken.
        Mijn gekozen opties vind je in de tabel hieronder:
      </p>
      <Table headers={tableHeaders} rows={tableRows} renderRow={renderRow} />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter3_9;
