import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Probleem stelling en onderzoeksvraag";

const Chapter1_2 = () => {
  const content = (
    <div>
      <h2>Probleemstelling & onderzoeksvraag</h2>
      <p>Op deze pagina vind je alles over de onderzoek vraag en deelvragen die ik heb tijdens mijn project.</p>
      <h3>Probleemstelling</h3>
      <p>
        Veel bedrijven en organisaties hebben wijnig kennis of ervaring met het maken van toegankelijke websites en apps. Hier door wordt dit vaak
        gezien als een extra kostenpost met weinig tot geen voordel, voor het bedrijf. 
        De Europese unie heeft met de <a href="begrippen?search=EAA">EAA (European Accessibility Act)</a> een wetgeving aangenomen 
        die bedrijven verplicht om hun websites en apps toegankelijk te maken. Deze gaat vankracht in juni 2025. Het is daarom belangrijk dat bedrijven
        het belang en de voordelen voor alle gebruikers van toegankelijke websites en apps inzien.
      </p>
      <h3>Onderzoeksvraag en deel vragen</h3>
      <p>De hoofdvraag van mijn onderzoek is: Hoe kunnen we klanten (van Digitaal Toegankelijk) laten ervaren hoe een super goed vormgegeven site/app voor audiogebruikers klinkt?</p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_2;
//
