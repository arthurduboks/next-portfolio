"use client";

import { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type Section = (typeof links)[number]["name"];

type ActiveSectionContextProps = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSection: Section;
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
  lastClickTime: number;
  setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<Section>("Home");
  const [lastClickTime, setLastClickTime] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastClickTime,
        setLastClickTime,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContext"
    );
  }
  return context;
}
