import Layout from "../../pageElements/Layout";
import IframeElement from "../../pageElements/iframeElement";
import Table from "../../pageElements/table";

export const title = "Ontwikkelen";

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
      "De tour en weergaven van de website worden gedaan door React en de backend en het beheren van de onderdelen wordt gedaan in wordpress",
    voordelen: [
      "Content kan zonder programmeer kennis worden beheerd.",
      "Content beheren is simpel te beveiligen",
      "Ik heb volledige controle over hoe aller er uit gaat zien.",
      "Het maken van tour functies is makkelijk op te zetten met mijn kennis.",
      "Er is veel documentatie aanwezig om dit te kunnen maken en onderhouden",
      "Front en backend zijn netjes gescheiden wat goed is voor maintainability.",
    ],
    nadelen: [
      "Meer voor en installatie werk",
      "React moet los worden gestart ofwel handmatig of met Wordpress plugins zoals: WP Headless of wp React Starter",
      "Project moet op server gezet worden die mysql ondersteund.",
      "Door de scheiding van back en front-end kan er wellicht verwarring ontstaan",
    ],
    voorkeur: "1",
  },
  {
    naam: "Wordpress (vanilla)",
    beschrijving:
      "Alle functionaliteit van de tour tot de content wordt gedaan in wordpress",
    voordelen: [
      "Content bewerken is simpel",
      "Geen losse deployment zoals met React.",
      "Minder installatie en opzet werk.",
      "Alles is in 1 systeem",
    ],
    nadelen: [
      "Minder flexibiliteit",
      "Ingewikkelde logica is moeilijker te maken en zwaarder voor de website wat voor vertraging kan zorgen.",
      "Minder geschikt als dit op grote schaal gebruikt wil worden.",
      "Maken van custom plugin is wellicht nodig, en daar heb ik weinig ervaring mee.",
    ],
    voorkeur: "2",
  },
  {
    naam: "Custom (van de grond op)",
    beschrijving:
      "Ik maak mijn eigen front en backend voor deze functionaliteit.",
    voordelen: [
      "Enorm veel flexibiliteit.",
      "Veem mogelijkheden qua werking van de audio tour en makkelijk aantonen van innovatie.",
    ],
    nadelen: [
      "Enorm veel voor en installatie werk",
      "Onderhouden door niet programmeurs kan moeilijk zijn zeker als ik daar niet op focus!",
      "Heel veel programmeer werk door het hele proces",
      "Sluit niet aan op de bestaande systemen",
    ],
    voorkeur: "4",
  },
  {
    naam: "React (vanilla)",
    beschrijving:
      "Alle functionaliteit zowel front als backend wordt gedaan in React",
    voordelen: [
      "Weinig installatie werk",
      "Functionaliteiten makkelijk te bouwen",
      "Werkt zonder MYSQL Server",
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

const Chapter2_3 = () => {
  const content = (
    <div>
      <h2>Ontwikkelen</h2>
      <ul>
        <li>
          Technische kennis en analyse: Je toont met je prototype, waarin de
          resultaten van je technische analyse gebruikt worden, aan dat deze
          correct en van niveau was doordat het voldoet aan de randvoorwaarden
          uit je conceptontwerp.
        </li>
        <li>
          Implementeren, Testen en opleveren: Je levert een iteratief ontwikkeld
          prototype op volgens de bedrijfsstandaarden. Je kunt de correcte
          werking garanderen.
        </li>
      </ul>
      <p>Over het ontwikkelproces</p>
      <IframeElement src="prototype1" title="klikbare prototype 1" />
      <h3>Onderzoek naar ontwikkel tools</h3>
      <p>
        Voor het maken van een eerste semi professionele versie. Heb ik
        onderzoek gedaan naar verschillende manieren om het project op een niet
        alleen realischische maar ook praktsiche manier voor mij en het bedrijf
        te make. Mijn gekozen opties vind je in de tabel hier onder:
      </p>
      {/* --- Table inserted below this line --- */}
      <Table headers={tableHeaders} rows={tableRows} renderRow={renderRow} />
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter2_3;
