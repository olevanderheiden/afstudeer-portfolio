import React from "react";
import Layout from "../pageElements/Layout";
import SourceList from "../pageElements/sourceList";
import sourcesData from "../sources.json";

export const title = "Bronnen Lijst";

const BronnenLijst = () => {
  // Flatten all sources into a single array
  const allSources = Object.values(sourcesData).flat();

  // Deduplicate sources by creating a unique key for each source
  const uniqueSources = Array.from(
    new Map(
      allSources.map((source) => [
        `${source.author}-${source.year}-${source.title}-${source.publisher}-${source.url}`,
        source,
      ])
    ).values()
  );

  const content = (
    <div>
      <h2>Bronnen Lijst</h2>
      <p>
        Alle bronnen die tijdens dit portfolio worden gebruikt over de
        verschillende pagina's worden hier getoond:
      </p>
      <SourceList sources={uniqueSources} />
    </div>
  );

  return <Layout content={content} pageTitle="Bronnen Lijst" />;
};

export default BronnenLijst;
