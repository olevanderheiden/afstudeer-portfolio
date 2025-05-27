import React from "react";
import Layout from "../pageElements/Layout";
import { title } from "./begrippenLijst";

export const pageTitle = "Bedankt";

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
        <li>Peter Teunis</li>
        <li>Annelies Verhelst</li>
      </ul>
      <h3>Studenten en docenten:</h3>
      <ul>
        <li>Roel Hooiring</li>
        <li>Mees Muller</li>
        <li>Bob Pikaar</li>
        <li>Leo Remijn</li>
        <li>Dieuwertje Schuur</li>
      </ul>
      <h3>Parental support:</h3>
      <ul>
        <li>Kalle van der Heiden</li>
        <li>Jantien Walraad</li>
      </ul>
      <h3>Digitale en physieke toegankelijkheid:</h3>
      <ul>
        <li>Aimee Chaves</li>
        <li>David van Dam</li>
        <li>Emma van Dormalen</li>
        <li>Marieke de Hoop</li>
        <li>Dana de Jong</li>
        <li>Robert Keus</li>
        <li>Pim Teuwisse</li>
        <li>Laure Tolsma</li>
        <li>Jojanneke Vonk</li>
      </ul>
      <h3>Geinterviewden en testers:</h3>
      <ul>
        <li>Sanne Brand</li>
        <li>Carmen Denhaven</li>
        <li>Kim Kreeft</li>
        <li>Mauro</li>
        <li>Mireille</li>
      </ul>
      <h3>Overige dank</h3>
      <ul>
        <li>Anna Nasi</li>
        <li>Ron Wolgen</li>
      </ul>
    </div>
  );

  return <Layout content={content} pageTitle={pageTitle} />;
};

export default specialeDank;
