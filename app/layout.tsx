"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import DarkMode from "@/components/dark-mode";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* Background color pallette */}
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[rgb(251,226,227)] absolute -z-10 top-[-6rem] right-[2rem] h-[20rem] w-[20rem] rounded-full blur-[5rem] sm:right-[11rem] sm:h-[31.25rem] sm:w-[31.25rem] sm:blur-[10rem] dark:bg-[rgb(148,98,99)]"></div>
        <div className="bg-[rgb(219,215,251)] absolute -z-10 top-[-1rem] left-[-10rem] h-[20rem] w-[30rem] rounded-full blur-[5rem] sm:left-[-35rem] sm:h-[31.25rem] sm:w-[50rem] sm:blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[rgb(103,99,148)]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>
          <DarkMode />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
