import { useEffect } from "react";

//This hook automatically updates the displayed title of the page in the browser based on the title provided by the page
//Most pages will only export a title variable that is then used in the Layout component to set the title of the page
//However this hook can also be used by the pages that do not use the Layout component in that case the funtion must be called inside
//the component that needs to set the title (such as the page itself)

const useUpdateTitle = (pageTitle) => {
  useEffect(() => {
    document.title = pageTitle || "Afstudeer Portfolio";
  }, [pageTitle]);
};

export default useUpdateTitle;
