import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Onderzoeksmethoden";

const Chapter1_4 = () => {
  const content = (
    <div>
      <h2>Onderzoeksmethoden</h2>
      <p>Hier vind je alles over mijn onderzoeks methoden</p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_4;
//
