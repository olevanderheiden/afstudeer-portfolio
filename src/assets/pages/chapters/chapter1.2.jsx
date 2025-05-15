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
      <h3>Deel vragen</h3>
      <ul>
        <li>Wat houd een "goed vormgegeven site/app voor audio gebruikers" in?</li>
        <li>Welke alternatieven voor deze audio ervaring zijn er all? En Wat kunnen we van hen leren?</li>
        <li>Voegt een goede audio ervaring daadwerkelijk iets toe wat huidige hulpmiddelen niet bieden?</li>
        <li>Hoe kunnen we de audio ervaring zo presenteren, zodat het als inspirerend voorbeeld kan dienen voor bedrijven?</li> 
        <li>Welke pagina of type paginas kunnen het best gebruikt worden voor een audio ervaring?</li>
      </ul>
      <h3>
        Ontwerp criteria (moscow principe)
      </h3>
      <h4>
        Must
      </h4>
      <ul>
        <li>
          De applicatie of website is een vergevorderd prototype. 
          Dit houdt in dat het een realistische ervaring is dat als voorbeeld kan dienen voor het eindproduct. 
          Technisch hoeft het niet nog te werken. 
        </li>
        <li>
          De applicatie of website moet door ziende gebruikers gebruikt kunnen worden
        </li>
        <li>
          Er wordt gebruik gemaakt van menselijke stemmen voor de ervaring
        </li>
        <li>
          Het volume van verschillende audio-elementen binnen de applicatie moeten kunnen worden aangepast door de gebruiker
        </li>
        <li>
          Het prototype is online deelbaar, bijvoorbeeld over sociale mediakanalen. Mensen kunnen erbij en kunnen ermee interacteren.
        </li>
      </ul>
      <h4>
        Should
      </h4>
      <ul>
        <li>
          De applicatie werkt op zowel mobiel/tablet als desktop.
        </li>
        <li>
          Er wordt een duidelijke uitleg gegeven in de applicatie zelf over de werking en besturing.
        </li>
      </ul>
      <h4>
        Could
      </h4>
      <ul>
        <li>
          De applicatie of website is beschikbaar in meer talen dan alleen Nederlands zoals Engels, Duits of Frans.
        </li>
        <li>
          Er worden keuzemogelijkheden geboden voor verschillende stemmen.
        </li>
        <li>
          Voor de stem(men) word(en) professionele voorlezers en/of stemacteurs gebruikt.
        </li>
      </ul>
      <h4>
        Won't
      </h4>
      <ul>
        <li>
          Compatible maken met alle mogelijke sites als plug-in of overlay.
        </li>
        <li>
          Maken van volledig nieuwe audio API/tools
        </li>
      </ul>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1_2;
//
