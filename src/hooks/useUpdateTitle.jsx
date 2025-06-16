import { useEffect } from "react";

// Accepts pageTitle, location, and chapters array
const useUpdateTitle = (pageTitle, location, chapters) => {
  useEffect(() => {
    let fullTitle = pageTitle || "Afstudeer Portfolio";
    if (location && chapters) {
      const chapter = chapters.find((c) => c.path === location.pathname);
      if (chapter && chapter.chapterNumber) {
        fullTitle = `${chapter.chapterNumber} - ${pageTitle}`;
      }
    }
    document.title = fullTitle;
  }, [pageTitle, location, chapters]);
};

export default useUpdateTitle;
