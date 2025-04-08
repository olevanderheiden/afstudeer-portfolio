const modules = import.meta.glob("../pages/chapters/chapter*.jsx", {
  eager: true,
});

export const chapters = Object.keys(modules).map((file) => {
  // Extract the chapter and subchapter numbers from the filename
  const match = file.match(/chapter(\d+(\.\d+)?)\.jsx$/);
  const chapterNumber = match ? match[1] : null;

  // Get the title and component from the module
  const title = modules[file].title || "Untitled";
  const component = modules[file].default;

  // Determine if it's a main chapter or subchapter
  const isSubchapter = chapterNumber.includes(".");

  return {
    path: `/chapter${chapterNumber}`,
    name: isSubchapter
      ? `${chapterNumber}: ${title}` // Subchapter format
      : `Hoofdstuk ${chapterNumber}: ${title}`, // Main chapter format
    component,
    chapterNumber,
    isSubchapter,
  };
});

// Sort chapters numerically (including subchapters)
chapters.sort((a, b) => parseFloat(a.chapterNumber) - parseFloat(b.chapterNumber));

// Add a static "Home" entry at the beginning of the list
