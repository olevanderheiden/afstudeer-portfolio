import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Digitaal Toegankelijk";

const Chapter1_1 = () => {
  const content = (
    <div>
      <h2>Digitaal Toegankelijk</h2>
      <p>Over Digitaal Toegankelijk</p>
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter1_1;
