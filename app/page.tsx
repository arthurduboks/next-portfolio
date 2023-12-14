import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

import Divider from "@/components/divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-24">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
