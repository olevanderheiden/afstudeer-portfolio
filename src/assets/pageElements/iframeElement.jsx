import React, { useEffect, useRef } from "react";
import "../../index.css";

const IframeElement = ({ src, title }) => {
  const iframeRef = useRef(null);

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
