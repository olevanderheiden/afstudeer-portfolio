import React from "react";
import Layout from "../pageElements/Layout";
import SourceList from "../pageElements/sourceList";
import sourcesData from "../sources.json";

export const title = "Bronnenlijst";

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
      <h2>Bronnenlijst</h2>
      <p>
        Alle bronnen die ik heb geraadpleegd bij het uitvoeren van mijn opdracht
        en het samenstellen van mijn portfolio worden hier getoond:
      </p>
      <SourceList sources={uniqueSources} />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default BronnenLijst;
