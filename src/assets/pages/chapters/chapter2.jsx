import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Test Title 2";

const Chapter1 = () => {
  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      <h2>Chapter 2</h2>
      <p>Chapter 2 is coming here!</p>
    </div>
  );

  return <Layout content={content} sources={sources} />;
};

export default Chapter1;
