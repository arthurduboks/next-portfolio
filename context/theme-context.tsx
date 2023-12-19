"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type isDark = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  isDark: isDark;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [isDark, setTheme] = useState<isDark>("light");

  const toggleMode = () => {
    if (isDark === "light") {
      setTheme("dark");
      window.localStorage.setItem("isDark", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("isDark", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("isDark") as Mode | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within the ThemeContextProvider");
  }
  return context;
}
