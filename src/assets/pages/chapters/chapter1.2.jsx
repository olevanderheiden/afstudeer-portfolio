import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Probleem stelling en onderzoeksvraag";

const Chapter1_2 = () => {
  const content = (
    <div>
      <h2>Probleemstelling & onderzoeksvraag</h2>
      <p>Over Digitaal Toegankelijk</p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_2;
//
