import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Doelgroep & stakeholders";

const Chapter1_3 = () => {
  const tableHeaders = [
    "Stakeholder",
    "Belang",
    "Impact",
    "Prioriteit",
    "Bijdrage",
  ];

  const headerDescriptions = [
    "De groep of persoon die betrokken is bij het project",
    "Een lijst van dingen die belangrijk zijn voor deze stakeholder",
    "Hoeveel invloed dit project heeft op de stakeholder",
    "Hoe belangrijk deze stakeholder is voor het project",
    "Hoe deze stakeholder kan bijdragen aan het project",
  ];

  const tableRows = [
    {
      stakeholder: "Digitaal Toegankelijk",
      impact: "Hoog",
      prioriteit: "Middel",
      details: [
        {
          belang: "Bedrijf goed neerzetten",
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
      stakeholder: "Audio gebruikers",
      impact: "Middel",
      prioriteit: "Hoog",
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
      impact: "Middel",
      prioriteit: "Middel",
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
      prioriteit: "Hoog",
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
        <td rowSpan={row.details.length}>{row.prioriteit}</td>
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
      <AudioPlayer fileName={"test.mp3"} title={"Test voorbeeld"} />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_3;
