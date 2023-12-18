"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Reach out directly at{" "}
        <a className="underline" href="mailto:codebyarthur@gmail.com">
          codebyarthur@gmail.com
        </a>{" "}
        or through the form below.
      </p>
      <form
        action={async (FormData) => {
          await sendEmail(FormData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="h-14 rounded-lg borderBlack px-4"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email..."
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Say something..."
          name="senderMessage"
          required
          maxLength={1000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit
          <FaPaperPlane className="text-xs transition-all group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
