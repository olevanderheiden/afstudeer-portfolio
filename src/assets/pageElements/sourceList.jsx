import React from "react";

const SourceList = ({ sources }) => {
  if (!sources || sources.length === 0) {
    return <p>No sources available.</p>;
  }

  // Sort sources alphabetically by author, then by year
  const sortedSources = [...sources].sort((a, b) => {
    const authorA = a.author?.toLowerCase() || "";
    const authorB = b.author?.toLowerCase() || "";
    if (authorA < authorB) return -1;
    if (authorA > authorB) return 1;

    // If authors are the same, sort by year (earliest to latest)
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    return yearA - yearB;
  });

  return (
    <div className="layout-sources">
      <ul>
        {sortedSources.map((source, index) => (
          <li key={index}>
            {source.author && `${source.author}. `}
            {source.year && `(${source.year}). `}
            {source.title && <i>{source.title}</i>}
            {source.publisher && ` ${source.publisher}.`}
            {source.url && (
              <>
                {" "}
                Afkomstig van:{" "}
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.url}
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceList;
