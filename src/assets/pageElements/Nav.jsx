import React from "react";
import { Link, useLocation } from "react-router-dom";
import { chapters } from "../logic/navLogic";

const Nav = () => {
  const location = useLocation();

  // Group chapters by their main chapter number
  const groupedChapters = chapters.reduce((acc, chapter) => {
    const mainChapter = chapter.isSubchapter
      ? chapter.chapterNumber.split(".")[0] // Extract main chapter number for subchapters
      : chapter.chapterNumber;

    acc[mainChapter] = acc[mainChapter] || [];
    acc[mainChapter].push(chapter);
    return acc;
  }, {});

  //Set up the navigation bar with the chapters and subchapters
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
          {Object.keys(groupedChapters).map((mainChapter) => {
            const chaptersInGroup = groupedChapters[mainChapter];
            const mainChapterData = chaptersInGroup.find(
              (chapter) => !chapter.isSubchapter
            );

            return (
              <li key={mainChapter}>
                {mainChapterData && (
                  <Link
                    to={mainChapterData.path}
                    style={{
                      color:
                        location.pathname === mainChapterData.path
                          ? "#007bff"
                          : "#333",
                      textDecoration: "none",
                      padding: "5px 0",
                      display: "block",
                      fontWeight:
                        location.pathname === mainChapterData.path
                          ? "bold"
                          : "normal",
                    }}
                  >
                    {mainChapterData.name}
                  </Link>
                )}
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  {chaptersInGroup
                    .filter((chapter) => chapter.isSubchapter)
                    .map((chapter) => (
                      <li key={chapter.path}>
                        <Link
                          to={chapter.path}
                          style={{
                            color:
                              location.pathname === chapter.path
                                ? "#007bff"
                                : "#333",
                            textDecoration: "none",
                            padding: "5px 0",
                            display: "block",
                            fontWeight:
                              location.pathname === chapter.path
                                ? "bold"
                                : "normal",
                          }}
                        >
                          {chapter.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
