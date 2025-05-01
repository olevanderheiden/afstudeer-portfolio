import React from "react";
import Layout from "../../pageElements/Layout";
import Table from "../../pageElements/table";
import AudioPlayer from "../../pageElements/audioPlayer";

export const title = "Doelgroep & stakeholders";

const Chapter1_3 = () => {
  const tableHeaders = ["Stakeholder", "Belang", "Invloed", "Prioriteit"];
  const tableRows = [
    {
      stakeholder: "Digitaal Toegankelijk",
      details: [
        { belang: "Bedrijf goed neerzetten", invloed: "Hoog", prioriteit: "Middel" },
        { belang: "Product verkopen", invloed: "Laag", prioriteit: "Laag" },
        { belang: "Belang van audio tonen", invloed: "Middel", prioriteit: "Hoog" },
      ],
    },
    {
      stakeholder: "Audio gebruikers",
      details: [
        { belang: "site kunnen navigeren", invloed: "Medium", prioriteit: "Hoog" },
        { belang: "Goede audio ervaring meekrijgen", invloed: "Hoog", prioriteit: "Hoog" },
        { belang: "Een gelijke ervaring met ziende gebruikers", invloed: "Laag", prioriteit: "Laag" },
        { belang: "Informatie opdoen over DT", invloed: "Laag", prioriteit: "Hoog" },
      ],
    },
    {
      stakeholder: "Ziende gebruikers",
      details: [
        { belang: "Website navigeren zonder dingen te missen", invloed: "High", prioriteit: "Medium" },
        { belang: "Informatie opdoen over DT", invloed: "Laag", prioriteit: "Hoog" },
      ],
    },
    {
      stakeholder: "Klanten van DT",
      details: [
        { belang: "Zien welke waarde audiogebruik kan hebben", invloed: "High", prioriteit: "Hoog" },
        { belang: "Informatie opdoen over DT", invloed: "Laag", prioriteit: "Hoog" },
      ],
    },
  ];

  const renderRow = (row) => (
    <>
      <tr>
        <td rowSpan={row.details.length + 1}>{row.stakeholder}</td>
      </tr>
      {row.details.map((detail, index) => (
        <tr key={index}>
          <td>{detail.belang}</td>
          <td>{detail.invloed}</td>
          <td>{detail.prioriteit}</td>
        </tr>
      ))}
    </>
  );

  const content = (
    <div>
      <h2>Doelgroep & Stakeholders</h2>
      <p>Hier vind je alles over mijn stakeholder en doelgroep onderzoek.</p>
      <Table headers={tableHeaders} rows={tableRows} renderRow={renderRow} />
      <AudioPlayer
      fileName={"test.mp3"}
      title={"Test voorbeeld"}
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_3;