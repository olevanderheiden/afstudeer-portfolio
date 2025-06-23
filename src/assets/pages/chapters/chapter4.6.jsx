import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import IframeElement from "../../pageElements/iframeElement";

export const title = "Iteratie 4 proof of concept";

const Chapter4_6 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <p>
        Hier vind je mijn uiteindelijke proof of concept in zijn live versie.
        Deze versie bevat de verbeteringen die ik heb gemaakt op basis van de
        feedback die ik heb gekregen van audiogebruikers als ook de klanten van
        Digitaal Toegankelijk.
      </p>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="content/chapter4/4.6.onderbouwingEindVersie.mp3"
        title="Onderbouwing eindversie"
      />
      <IframeElement
        src="https://olevanderheiden.github.io/afstudeerProjectFinalPortfolioVersion/"
        title="Proof of concept (Eindversie, build datum: 16-06-2025)"
      />
      <p>
        Dit is de laatste versie van mijn afstudeerproject die ik heb gemaakt
        voor de deadline van het inleveren van mijn portfoliowebsite. Ik heb
        echter nog een aantal weken de tijd om verbeteringen of nieuwe features
        toe te voegen aan het afstudeerproject. Om ervoor te zorgen dat het
        proof of concept dat hier wordt getoond niet in strijd is met wat ik
        vertel in de onderbouwing hierboven, is het proof of concept dat hier
        wordt getoond op een eigen github repository geplaatst. Ik hoop nog wat
        verbeteringen te kunnen demonstreren tijdens de presentatie van mijn
        afstudeerproject. De meest recente versie van het proof of concept is te
        vinden op deze{" "}
        <a href="https://olevanderheiden.github.io/afstudeerProject/">
          Github pages pagina
        </a>
        .
      </p>
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_6;
