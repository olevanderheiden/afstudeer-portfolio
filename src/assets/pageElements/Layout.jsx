import React from "react";
import Header from "../pageElements/header";
import Footer from "../pageElements/footer";
import Nav from "../pageElements/Nav";
import useUpdateTitle from "../../hooks/useUpdateTitle";
import { chapters } from "../logic/navLogic";
import { useLocation } from "react-router-dom";

const Layout = ({ content, sources, pageTitle }) => {
  useUpdateTitle(pageTitle);

  const location = useLocation();

  // Find the current, previous, and next chapters
  const currentIndex = chapters.findIndex(
    (chapter) => chapter.path === location.pathname
  );
  const nextChapter = chapters[currentIndex + 1];
  const previousChapter = chapters[currentIndex - 1];
  // Check if the current page is the Home page
  const isHomePage = location.pathname === "/";

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
        <Nav />

        {/* Main content in the center */}
        <main
          style={{
            flex: sources ? 1 : 2,
            padding: "20px",
            backgroundColor: "#fff",
            position: "relative", // Ensure positioning for the buttons
          }}
        >
          {content}

          {/* Previous button */}
          {previousChapter && (
            <a
              href={`/afstudeer-portfolio${previousChapter.path}`} // Correct base path
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              Vorige: {previousChapter.name}
            </a>
          )}

          {/* Next button */}
          {!isHomePage && nextChapter && (
            <a
              href={`/afstudeer-portfolio${nextChapter.path}`} // Correct base path
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              Volgende: {nextChapter.name}
            </a>
          )}
        </main>

        {/* Sources on the right (optional) */}
        {sources && (
          <aside
            style={{
              width: "20%",
              padding: "10px",
              backgroundColor: "#f4f4f4",
            }}
          >
            <h3>Bronnen lijst</h3>
            <ul>{sources}</ul>
          </aside>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
