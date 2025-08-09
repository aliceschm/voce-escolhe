import { useState, useEffect } from "react";

const themes = ["theme-galaxy", "theme-daylight"];

export function useToggleTheme() {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    // Remove all classes, then add the new one
    document.body.classList.remove(...themes);
    document.body.classList.add(themes[themeIndex]);
  }, [themeIndex]);

  function toggleTheme() {
    // Compare themes by index instead of names (strings)
    // same as "Galaxy" ? "Daylight" : "Galaxy"
    setThemeIndex((prev) => (prev === 0 ? 1 : 0));
  }

  return { toggleTheme };
}
