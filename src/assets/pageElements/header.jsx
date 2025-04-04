import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#f5f5f5", // Lighter background color for better visibility
        color: "#333", // Darker text color for contrast
        padding: "10px 20px",
        display: "flex",
        alignItems: "center", // Align items vertically in the center
        justifyContent: "center", // Center the navigation horizontally
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for better separation
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: 0,
          position: "absolute", // Keep the title fixed to the left
          left: "20px",
        }}
      >
        Afstudeer Portfolio Ole van der Heiden
      </h1>

      {/* Navigation Links */}
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px", // Add spacing between links
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#bronnen"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Bronnen
            </a>
          </li>
          <li>
            <a
              href="#speciale-dank"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Speciale Dank
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
