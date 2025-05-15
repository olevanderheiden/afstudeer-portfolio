import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AudioPlayerProvider } from "./context/AudioPlayerContext"; // Import the provider
import HomePage from "./assets/pages/home";
import NotFound from "./assets/pages/notFound";
import { chapters } from "./assets/logic/navLogic";
import Begrippenlijst from "./assets/pages/begrippenLijst";
import Bijlagen from "./assets/pages/bijlagen";
import SpecialeDank from "./assets/pages/specialeDank";
import BronnenLijst from "./assets/pages/bronnenLijst";
import ClickablePrototype1 from "./assets/pages/prototypes/clickablePrototype1";

function App() {
  console.log("App component rendered");
  return (
    <AudioPlayerProvider>
      {" "}
      {/* Wrap the entire app with the Router wrapper*/}
      <Router basename="/afstudeer-portfolio/">
        <Routes>
          {/* Routes that don't fall into the category of being either a chapter of sub chapter. They will not appear in the navigation bar on the left*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/begrippen" element={<Begrippenlijst />} />
          <Route path="/bronnen" element={<BronnenLijst />} />
          <Route path="/bijlagen" element={<Bijlagen />} />
          <Route path="/bedankt" element={<SpecialeDank />} />
          <Route path="/prototype1" element={<ClickablePrototype1 />} />

          {/* Dynamically Generated routes (for chapters and sub chapters)
           Will be adde automatically as long as the file for it exhists in the apropiat folder*/}
          {chapters.map((chapter) => (
            <Route
              key={chapter.path}
              path={chapter.path}
              element={React.createElement(chapter.component)}
            />
          ))}

          {/* Fallback Route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AudioPlayerProvider>
  );
}

export default App;
