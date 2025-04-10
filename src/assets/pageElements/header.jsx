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
        backgroundColor: "#f5f5f5",
        color: "#333",
        padding: "1% 1%",
        display: "flex",
        alignItems: "flex-left",
        justifyContent: "space-between",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          margin: 0,
          flex: "1",
        }}
      >
        Afstudeer Portfolio
      </h1>

      {/* Navigation Links */}
      <nav
        style={{
          flex: "1",
          textAlign: "left",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "2%",
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
              href="bronnen"
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
              href="begrippen"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Begrippenlijst
            </a>
          </li>
          <li>
            <a
              href="bijlagen"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Bijlagen
            </a>
          </li>
          <li>
            <a
              href="bedankt"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
              }}
            >
              Bedankt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
