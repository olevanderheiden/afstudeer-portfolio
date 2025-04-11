import React, { useEffect, useState } from "react";
import Header from "../pageElements/header";
import Footer from "../pageElements/footer";
import Nav from "../pageElements/Nav";
import useUpdateTitle from "../../hooks/useUpdateTitle";
import { useLocation } from "react-router-dom";
import SourceList from "./sourceList";
import sourcesData from "../sources.json";

const Layout = ({ content, pageTitle }) => {
  useUpdateTitle(pageTitle);

  const location = useLocation();
  const [sources, setSources] = useState(null);

  useEffect(() => {
    // Load sources for the current path
    const currentSources = sourcesData[location.pathname] || null;
    setSources(currentSources);
  }, [location.pathname]);

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
          gap: "20px", // Add spacing between sections
        }}
      >
        {/* Navigation on the left */}
        <Nav />

        {/* Main content in the center */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          {content}
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
