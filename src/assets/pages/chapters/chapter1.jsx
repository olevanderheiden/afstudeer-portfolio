import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Test Title 1";
const Chapter1 = () => {
  console.log("HomePage component rendered");
  const navigation = (
    <>
      <li>
        <a href="#chapter1">Chapter 1</a>
      </li>
      <li>
        <a href="#chapter2">Chapter 2</a>
      </li>
    </>
  );

  const sources = (
    <>
      <li>Source 1</li>
      <li>Source 2</li>
    </>
  );

  const content = (
    <div>
      <h2>Chapter 1</h2>
      <p>Chapter 1 is coming here!</p>
    </div>
  );

  return <Layout navigation={navigation} content={content} sources={sources} />;
};

export default Chapter1;
