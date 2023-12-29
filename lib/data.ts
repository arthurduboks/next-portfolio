import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import dropboxImg from "@/public/dropboxclone.png";
import ecomProjectImg from "@/public/ecomproject.png";
import reactMusicPlayerImg from "@/public/reactmusicplayer.png";

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
    title: "North-America E-shop Brand Manager",
    location: "Canada, Montreal",
    description:
      "Day-to-day e-commerce management of Thrustmaster & Hercules DJ USA. Additionally, I manage digital advertising, SEO, and more.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Lighthouse Labs",
    location: "Canada",
    description:
      "Completed a one-month Web Development course with a focus on HTML5, CSS3, Ruby, and MySQL.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "L1 Tech Support",
    location: "Remote, Contract",
    description:
      "Assist Debutify Shopify theme users in optimizing their sites by providing expertise in HTML, CSS, and Shopify Liquid.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "MCIT",
    location: "Canada, Montreal",
    description:
      "Completed a comprehensive 900-hour immersive college program focused on Full-Stack Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "L2 Tech Support",
    location: "Remote, Contract",
    description:
      "I now manage Level 2 support tickets, which includes issues related to CSS, Shopify Liquid, and JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
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
  "Zustand",
  "Next.js",
  "Bootstrap",
  "Tailwind",
  "Headless UI",
  "shadcn",
  "daisyUI",
  "Prisma",
  "MongoDB",
  "Firebase",
  "PostgreSQL",
  "Node.js",
  "Express",
  "RESTful API",
  "Clerk AUTH",
  "Next AUTH",
  "Bcrypt",
  "Framer Motion",
  "Stripe",
  "SEO",
] as const;
