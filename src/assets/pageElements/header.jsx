import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Title */}
      <h1>Afstudeer Portfolio</h1>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="bronnen">Bronnen</a>
          </li>
          <li>
            <a href="begrippen">Begrippenlijst</a>
          </li>
          <li>
            <a href="bijlagen">Bijlagen</a>
          </li>
          <li>
            <a href="bedankt">Bedankt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;