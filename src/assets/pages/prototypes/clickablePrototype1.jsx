import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/prototype1.css";

const ClickablePrototype1 = () => {
  const [isInIframe, setIsInIframe] = useState(false);
  const [isTourLoading, setIsTourLoading] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();
  const audioRefs = useRef([]);
  const cardRefs = useRef([]);

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

  const checkAudioExists = (src) => {
    return new Promise((resolve) => {
      const audio = new window.Audio();
      audio.src = src;
      audio.addEventListener("canplaythrough", () => resolve(true), {
        once: true,
      });
      audio.addEventListener("error", () => resolve(false), { once: true });
    });
  };

  // Play all available audio files in order, scroll and focus to each card
  const handleTourStart = async () => {
    setIsTourLoading(true);
    const audioSources = items.map((name, idx) => {
      if (idx < 6 || idx >= 8) {
        return `audio/prototype/${name.toLowerCase().replace(/ /g, "_")}.wav`;
      } else {
        return `audio/${name.toLowerCase().replace(/ /g, "_")}.mp3`;
      }
    });

    const existenceChecks = await Promise.all(
      audioSources.map((src) => checkAudioExists(src))
    );
    const playableIndexes = audioSources
      .map((src, idx) => (existenceChecks[idx] ? idx : null))
      .filter((idx) => idx !== null);

    for (const idx of playableIndexes) {
      // Scroll and focus to the card
      const card = cardRefs.current[idx];
      if (card) {
        setActiveCard(idx);
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.focus({ preventScroll: true });
      }
      // Play audio
      const audio = new window.Audio(audioSources[idx]);
      await new Promise((resolve) => {
        audio.play();
        audio.onended = resolve;
        audio.onerror = resolve;
      });
    }
    setActiveCard(null);
    setIsTourLoading(false);
  };

  const playAudio = (index) => {
    setActiveCard(index);
    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
      audioRefs.current[index].onended = () => setActiveCard(null);
      audioRefs.current[index].onerror = () => setActiveCard(null);
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">Logo</div>
          <nav className="nav-links">
            <a>Trainingen</a>
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

      {/* Tour Starten Button */}
      <div className="tour-starten-bar">
        <button
          className="tour-starten-btn"
          onClick={handleTourStart}
          disabled={isTourLoading}
        >
          {isTourLoading ? "Tour wordt gestart..." : "Tour starten"}
        </button>
      </div>

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
              <div
                key={index}
                className={`card${activeCard === index ? " active-card" : ""}`}
                tabIndex={-1}
                ref={(el) => (cardRefs.current[index] = el)}
              >
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
                  src={`audio/prototype/${name
                    .toLowerCase()
                    .replace(/ /g, "_")}.wav`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Over het Kantoor</h2>
          <div className="section-content">
            {items.slice(6, 8).map((name, index) => (
              <div
                key={index + 6}
                className={`card${
                  activeCard === index + 6 ? " active-card" : ""
                }`}
                tabIndex={-1}
                ref={(el) => (cardRefs.current[index + 6] = el)}
              >
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
              <div
                key={index + 8}
                className={`card${
                  activeCard === index + 8 ? " active-card" : ""
                }`}
                tabIndex={-1}
                ref={(el) => (cardRefs.current[index + 8] = el)}
              >
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
                  src={`audio/prototype/${name
                    .toLowerCase()
                    .replace(/ /g, "_")}.wav`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Social media links will be put here</p>
      </footer>
    </div>
  );
};

export default ClickablePrototype1;
