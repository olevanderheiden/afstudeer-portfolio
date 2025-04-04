import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/home";
import Chapter1 from "./assets/pages/chapters/chapter1";

function App() {
  console.log("App component rendered");
  return (
    <Router basename="/afstudeer-portfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chapter1" element={<Chapter1 />} />
      </Routes>
    </Router>
  );
}

export default App;
