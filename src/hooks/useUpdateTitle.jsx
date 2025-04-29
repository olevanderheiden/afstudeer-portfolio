import { useEffect } from "react";

const useUpdateTitle = (pageTitle) => {
  useEffect(() => {
    document.title = pageTitle || "Afstudeer Portfolio";
  }, [pageTitle]);
};

export default useUpdateTitle;
