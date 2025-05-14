import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/prototype1.css";

const ClickablePrototype1 = () => {
  const [isInIframe, setIsInIframe] = useState(false);
  const navigate = useNavigate();
  const audioRefs = useRef([]);

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
    const inIframe = window.self !== window.top;
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
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">Logo</div>
          <nav className="nav-links">
            <a href="#">Trainingen</a>
            <a href="#">Audit</a>
            <a href="#">Advies</a>
            <a href="#">Nieuws</a>
            <a href="#">Over ons</a>
            <a href="#">Contact</a>
            <a href="#">Gratis White papers</a>
            <a href="#">Zoeken</a>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      {!isInIframe && (
        <button className="back-button" onClick={() => navigate("/")}>
          Terug naar Portfolio
        </button>
      )}

      {/* Main Content */}
      <main>
        <section className="section">
          <h2>Ons team</h2>
          <div className="section-content">
            {items.slice(0, 6).map((name, index) => (
              <div key={index} className="card">
                <img
                  src={`images/prototype/${name
                    .toLowerCase()
                    .replace(/ /g, "_")}.png`}
                  alt={`Afbeelding van ${name}`}
                />
                <p>{name}</p>
                <button onClick={() => playAudio(index)}>Afspelen</button>
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={`audio/${name.toLowerCase().replace(/ /g, "_")}.mp3`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Over het Kantoor</h2>
          <div className="section-content">
            {items.slice(6, 8).map((name, index) => (
              <div key={index + 6} className="card">
                <img
                  src={`images/prototype/${name
                    .toLowerCase()
                    .replace(/ /g, "_")}.png`}
                  alt={`Afbeelding van ${name}`}
                />
                <p>{name}</p>
                <button onClick={() => playAudio(index + 6)}>Afspelen</button>
                <audio
                  ref={(el) => (audioRefs.current[index + 6] = el)}
                  src={`audio/${name.toLowerCase().replace(/ /g, "_")}.mp3`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Onze filosofie</h2>
          <div className="section-content">
            {items.slice(8).map((name, index) => (
              <div key={index + 8} className="card">
                <img
                  src={`images/prototype/${name
                    .toLowerCase()
                    .replace(/ /g, "_")}.png`}
                  alt={`Afbeelding van ${name}`}
                />
                <p>{name}</p>
                <button onClick={() => playAudio(index + 8)}>Afspelen</button>
                <audio
                  ref={(el) => (audioRefs.current[index + 8] = el)}
                  src={`audio/${name.toLowerCase().replace(/ /g, "_")}.mp3`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© Ole van der Heiden 2025</p>
      </footer>
    </div>
  );
};

export default ClickablePrototype1;
