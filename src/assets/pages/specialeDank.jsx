import React from "react";
import Layout from "../pageElements/Layout";

const specialeDank = () => {
  const content = (
    <div>
      <h2>Speciale dank</h2>
      <p>Mensen om te bedanken komen hier.</p>
    </div>
  );

  return <Layout content={content} />;
};

export default specialeDank;
