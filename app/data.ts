import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

export const projects: Project[] = [
  {
    name: "Pocket ID",
    description:
      "Pocket ID is a simple but powerful OIDC provider that allows users to authenticate with their passkeys to your services.",
    image: "pocket-id.png",
    url: "https://github.com/stonith404/pocket-id",
    githubRepository: "stonith404/pocket-id",
  },
  {
    name: "FREIZEIT BERN",
    description:
      "FREIZEIT BERN is a website that recommends leisure activities in Bern (my home town) such as parties, events, culture, and sports.",
    image: "freizeit-bern.png",
    url: "https://freizeitbern.ch",
  },
  {
    name: "Pingvin Share",
    description:
      "Pingvin Share is an open-source file sharing platform that can easily be self-hosted.",
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
      name: "Blazor",
      icon: "blazor-original",
    },
    {
      name: "Flutter",
      icon: "flutter-plain",
    },
  ],
  backend: [
    {
      name: "Nest.js",
      icon: "nestjs-plain",
    },
    {
      name: "ASP.NET Core",
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
