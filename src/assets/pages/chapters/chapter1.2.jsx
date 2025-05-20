import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Probleemstelling en onderzoeksvraag";

const Chapter1_2 = () => {
  const content = (
    <div>
      <h2>Probleemstelling en onderzoeksvraag</h2>
      <p>
        Op deze pagina vind je alles over de onderzoeksvraag en deelvragen die
        ik opgesteld heb voor mijn project.
      </p>
      <h3>Probleemstelling</h3>
      <p>
        Veel bedrijven en organisaties hebben weinig kennis of ervaring met het
        maken van toegankelijke websites en apps. Hierdoor wordt dit vaak gezien
        als een extra kostenpost met weinig tot geen voordeel voor het bedrijf.
        De Europese unie heeft met de{" "}
        <a href="begrippen?search=EAA">EAA (European Accessibility Act)</a> een
        wetgeving aangenomen die bedrijven verplicht om hun websites en apps
        toegankelijk te maken. Deze wet wordt in juni 2025 van kracht. Het is
        daarom belangrijk dat bedrijven het belang en de voordelen van
        toegankelijke websites gaan inzien,zodat alle gebruikers zonder hinder
        gebruik kunnen maken van websites.
      </p>
      <h3>Onderzoeksvraag en deelvragen</h3>
      <p>
        De hoofdvraag van mijn onderzoek is: Hoe kunnen we klanten (van Digitaal
        Toegankelijk) laten ervaren hoe een super goed vormgegeven site/ app
        voor audiogebruikers klinkt?
      </p>
      <h3>Deelvragen</h3>
      <ul>
        <li>
          Wat houdt een "goed vormgegeven site/ app voor audiogebruikers" in?
        </li>
        <li>
          Welke alternatieven voor deze audioervaring zijn er al en wat kunnen
          we hiervan leren?
        </li>
        <li>
          Voegt een goede audioervaring daadwerkelijk iets toe wat huidige
          hulpmiddelen niet bieden?
        </li>
        <li>
          Hoe kunnen we de audioervaring zo presenteren, dat het als inspirerend
          voorbeeld kan dienen voor bedrijven?
        </li>
        <li>
          Welke pagina of type pagina's kunnen het best gebruikt worden voor een
          audioervaring?
        </li>
      </ul>
      <h3>Ontwerpcriteria (moscow principe)</h3>
      <h4>Must</h4>
      <ul>
        <li>
          De applicatie of website is een vergevorderd prototype. Dit houdt in
          dat het een realistische ervaring is die als voorbeeld kan dienen voor
          het eindproduct. Technisch hoeft het nog niet volledig te werken.
        </li>
        <li>
          De applicatie of website moet ook door ziende gebruikers gebruikt
          kunnen worden.
        </li>
        <li>
          Er wordt gebruik gemaakt van menselijke stemmen voor de ervaring.
        </li>
        <li>
          Het volume van verschillende audio-elementen binnen de applicatie moet
          kunnen worden aangepast door de gebruiker.
        </li>
        <li>
          Het prototype is online deelbaar, bijvoorbeeld via sociale
          mediakanalen.
        </li>
      </ul>
      <h4>Should</h4>
      <ul>
        <li>De applicatie werkt op zowel mobiel, tablet als desktop.</li>
        <li>
          Er wordt een duidelijke uitleg gegeven in de applicatie zelf over de
          werking en besturing.
        </li>
      </ul>
      <h4>Could</h4>
      <ul>
        <li>
          De applicatie of website is beschikbaar in meer talen dan alleen
          Nederlands, zoals Engels, Duits of Frans.
        </li>
        <li>
          Er worden keuzemogelijkheden geboden voor verschillende stemmen.
        </li>
        <li>
          Voor de stem(men) word(en) professionele voorlezers en/of stemacteurs
          gebruikt.
        </li>
      </ul>
      <h4>Won't</h4>
      <ul>
        <li>
          Compatible maken met alle mogelijke sites als plug-in of overlay.
        </li>
        <li>Maken van volledig nieuwe audio API/tools</li>
      </ul>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_2;
//
