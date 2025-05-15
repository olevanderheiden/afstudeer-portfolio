import React, { useEffect, useRef } from "react";
import "../../index.css";

//IframeElement component to display an iframe with a given source and title
const IframeElement = ({ src, title }) => {
  const iframeRef = useRef(null);

  //Set the iframe height dynamically based on the content
  useEffect(() => {
    const adjustHeight = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height =
          iframeRef.current.contentWindow.document.body.scrollHeight + "px";
      }
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", adjustHeight);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener("load", adjustHeight);
      }
    };
  }, []);

  //Set up the iframe container and, title and content
  return (
    <div className="media-container">
      <h3 className="media-title">
        <a href={src} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="iframe-element"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeElement;
