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
        padding: "10px 5%",
        display: "flex",
        alignItems: "center", // Align items vertically in the center
        justifyContent: "space-between", // Space between title and navigation
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for better separation
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: 0,
          flex: "1", // Allow the title to take up available space
        }}
      >
        Afstudeer Portfolio Ole van der Heiden
      </h1>

      {/* Navigation Links */}
      <nav
        style={{
          flex: "1", // Allow the navigation to take up available space
          textAlign: "right", // Align navigation to the right
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-center", // Align links to the right
            gap: "6%", // Use percentage-based spacing between links
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
