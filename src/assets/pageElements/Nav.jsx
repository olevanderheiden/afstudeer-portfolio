import React from "react";
import { Link, useLocation } from "react-router-dom";
import { chapters } from "../logic/navLogic";

const Nav = () => {
  const location = useLocation();

  return (
    <aside
      style={{
        width: "20%",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        color: "#333",
        borderRight: "1px solid #ddd",
      }}
    >
      <nav>
        <h3>Hoofdstukken</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {chapters.map((chapter) => (
            <li key={chapter.path}>
              <Link
                to={chapter.path}
                style={{
                  color:
                    location.pathname === chapter.path ? "#007bff" : "#333",
                  textDecoration: "none",
                  padding: "5px 0",
                  display: "block",
                  fontWeight:
                    location.pathname === chapter.path ? "bold" : "normal",
                }}
              >
                {chapter.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
