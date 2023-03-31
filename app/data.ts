import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

export const projects: Project[] = [
  {
    name: "Pingvin Share",
    description:
      "Pingvin Share is a self-hosted file sharing platform. Currently this is my most loved project.",
    image: "pingvin-share.png",
    url: "https://github.com/stonith404/pingvin-share",
    githubRepository: "stonith404/pingvin-share",
  },
  {
    name: "Gradely 2",
    description:
      "Gradely is beautiful grade monitoring app built with Flutter.",
    image: "gradely2.png",
    url: "https://github.com/stonith404/gradely2",
    githubRepository: "stonith404/gradely2",
  },
  {
    name: "Chilefäud",
    description:
      "An app for my old school, to access the intern website over the app, also built with Flutter.",
    image: "kirchenfeld.png",
    url: "https://github.com/stonith404/gradely2",
  },
];

export const skills: Skill = {
  languages: [
    {
      name: "Typescript",
      icon: "typescript-plain",
    },
    {
      name: "Java",
      icon: "java-plain",
    },
    {
      name: "Python",
      icon: "python-plain",
    },
  ],
  frontend: [
    {
      name: "Next.js",
      icon: "nextjs-plain",
    },
    {
      name: "React",
      icon: "react-plain",
    },

    {
      name: "Svelte",
      icon: "svelte-plain",
    },
    {
      name: "Flutter",
      icon: "flutter-plain",
    },
    {
      name: "React Native",
      icon: "react-plain",
    },
  ],
  backend: [
    {
      name: "Nest.js",
      icon: "nestjs-plain",
    },
    {
      name: "Express.js",
      icon: "express-original",
    },
    {
      name: "Spring Boot",
      icon: "spring-plain",
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      icon: "postgresql-plain",
    },
    {
      name: "SQLite",
      icon: "sqlite-plain",
    },
    {
      name: "MongoDB",
      icon: "mongodb-plain",
    },
  ],
};
