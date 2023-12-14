"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInVar = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Tech Stack</SectionHeading>
      <ul className="flex flex-wrap justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInVar}
            initial="initial"
            whileInView="animate"
            custom={index}
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-5 m-[0.2rem]"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
