import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  },
  {
    title: "React Music Player",
    description:
      "Music Player App built with React. Supports dynamic song selection and custom color tracking.",
    tags: ["React", "SCSS"],
    imageUrl: reactMusicPlayerImg,
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
