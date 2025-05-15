import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Doelgroep & stakeholders";

const Chapter1_3 = () => {
  const tableHeaders = [
    "Stakeholder",
    "Belang",
    "Impact",
    "Invloed",
    "Bijdrage",
  ];

  const headerDescriptions = [
    "De groep of persoon die betrokken is bij het project",
    "Zaken die belangrijk zijn voor deze stakeholder",
    "Hoeveel invloed heeft dit project op de stakeholder",
    "Hoeveel invloed heeft de stakeholder op het project",
    "Hoe deze stakeholder kan bijdragen aan het project",
  ];

  const tableRows = [
    {
      stakeholder: "Digitaal Toegankelijk",
      impact: "Hoog",
      invloed: "Hoog",
      details: [
        {
          belang: "Bedrijf goed presenteren",
          bijdrage: "Feedback geven op ontwerpen",
        },
        {
          belang: "Product verkopen",
          bijdrage: "Promotie van het project",
        },
        {
          belang: "Belang van audio tonen",
          bijdrage: "Informatie delen over audiogebruik",
        },
      ],
    },
    {
      stakeholder: "Arbeids zoekende",
      impact: "Hoog",
      invloed: "Middel",
      details: [
        {
          belang: "Site kunnen navigeren",
          bijdrage:
            "Testen van de website/pagina zowel op gebruikviendelijkheid als effectiviteit is het overbrengen van de bedrijf visie en cultuur",
        },
        {
          belang:
            "Een goed beeld krijgen van de sfeer, cultuur en het team van DT",
          bijdrage: "Feedback geven verstrekte informatie",
        },
        {
          belang: "Een beeld vormen van of DT bij hun past als werkgever",
          bijdrage: "Voorstellen van verbetingen en aanvullingen",
        },
      ],
    },
    {
      stakeholder: "Audio gebruikers",
      impact: "Middel",
      invloed: "Middel",
      details: [
        {
          belang: "Site kunnen navigeren",
          bijdrage: "Feedback geven op toegankelijkheid",
        },
        {
          belang: "Goede audio ervaring meekrijgen",
          bijdrage: "Testen van audiofunctionaliteit",
        },
        {
          belang: "Een gelijke ervaring met ziende gebruikers",
          bijdrage: "Gebruikservaring delen",
        },
      ],
    },
    {
      stakeholder: "Ziende gebruikers",
      impact: "Laag",
      invloed: "Laag",
      details: [
        {
          belang: "Website navigeren zonder dingen te missen",
          bijdrage: "Feedback geven op ontwerp",
        },
        {
          belang: "Informatie opdoen over DT",
          bijdrage: "Promotie van de website",
        },
      ],
    },
    {
      stakeholder: "Klanten van DT",
      impact: "Hoog",
      invloed: "Medium",
      details: [
        {
          belang: "Zien welke waarde audiogebruik kan hebben",
          bijdrage: "Samenwerken aan casestudies",
        },
        {
          belang: "Informatie opdoen over DT",
          bijdrage: "Feedback geven op inhoud",
        },
      ],
    },
  ];

  const renderRow = (row) => (
    <>
      <tr>
        <td rowSpan={row.details.length}>{row.stakeholder}</td>
        <td>{row.details[0].belang}</td>
        <td rowSpan={row.details.length}>{row.impact}</td>
        <td rowSpan={row.details.length}>{row.invloed}</td>
        <td>{row.details[0].bijdrage}</td>
      </tr>
      {row.details.slice(1).map((detail, index) => (
        <tr key={index}>
          <td>{detail.belang}</td>
          <td>{detail.bijdrage}</td>
        </tr>
      ))}
    </>
  );

  const content = (
    <div>
      <h2>Doelgroep & Stakeholders</h2>
      <p>Hier vind je alles over mijn stakeholder en doelgroep onderzoek.</p>
      <h3>Primaire doelgroep</h3>
      <p>
        De primaire doelgroep van dit product zijn werkzoekenden die wellicht
        bij Digitaal Toegankelijk willen werken. De overons pagina geeft deze
        mensen een goed beeld van de sfeer, cultuur en het team van Digitaal
        Toegankelijk. En deze informatie op deze manier presenteren toont aan
        hoe veel waarde Digitaal Toegankelijk hecht aan toegankelijkheid.
      </p>
      <h3>Stakeholder Tabel</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>
                  {header}
                  <p
                    style={{
                      fontSize: "0.9em",
                      margin: "5px 0 0",
                      color: "#555",
                    }}
                  >
                    {headerDescriptions[index]}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{tableRows.map((row, index) => renderRow(row))}</tbody>
        </table>
      </div>
      <AudioPlayer
        fileName={"test.mp3"}
        title={
          "Extre verduidelijking en beargumentering bij de stakholder tabel (comingsoon)"
        }
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_3;
