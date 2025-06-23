const modules = import.meta.glob("../pages/chapters/chapter*.jsx", {
  eager: true,
});

export const chapters = Object.keys(modules)
  .map((file) => {
    // Extract the chapter and subchapter numbers from the filename
    const match = file.match(/chapter(\d+(\.\d+)?)\.jsx$/i);
    const chapterNumber = match ? match[1] : null;

    // Get the title and component from the module
    const title = modules[file].title || "Untitled";
    const component = modules[file].default;

    // Determine if it's a main chapter or subchapter
    const isSubchapter = chapterNumber.includes(".");

    return {
      path: `/chapter${chapterNumber}`,
      name: isSubchapter
        ? `${chapterNumber} ${title}` // Subchapter format
        : `Hoofdstuk ${chapterNumber} ${title}`, // Main chapter format
      component,
      chapterNumber,
      isSubchapter,
    };
  })
  .sort((a, b) => {
    // Sort chapters numerically, including subchapters
    const aParts = a.chapterNumber.split(".").map(Number);
    const bParts = b.chapterNumber.split(".").map(Number);

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aPart = aParts[i] || 0;
      const bPart = bParts[i] || 0;
      if (aPart !== bPart) {
        return aPart - bPart;
      }
    }
    return 0;
  });
