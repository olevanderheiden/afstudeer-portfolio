import { useEffect } from "react";

const useUpdateTitle = (pageTitle) => {
  useEffect(() => {
    // Update the document title
    document.title = pageTitle || "Afstudeer Portfolio";
  }, [pageTitle]);
};

export default useUpdateTitle;
