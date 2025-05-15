import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/prototype1.css";
import useUpdateTitle from "../../../hooks/useUpdateTitle";

const title = "Clickable Prototype 1";

// ClickablePrototype1 component
const ClickablePrototype1 = () => {
  useUpdateTitle(title);
  const [isInIframe, setIsInIframe] = useState(false);
  const [isTourLoading, setIsTourLoading] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [tourAbortController, setTourAbortController] = useState(null);
  const [playingAudioIndex, setPlayingAudioIndex] = useState(null);
  const [pausedAudioIndex, setPausedAudioIndex] = useState(null);
  const [audioExists, setAudioExists] = useState([]);
  const navigate = useNavigate();
  const audioRefs = useRef([]);
  const cardRefs = useRef([]);

  // List of items to be displayed in the tour
  // The items are used to create the audio and image file names
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

  // Helper to get audio source for each index
  const getAudioSrc = (idx) => {
    if (idx < 6 || idx >= 8) {
      return `audio/prototype/${items[idx]
        .toLowerCase()
        .replace(/ /g, "_")}.wav`;
    } else {
      return `audio/${items[idx].toLowerCase().replace(/ /g, "_")}.mp3`;
    }
  };

  // Check if an audio file exists
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

  // On mount, check all audio files and store their existence
  useEffect(() => {
    const checkAllAudio = async () => {
      const checks = await Promise.all(
        items.map((_, idx) => checkAudioExists(getAudioSrc(idx)))
      );
      setAudioExists(checks);
    };
    checkAllAudio();
    // eslint-disable-next-line
  }, []);

  // Play all available audio files in order, scroll and focus to each card
  const handleTourStart = async () => {
    if (isTourLoading) {
      // Stop the tour if already running
      if (tourAbortController) {
        tourAbortController.abort();
      }
      setIsTourLoading(false);
      setActiveCard(null);
      setTourAbortController(null);
      return;
    }

    setIsTourLoading(true);
    setPlayingAudioIndex(null);
    setPausedAudioIndex(null);
    const abortController = new AbortController();
    setTourAbortController(abortController);

    const audioSources = items.map((_, idx) => getAudioSrc(idx));

    const existenceChecks = await Promise.all(
      audioSources.map((src) => checkAudioExists(src))
    );
    const playableIndexes = audioSources
      .map((src, idx) => (existenceChecks[idx] ? idx : null))
      .filter((idx) => idx !== null);

    for (const idx of playableIndexes) {
      if (abortController.signal.aborted) break;

      // Scroll and focus to the card
      const card = cardRefs.current[idx];
      if (card) {
        setActiveCard(idx);
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.focus({ preventScroll: true });
      }
      setPlayingAudioIndex(idx);
      setPausedAudioIndex(null);

      //Check if audio is available and play it during the tour
      const audio = new window.Audio(audioSources[idx]);
      await new Promise((resolve) => {
        audio.play();
        audio.onended = () => {
          setPlayingAudioIndex(null);
          resolve();
        };
        audio.onerror = () => {
          setPlayingAudioIndex(null);
          resolve();
        };
        abortController.signal.addEventListener(
          "abort",
          () => {
            audio.pause();
            audio.currentTime = 0;
            setPlayingAudioIndex(null);
            resolve();
          },
          { once: true }
        );
      });
    }
    // Reset state after tour ends
    setActiveCard(null);
    setPlayingAudioIndex(null);
    setPausedAudioIndex(null);
    setIsTourLoading(false);
    setTourAbortController(null);
  };

  // Play/pause/continue logic for individual audio buttons
  const playAudio = (index) => {
    if (isTourLoading) return; // Block manual play during tour

    const audio = audioRefs.current[index];
    if (!audio) return;

    // If another audio is playing, block all except the current
    if (playingAudioIndex !== null && playingAudioIndex !== index) {
      return;
    }

    // If this audio is already playing, pause it
    if (playingAudioIndex === index && !audio.paused) {
      audio.pause();
      setPausedAudioIndex(index);
      setPlayingAudioIndex(null);
      return;
    }

    // If this audio was paused, continue it
    if (pausedAudioIndex === index) {
      audio.play();
      setPlayingAudioIndex(index);
      setPausedAudioIndex(null);
      audio.onended = () => {
        setPlayingAudioIndex(null);
        setPausedAudioIndex(null);
      };
      audio.onerror = () => {
        setPlayingAudioIndex(null);
        setPausedAudioIndex(null);
      };
      return;
    }

    // Otherwise, play from start
    audio.currentTime = 0;
    audio.play();
    setActiveCard(index);
    setPlayingAudioIndex(index);
    setPausedAudioIndex(null);
    audio.onended = () => {
      setPlayingAudioIndex(null);
      setPausedAudioIndex(null);
    };
    audio.onerror = () => {
      setPlayingAudioIndex(null);
      setPausedAudioIndex(null);
    };
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
          aria-pressed={isTourLoading}
          disabled={isTourLoading || playingAudioIndex !== null}
        >
          {isTourLoading ? "Tour stoppen" : "Tour starten"}
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
              // Create a card for each site tour item
              <div
                key={index}
                className={`card${activeCard === index ? " active-card" : ""}`}
                tabIndex={-1}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                {/* Image and name of tour element */}
                <img
                  src={`images/prototype/${name
                    .toLowerCase()
                    .replace(/ /g, "_")}.png`}
                  alt={`Afbeelding van ${name}`}
                />
                <p>{name}</p>
                <button
                  onClick={() => playAudio(index)}
                  disabled={
                    isTourLoading ||
                    (playingAudioIndex !== null &&
                      playingAudioIndex !== index) ||
                    audioExists[index] === false
                  }
                >
                  {/* Play/Pause/Continue button */}
                  {playingAudioIndex === index &&
                  audioRefs.current[index] &&
                  !audioRefs.current[index].paused
                    ? "Pauzeer"
                    : pausedAudioIndex === index
                    ? "Doorgaan"
                    : "Afspelen"}
                </button>
                {/* Audio element for each card */}
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

        {/* Additional sections for office and philosophy  uses the same elements as the ones for employees*/}
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
                <button
                  onClick={() => playAudio(index + 6)}
                  disabled={
                    isTourLoading ||
                    (playingAudioIndex !== null &&
                      playingAudioIndex !== index + 6) ||
                    audioExists[index + 6] === false // Disable if file doesn't exist
                  }
                >
                  {playingAudioIndex === index + 6 &&
                  audioRefs.current[index + 6] &&
                  !audioRefs.current[index + 6].paused
                    ? "Pauzeer"
                    : pausedAudioIndex === index + 6
                    ? "Doorgaan"
                    : "Afspelen"}
                </button>
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
                <button
                  onClick={() => playAudio(index + 8)}
                  disabled={
                    isTourLoading ||
                    (playingAudioIndex !== null &&
                      playingAudioIndex !== index + 8) ||
                    audioExists[index + 8] === false // Disable if file doesn't exist
                  }
                >
                  {playingAudioIndex === index + 8 &&
                  audioRefs.current[index + 8] &&
                  !audioRefs.current[index + 8].paused
                    ? "Pauzeer"
                    : pausedAudioIndex === index + 8
                    ? "Doorgaan"
                    : "Afspelen"}
                </button>
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
