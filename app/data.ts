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
    name: "CD-DC",
    description:
      "A simple service to continuously deploy docker containers in a docker compose stack. The tool is especially useful in a GitHub Actions workflow.",
    image: "cd-dc.png",
    url: "https://github.com/stonith404/cd-dc",
    githubRepository: "stonith404/cd-dc",
  },
  {
    name: "Gradely 2",
    description:
      "Gradely is beautiful grade monitoring app built with Flutter.",
    image: "gradely2.png",
    url: "https://github.com/stonith404/gradely2",
    githubRepository: "stonith404/gradely2",
  }
];

export const skills: Skill = {
  languages: [
    {
      name: "Typescript",
      icon: "typescript-plain",
    },
    {
      name: "Go",
      icon: "go-original-wordmark",
    },
    {
      name: "C#",
      icon: "csharp-plain",
    },
    {
      name: "Java",
      icon: "java-plain",
    },
  ],
  frontend: [
    {
      name: "Next.js (React)",
      icon: "nextjs-plain",
    },
    {
      name: "Svelte (Kit)",
      icon: "svelte-plain",
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
      name: "Dotnet",
      icon: "dotnetcore-plain",
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
