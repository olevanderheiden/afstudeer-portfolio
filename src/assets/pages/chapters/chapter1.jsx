import React from "react";
import Layout from "../../pageElements/Layout";
import AudioPlayer from "../../pageElements/audioPlayer";
import { planning } from "../../planningdata";
import PlanningTree from "../../pageElements/PlanningTree";

export const title = "Inleiding";

const Chapter1 = () => {
  const content = (
    <div>
      {/* Include the AudioPlayer component here */}
      <AudioPlayer
        fileName="test.mp3"
        title="Chapter 1: Introductie (coming soon)"
      />
      <h2>Chapter 1</h2>
      <p>Chapter 1 is coming here!</p>
      <h3>Stage planning</h3>
      <p>
        Hier vind je mijn planning die ik heb gemaakt tijdens mijn stage
        periode.
      </p>
      <PlanningTree nodes={planning} />
    </div>
  );

  return <Layout content={content} pageTitle={title} />;
};

export default Chapter1;
