import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Subchapter 1.2";

const Chapter1_2 = () => {
  const content = (
    <div>
      <h2>Chapter 1.2</h2>
      <p>This is the content for subchapter 1.2.</p>
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter1_2;