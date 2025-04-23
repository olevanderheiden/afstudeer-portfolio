import React from "react";

const ImageElement = ({ src, title, alt }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <img
        src={`images/${src}`}
        alt={alt}
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default ImageElement;
