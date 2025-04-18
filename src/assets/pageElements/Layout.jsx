import React, { useEffect, useState } from "react";
import Header from "../pageElements/header";
import Footer from "../pageElements/footer";
import Nav from "../pageElements/Nav";
import useUpdateTitle from "../../hooks/useUpdateTitle";
import { useLocation, useNavigate } from "react-router-dom";
import SourceList from "./sourceList";
import sourcesData from "../sources.json";
import { chapters } from "../logic/navLogic";

const Layout = ({ content, pageTitle }) => {
  useUpdateTitle(pageTitle);

  const location = useLocation();
  const navigate = useNavigate();
  const [sources, setSources] = useState(null);

  useEffect(() => {
    // Load sources for the current path
    const currentSources = sourcesData[location.pathname] || null;
    setSources(currentSources);
  }, [location.pathname]);

  // Determine the current chapter and its position
  const currentChapterIndex = chapters.findIndex(
    (chapter) => chapter.path === location.pathname
  );
  const previousChapter =
    currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex < chapters.length - 1
      ? chapters[currentChapterIndex + 1]
      : null;

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
      <div
        style={{
          display: "flex",
          flex: 1,
          marginTop: "80px",
          gap: "20px",
        }}
      >
        {/* Navigation tab on the left side of the screen to display the chapter selector */}
        <Nav />

        {/* Main content determined by the selected page*/}
        <main
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          {content}
          {currentChapterIndex !== -1 && (
    <div
      style={{
        position: "absolute",
        bottom: "1%",
        left: "1%",
        right: "1%",
        display: "flex",
        justifyContent: "space-between",
        pointerEvents: "none", 
      }}
    >
      {/* Previous Button */}
      <div
        style={{
          pointerEvents: "auto",
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      >
        {previousChapter && (
          <button onClick={() => navigate(previousChapter.path)}>Vorige</button>
        )}
      </div>

      {/* Next Button */}
      <div
        style={{
          pointerEvents: "auto",
          position: "absolute",
          bottom: "0",
          right: "0",
        }}
      >
        {nextChapter && (
          <button onClick={() => navigate(nextChapter.path)}>Volgende</button>
        )}
      </div>
    </div>
  )}
        </main>

        {/* Sources on the right (optional) */}
        {sources && (
          <aside
            style={{
              flex: "0 1 300px",
              maxWidth: "400px",
              padding: "10px",
              backgroundColor: "#f4f4f4",
              overflowX: "auto",
            }}
          >
            <h3>Bronnen lijst</h3>
            <SourceList sources={sources} />
          </aside>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;