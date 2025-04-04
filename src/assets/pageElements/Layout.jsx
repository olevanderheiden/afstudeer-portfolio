import React from "react";
import Header from "../pageElements/header";
import Footer from "../pageElements/footer";
import Nav from "../pageElements/Nav";

const Layout = ({ content, sources }) => {
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
          }}
        >
          {content}
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
