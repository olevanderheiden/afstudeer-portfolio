import React from "react";
import Header from "../pageElements/header";
import Footer from "../pageElements/footer";
import { useLocation, Link } from "react-router-dom";

const Layout = ({ navigation, content, sources }) => {
  const location = useLocation();

  const chapters = [
    { path: "/", name: "Home" },
    { path: "/chapter1", name: "Chapter 1" },
    { path: "/chapter2", name: "Chapter 2" },
    // Add more chapters here
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Header />
      <div style={{ display: "flex", flex: 1, marginTop: "80px" }}>
        {/* Navigation on the left */}
        <aside
          style={{
            width: "20%",
            padding: "10px",
            backgroundColor: "#333", // Match the header color
            color: "#fff",
          }}
        >
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {chapters.map((chapter) => (
                <li key={chapter.path}>
                  <Link
                    to={chapter.path}
                    style={{
                      color:
                        location.pathname === chapter.path ? "#ffcc00" : "#fff",
                      textDecoration: "none",
                      padding: "5px 0",
                      display: "block",
                    }}
                  >
                    {chapter.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content in the center */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#fff",
            marginTop: "80px", // Ensure content is not hidden behind the header
          }}
        >
          {content}
        </main>

        {/* Sources below the navigation */}
        <aside
          style={{
            width: "20%",
            padding: "10px",
            backgroundColor: "#f4f4f4",
          }}
        >
          <h3>Sources</h3>
          <ul>{sources}</ul>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
