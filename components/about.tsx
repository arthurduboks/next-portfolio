"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="!mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I began my career with a strong foundation in Digital Marketing and then
        followed my <span className="italic">passion</span> for programming. I
        completed an immersive 900-hour college course in{" "}
        <span className="font-semibold">Full Stack Development</span> at{" "}
        <a
          href="https://www.montrealcollege.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          MCIT
        </a>
        . I <span className="italic">love</span> seeing my code come to life and
        accomplish amazing things. My core stack includes React, Node.js,
        Express, and MongoDB. Recently, I've been extensively focused on working
        with Next.js, in combination with Firebase and other cloud-based
        databases, to develop full-stack projects. I am proficient in TypeScript
        and have expertise in creating user authentication systems.
        Additionally, I excel in designing visually appealing websites using
        Tailwind CSS, Framer Motion, shadcn/ui, and various other CSS UI
        libraries.
      </p>
    </motion.section>
  );
}

export default About;
