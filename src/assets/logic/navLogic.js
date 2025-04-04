const modules = import.meta.glob("../pages/chapters/chapter*.jsx", {
  eager: true,
});

export const chapters = Object.keys(modules).map((file) => {
  // Extract the chapter number from the filename
  const match = file.match(/chapter(\d+)\.jsx$/);
  const chapterNumber = match ? parseInt(match[1], 10) : null;

  // Get the title and component from the module
  const title = modules[file].title || "Untitled";
  const component = modules[file].default;

  return {
    path: `/chapter${chapterNumber}`,
    name: `Hoofdstuk ${chapterNumber}: ${title}`,
    component, // Add the component to the chapter object
  };
});

// Add a static "Home" entry at the beginning of the list
chapters.unshift({ path: "/", name: "Home" });
