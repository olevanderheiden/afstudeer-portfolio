import React from "react";
import Layout from "../pageElements/Layout";

//This page is called when ever a page does not exist on the website
//This replaces the default 404 page that in this current configuation serves a different purpose (see copy404.js)
export const title = "Oops!";

const NotFound = () => {
  const content = (
    <div>
      <h2>Oeps er is iets fout gegaan!</h2>
      <p>
        Het lijkt er op dat de pagina die je probeerde te bezoeken niet bestaat.
        Klik hier onder om terug te gaan.
      </p>
      <a href="/afstudeer-portfolio/">Terug</a>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default NotFound;
