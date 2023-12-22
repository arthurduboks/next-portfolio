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
        I started with a strong background in digital marketing and followed my{" "}
        <span className="italic">passion</span> for programming. I finished an
        immersive 900-hour course in{" "}
        <span className="font-semibold">full-stack development</span> at{" "}
        <a
          href="https://www.montrealcollege.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          MCIT
        </a>
        . I <span className="italic">love</span> seeing my code come to life and
        do amazing things. My core stack is React, Node.js, Express and Mongo
        DB. Recently, I've been extensively working with Next.js paired with
        Firebase or Appwrite. I know how to use TypeScript, create use
        authentication, and how to make websites look great thanks to Tailwind
        CSS and Framer Motion.
      </p>
    </motion.section>
  );
}

export default About;
