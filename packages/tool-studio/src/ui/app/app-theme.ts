import { useEffect, useState } from "react";

export type StudioTheme = "light" | "dark";

const studioThemeStorageKey = "anvia-studio-theme";

export function readInitialStudioTheme(): StudioTheme {
  if (typeof window === "undefined") {
    return "dark";
  }
  try {
    const stored = window.localStorage.getItem(studioThemeStorageKey);
    return stored === "light" || stored === "dark" ? stored : "dark";
  } catch {
    return "dark";
  }
}

export function applyStudioTheme(theme: StudioTheme): void {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function storeStudioTheme(theme: StudioTheme): void {
  try {
    window.localStorage.setItem(studioThemeStorageKey, theme);
  } catch {
    // Ignore storage failures so private or restricted browsing still toggles the UI.
  }
}

export const initialStudioTheme = readInitialStudioTheme();
applyStudioTheme(initialStudioTheme);

export function useStudioTheme(): {
  theme: StudioTheme;
  toggleTheme: () => void;
} {
  const [theme, setTheme] = useState<StudioTheme>(() => initialStudioTheme);

  useEffect(() => {
    applyStudioTheme(theme);
    storeStudioTheme(theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
  };
}
