import React, { useEffect, useState } from "react";
import Header from "../pageElements/header";
import Footer from "../pageElements/footer";
import Nav from "../pageElements/Nav";
import useUpdateTitle from "../../hooks/useUpdateTitle";
import { useLocation, useNavigate } from "react-router-dom";
import SourceList from "./sourceList";
import sourcesData from "../sources.json";
import { chapters } from "../logic/navLogic";
import "../../styles/layout.css";

const Layout = ({ content, pageTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sources, setSources] = useState(null);

  useUpdateTitle(pageTitle, location, chapters);

  useEffect(() => {
    // Load sources for the current path
    window.scrollTo(0, 0);
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
    <div className="layout-container">
      <Header />
      <div className="layout-main">
        {/* Navigation tab on the left side of the screen */}
        <Nav className="layout-nav" />

        {/* Main content determined by the selected page */}
        <main className="layout-content">{content}</main>

        {/* Sources on the right (optional) */}
        {sources && (
          <aside className="layout-sources">
            <h3>Bronnen lijst</h3>
            <SourceList sources={sources} />
          </aside>
        )}
      </div>

      {/* Chapter navigation buttons */}
      {currentChapterIndex !== -1 && (
        <div className="chapter-navigation">
          {/* Previous Button */}
          <div className="chapter-navigation-button left">
            {previousChapter && (
              <button onClick={() => navigate(previousChapter.path)}>
                Vorige
              </button>
            )}
          </div>

          {/* Next Button */}
          <div className="chapter-navigation-button right">
            {nextChapter && (
              <button onClick={() => navigate(nextChapter.path)}>
                Volgende
              </button>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
