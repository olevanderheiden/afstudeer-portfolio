import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/prototype1.css";

const ClickablePrototype1 = () => {
  const [isInIframe, setIsInIframe] = useState(false);
  const navigate = useNavigate();
  const audioRefs = useRef([]);

  // List of items (names only, shared between audio and images)
  const items = [
    "Aimee",
    "Annelies",
    "Emma",
    "Laure",
    "Peter",
    "Pim",
    "Benedenverdieping",
    "Bovenverdieping",
    "Belang Toegankelijkheid",
    "B Corp",
  ];

  useEffect(() => {
    // Check if the page is inside an iframe
    const inIframe = window.self !== window.top;
    console.log("Is in iframe:", inIframe);
    setIsInIframe(inIframe);
  }, []);

  const playAudio = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
    }
  };

  const playAllAudio = async () => {
    for (let i = 0; i < items.length; i++) {
      if (audioRefs.current[i]) {
        await audioRefs.current[i].play();
        await new Promise((resolve) => {
          audioRefs.current[i].onended = resolve;
        });
      }
    }
  };

  return (
    <div className="page-container">
      {/* Conditionally render the "Back to Main Site" button */}
      {!isInIframe && (
        <button className="back-button" onClick={() => navigate("/")}>
          Terug naar Portfolio
        </button>
      )}

      {/* Header */}
      <header className="header">
        <h1>Klikbaar Prototype v1 (work in progress)</h1>
        <nav>
          <button onClick={playAllAudio}>Tour starten</button>
        </nav>
      </header>

      {/* Ons Team Section */}
      <section className="section">
        <h2>Ons team</h2>
        <div className="section-content">
          {items.slice(0, 6).map((name, index) => (
            <div key={index} className="card">
              {/* Image */}
              <img
                src={`images/prototype/${name
                  .toLowerCase()
                  .replace(/ /g, "_")}.png`}
                alt={`Afbeelding van ${name}`}
              />
              <p>{name}</p>
              {/* Play Button */}
              <button onClick={() => playAudio(index)}>Afspelen</button>
              {/* Audio */}
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={`audio/${name.toLowerCase().replace(/ /g, "_")}.mp3`} // Replace spaces with underscores
              />
            </div>
          ))}
        </div>
      </section>

      {/* Over het Kantoor Section */}
      <section className="section">
        <h2>Over het Kantoor</h2>
        <div className="section-content">
          {items.slice(6, 8).map((name, index) => (
            <div key={index + 6} className="card">
              {/* Image */}
              <img
                src={`images/prototype/${name
                  .toLowerCase()
                  .replace(/ /g, "_")}.png`} // Replace spaces with underscores
                alt={`Afbeelding van ${name}`}
              />
              <p>{name}</p>
              {/* Play Button */}
              <button onClick={() => playAudio(index + 6)}>Afspelen</button>
              {/* Audio */}
              <audio
                ref={(el) => (audioRefs.current[index + 6] = el)}
                src={`audio/${name.toLowerCase().replace(/ /g, "_")}.mp3`} // Replace spaces with underscores
              />
            </div>
          ))}
        </div>
      </section>

      {/* Onze Filosofie Section */}
      <section className="section">
        <h2>Onze filosofie</h2>
        <div className="section-content">
          {items.slice(8).map((name, index) => (
            <div key={index + 8} className="card">
              {/* Image */}
              <img
                src={`images/prototype/${name
                  .toLowerCase()
                  .replace(/ /g, "_")}.png`} // Replace spaces with underscores
                alt={`Afbeelding van ${name}`}
              />
              <p>{name}</p>
              {/* Play Button */}
              <button onClick={() => playAudio(index + 8)}>Afspelen</button>
              {/* Audio */}
              <audio
                ref={(el) => (audioRefs.current[index + 8] = el)}
                src={`audio/${name.toLowerCase().replace(/ /g, "_")}.mp3`} // Replace spaces with underscores
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Icon | Social media buttons</p>
      </footer>
    </div>
  );
};

export default ClickablePrototype1;
