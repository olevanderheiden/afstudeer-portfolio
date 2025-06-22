import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Doelgroep en stakeholders";

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
      stakeholder: "Digitaal Toegankelijk (DT)",
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
      stakeholder: "Arbeidszoekende",
      impact: "Hoog",
      invloed: "Middel",
      details: [
        {
          belang: "Op site kunnen navigeren",
          bijdrage:
            "Testen van de website/ pagina, zowel op gebruiksviendelijkheid als effectiviteit in het overbrengen van de bedrijfsvisie en cultuur",
        },
        {
          belang:
            "Een goed beeld krijgen van de sfeer, cultuur en het team van DT",
          bijdrage: "Feedback geven verstrekte informatie",
        },
        {
          belang: "Een beeld vormen of DT bij hun past als werkgever",
          bijdrage: "Voorstellen van verbeteringen en aanvullingen",
        },
      ],
    },
    {
      stakeholder: "Audiogebruikers",
      impact: "Middel",
      invloed: "Middel",
      details: [
        {
          belang: "Op site kunnen navigeren",
          bijdrage: "Feedback geven op toegankelijkheid",
        },
        {
          belang: "Goede audioervaring meekrijgen",
          bijdrage: "Testen van audiofunctionaliteit",
        },
        {
          belang: "Een gelijke ervaring als ziende gebruikers",
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
          belang: "Op de website navigeren zonder dingen te missen",
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
      <h2>Doelgroep en stakeholders</h2>
      <p>Hier vind je alles over mijn stakeholders- en doelgroeponderzoek.</p>
      <h3>Primaire doelgroep</h3>
      <p>
        De primaire doelgroep zijn de klanten van Digitaal Toegankelijk (onder
        andere bedrijven die hun website laten testen op toegankelijkheid). We
        willen dat zij naar aanleiding van dit product geïnspireerd raken en de
        toegevoegde waarde gaan inzien van goed audiogebruik op hun eigen
        websites en applicaties. De 'Over ons pagina' van Digitaal Toegankelijk
        geeft deze mensen een goed voorbeeld van de functionele inzet van audio
        op een website. Door deze informatie op een auditieve manier te
        presenteren, geeft Digitaal Toegankelijk tevens aan hoe het zelf hecht
        aan toegankelijkheid.
      </p>
      <h3>Stakeholder tabel</h3>
      <AudioPlayer
        fileName={"content/chapter1/1.3.verduidelijkingSakeholdersTabel.mp3"}
        title={
          "Extra verduidelijking en beargumentatie bij de stakeholder-tabel"
        }
      />
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
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_3;
