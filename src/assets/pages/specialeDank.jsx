import React from "react";
import Layout from "../pageElements/Layout";

const specialeDank = () => {
  const content = (
    <div>
      <h2>Speciale dank</h2>
      <p>
        Deze stage zou niet mogelijk zijn geweest zonder de hulp van een aantal
        mensen. Dank jullie wel voor alle ondersteuning, hulp en aanmodiging. Ik
        ben jullie euwig dankbaar.
      </p>
      <h3>Stage begeleiding:</h3>
      <ul>
        <li>Annelies Verhelst</li>
        <li>Peter Teunis</li>
      </ul>
      <h3>Studenten en docenten:</h3>
      <ul>
        <li>Mees Muller</li>
        <li>Dieuwertje Schuur</li>
        <li>Roel Hooiring</li>
        <li>Leo Remijn</li>
      </ul>
      <h3>Parental support:</h3>
      <ul>
        <li>Jantien Walraad</li>
        <li>Kalle van der Heiden</li>
      </ul>
      <h3>Digitale en physieke toegankelijkheid:</h3>
      <ul>
        <li>Jo</li>
        <li>Pim</li>
        <li>Emma</li>
        <li>Dana</li>
        <li>Aimee</li>
      </ul>
      <h3>Geinterviewden en testers:</h3>
      <ul>
      <li>Aniek Linders</li>
      <li>Carmen</li>
      <li>Mireille</li>
      <li>Djan van der Kraan</li>
      <li>Kim Kreeft</li>
      </ul>
      <h3>Overige dank</h3>
      <ul>
        <li>Ron Wolgen</li>
      </ul>
    </div>
  );

  return <Layout content={content} />;
};

export default specialeDank;
