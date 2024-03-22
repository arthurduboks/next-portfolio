import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import dropboxImg from "@/public/dropboxclone.png";
import ecomProjectImg from "@/public/ecomproject.png";
import reactMusicPlayerImg from "@/public/reactmusicplayer.png";
import gptCreative from "@/public/gptcreative.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "North-America E-Commerce Brand Manager",
    location: "Canada, Montreal",
    description:
      "Day-to-day e-commerce management of Thrustmaster & Hercules DJ USA. Additionally, I manage digital advertising, SEO, CRO, and more.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Lighthouse Labs",
    location: "Canada, Montreal",
    description:
      "Completed a one-month Web Development course with a focus on HTML5, CSS3, Ruby, and MySQL.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "L1 Tech Support Engineer - Contract",
    location: "Canada, Montreal",
    description:
      "Help Debutify Shopify theme users with optimizing their e-commerce businesses by providing Level 1 support expertise via Intercom.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Montreal College of IT",
    location: "Canada, Montreal",
    description:
      "Completed a comprehensive 900-hour immersive college degree program focused on Full-Stack Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "L2 Tech Support Engineer - Contract",
    location: "Canada, Montreal",
    description:
      "I now resolve Level 2 support tickets, which includes issues related to CSS, jQuery, Shopify Liquid, and JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "L2 Tech Support Lead - Contract",
    location: "Canada, Montreal",
    description:
      "Diagnose and address bugs in Shopify Liquid, JavaScript, CSS, and jQuery successfully optimizing Debutify theme functionality. Partner with the Level L3 team to rectify complex back-end-related issues.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "GPT-Creative",
    description:
      "GPT-Creative is an app powered by OpenAI, designed to answer marketing-related questions through prompt engineering.",
    tags: [
      "Next.js",
      "React Query",
      "Railway",
      "Prisma",
      "OpenAI",
      "Clerk AUTH",
      "Tailwind",
      "daisyUI",
    ],
    imageUrl: gptCreative,
    projectLink: "https://github.com/arthurduboks/gpt-creative",
  },
  {
    title: "DropBox Clone",
    description:
      "DropBox inspired clone built with Next.js 14, CRUD operations, and user authentication.",
    tags: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Clerk AUTH",
      "Tailwind",
      "shadcn",
      "Zustand",
    ],
    imageUrl: dropboxImg,
    projectLink: "https://github.com/arthurduboks/dropbox-clone",
  },
  {
    title: "E-Commerce Project",
    description:
      "E-Commerce project built with Next.js 13, user authentication, and Stripe.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma",
      "PostgreSQL",
      "Next AUTH",
      "Stripe",
    ],
    imageUrl: ecomProjectImg,
    projectLink: "https://github.com/arthurduboks/e_com_next",
  },
  {
    title: "React Music Player",
    description:
      "Music Player App built with React. Supports dynamic song selection and custom color tracking.",
    tags: ["React", "SCSS"],
    imageUrl: reactMusicPlayerImg,
    projectLink: "https://github.com/arthurduboks/music_app",
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "SCSS",
  "JavaScript ES6+",
  "TypeScript",
  "React",
  "Redux",
  "React Query",
  "Zustand",
  "Next.js",
  "Bootstrap",
  "Tailwind",
  "Headless UI",
  "shadcn",
  "daisyUI",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "Firebase",
  "PostgreSQL",
  "Railway",
  "Node.js",
  "Express",
  "RESTful API",
  "Jest",
  "OpenAI",
  "Clerk AUTH",
  "Next AUTH",
  "Stripe",
  "SEO",
  "Figma",
] as const;
