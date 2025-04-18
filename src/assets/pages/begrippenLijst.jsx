import React, { useState, useEffect } from "react";
import Layout from "../pageElements/Layout";
import termsData from "../terms.json";

const Begrippenlijst = () => {
  const [terms, setTerms] = useState([]);
  const [sortBy, setSortBy] = useState("alphabetical"); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    // Load terms from terms.json
    setTerms(termsData);
  }, []);

  // Filter terms based on the search query
  const filteredTerms = terms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (term.page && term.page.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Sort terms based on the selected sorting method
  const sortedTerms =
    sortBy === "alphabetical"
      ? [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term))
      : [...filteredTerms].sort((a, b) =>
          (a.page || "Other").localeCompare(b.page || "Other") ||
          a.term.localeCompare(b.term)
        );

  // Group terms by page when sorting by page
  const groupedTerms =
    sortBy === "page"
      ? sortedTerms.reduce((acc, term) => {
          const page = term.page || "Other";
          if (!acc[page]) acc[page] = [];
          acc[page].push(term);
          return acc;
        }, {})
      : { All: sortedTerms };

  const content = (
    <div>
      <h2>Begrippenlijst</h2>
      <p>Hieronder vindt u een lijst van termen en hun uitleg.</p>

      {/* Search Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Zoek op term of pagina..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            marginBottom: "10px",
          }}
        />
      </div>

      {/* Sorting Options */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="radio"
            name="sort"
            value="alphabetical"
            checked={sortBy === "alphabetical"}
            onChange={() => setSortBy("alphabetical")}
          />
          Alfabetisch
        </label>
        <label style={{ marginLeft: "20px" }}>
          <input
            type="radio"
            name="sort"
            value="page"
            checked={sortBy === "page"}
            onChange={() => setSortBy("page")}
          />
          Per pagina
        </label>
      </div>

      {/* Display Terms */}
      {sortBy === "page" ? (
        Object.keys(groupedTerms).map((page, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{page === "Other" ? "Overige" : page}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {groupedTerms[page].map((term, termIndex) => (
                <li key={termIndex} style={{ marginBottom: "10px" }}>
                  <strong>{term.term}</strong>: {term.definition}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {sortedTerms.map((term, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{term.term}</strong>: {term.definition}{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return <Layout content={content} />;
};

export default Begrippenlijst;