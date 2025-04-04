import React from "react";
import Layout from "../pageElements/Layout";

const HomePage = () => {
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
      <h2>Welcome to the Home Page</h2>
      <p>This is the main content for the home page.</p>
    </div>
  );

  return <Layout navigation={navigation} content={content} sources={sources} />;
};

export default HomePage;
