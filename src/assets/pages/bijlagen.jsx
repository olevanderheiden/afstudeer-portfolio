import React from "react";
import Layout from "../pageElements/Layout";
import AudioPlayer from "../pageElements/audioPlayer";

const Bijlagen = () => {
  const content = (
    <div>
      <h2>Bijlagen</h2>
      <p>
        Tijdens mijn stage heb ik een groot aantal interviews gedaan en extra
        onderzoek dat niet in zijn volledighijd op deze site staat. U kunt dit
        hier als nog beluisteren of bekijken.
      </p>
      <h3>Interviews:</h3>
      <AudioPlayer
        fileName="interviews/Aimee(20-03-2025-9am).mp3"
        title="Interview Aimee 20-02-2025"
      />
      <AudioPlayer
        fileName="interviews/Dana(27-03-2025.mp3"
        title="Interview Dana 27-03-2025"
      />
      <AudioPlayer
        fileName="interviews/Emma(20-03-2025-2pm).mp3"
        title="Interview Emma 20-02-2025"
      />
      <AudioPlayer
        fileName = "interviews/Carmen (16-04-2025).mp3"
        title="Interview Carmen 16-04-2025"
      />
      <h3>Begeleiding gesprekken</h3>
      <AudioPlayer
        fileName="begeleiding/GesprekStageBegeleider(20-03-25).mp3"
        title="Begeleiding gesprek (20-03-2025)"
      />
      <AudioPlayer
        fileName="begeleiding/Progressie gesprek peter (20-02-25).mp3"
        title="Progressie geprek met Peter (20-02-2025)"
      />

      <h3>Overige gesprekken:</h3>
      <AudioPlayer
        fileName="overigeGesprekken/super dure consultant onderzoek ideën.mp3"
        title="Super dure consultant onderzoek ideën (01-04-2025)"
      />
      <AudioPlayer
        fileName="overigeGesprekken/Gesprek  pim en jo (07-04-25).mp3"
        title="Gesprek met Pim en Jo (07-04-2025)"
      />
    </div>
  );

  return <Layout content={content} />;
};

export default Bijlagen;
