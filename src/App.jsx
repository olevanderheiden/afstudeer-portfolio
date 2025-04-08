import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/home";
import NotFound from "./assets/pages/notFound";
import { chapters } from "./assets/logic/navLogic";
import Begrippenlijst from "./assets/pages/begrippenLijst";
import Bijlagen from "./assets/pages/bijlagen";
import SpecialeDank from "./assets/pages/specialeDank";
import BronnenLijst from "./assets/pages/bronnenLijst";

function App() {
  console.log("App component rendered");
  return (
    <Router basename="/afstudeer-portfolio/">
      <Routes>
        {/* Static Home Route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/begrippen" element={<Begrippenlijst />} />
        <Route path="/bronnen" element={<BronnenLijst />} />
        <Route path="/bijlagen" element={<Bijlagen />} />
        <Route path="/bedankt" element={<SpecialeDank />} />

        {/* Dynamically Generated Chapter Routes */}
        {chapters
          .filter((chapter) => chapter.path !== "/") // Exclude the "Home" entry
          .map((chapter) => (
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
  );
}

export default App;
