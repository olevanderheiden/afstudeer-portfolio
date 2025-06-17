import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import IframeElement from "../../pageElements/iframeElement";

export const title = "Iteratie 2 Klikbare Prototype";

const Chapter4_3 = () => {
  const content = (
    <div>
      <h2>{title}</h2>
      <AudioPlayer
        fileName="test.mp3"
        title="Beargumentering klikbare prototype (coming soon"
      />
      <IframeElement src="prototype1" title="klikbare prototype 1" />
      <h2>Testen met klanten van Digitaal Toegankelijk</h2>
      <AudioPlayer
        fileName="content/chapter4/4.3TestenMetKlantenDigitaalToegankelijk.mp3"
        title="Test resultaten bespreken (coming soon)"
      />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter4_3;
