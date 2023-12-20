import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { Metadata } from "next";

import Divider from "@/components/divider";

export const metadata: Metadata = {
  title: "Arthur Duboks - Full Stack React Developer, Montreal",
  description:
    "Arthur Duboks is a Full Stack Developer from Montreal with a deep focus on React, and its eco-system.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-24">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
