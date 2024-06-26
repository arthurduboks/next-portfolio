"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import profileImage from "@/public/profileimg.png";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setLastClickTime } = useActiveSectionContext();

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <Image
              src={profileImage}
              alt="Profile image"
              quality={85}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-3xl bottom-0 left-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🖐️
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I'm Arthur,</span>
        <br />a{" "}
        <span className="font-bold underline">Full Stack Developer</span> based
        in Montreal, Canada.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
          onClick={() => {
            setActiveSection("Contact");
            setLastClickTime(Date.now());
          }}
        >
          Say Hello
          <span className="inline-block transition-transform group-hover:translate-x-1">
            <BsArrowRight />
          </span>
        </Link>

        <a
          href="/Arthur Duboks Developer-Online.docx"
          download
          aria-label="Download resume"
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full group transition outline-none focus:scale-110 hover:scale-110 active:scale-105 border borderBlack dark:bg-white/10"
        >
          Download Resume
          <span className="opacity-60 transition group-hover:translate-y-1">
            <HiDownload />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/arthur-duboks"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile link button"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/arthurduboks"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github profile link button"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
