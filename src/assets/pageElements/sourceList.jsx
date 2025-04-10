import React from "react";

const SourceList = ({ sources }) => {
  if (!sources || sources.length === 0) {
    return <p>No sources available.</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {sources.map((source, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          {source.author && `${source.author}. `}
          {source.year && `(${source.year}). `}
          {source.title && <i>{source.title}</i>}
          {source.publisher && ` ${source.publisher}.`}
          {source.url && (
            <>
              {" "}
              Retrieved from{" "}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                {source.url}
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SourceList;