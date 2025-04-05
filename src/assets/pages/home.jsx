import React from "react";
import Layout from "../pageElements/Layout";

const HomePage = () => {
  console.log("HomePage component rendered");

  const content = (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the main content for the home page. Version 0.16.4</p>
    </div>
  );

  return <Layout content={content} />;
};

export default HomePage;
