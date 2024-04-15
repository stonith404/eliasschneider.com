import AnimateOnScroll from "@/components/AnimateOnScroll";
import Card from "@/components/Card";
import IconButton from "@/components/IconButton";
import Section from "@/components/Section";
import { capitalizeFirstLetter } from "@/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { projects, skills } from "../data";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";

export const metadata: Metadata = {
  title: "Elias Schneider",
  description:
    "Welcome to Elias Schneider's portfolio! Learn more about me and my projects.",
};

// Revalidate GitHub stars every 12 hours
export const revalidate = 43200;

export default async function Home() {
  return (
    <>
      <div className="square-background mt-20 flex shrink-0 items-center justify-center md:mt-0 md:h-[70vh]">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className="h-[150px] w-[150px] rounded-[2rem] bg-white md:h-[300px] md:w-[300px]">
            <Image height={300} width={300} src="/images/pb.png" alt="" />
          </div>

          <div className="mt-10 w-full md:mt-0">
            <p className="text-gradient text-4xl font-extrabold">Hi there,</p>
            <p className="text-xl">
              my name is Elias and I'm learning software engineering at{" "}
              <Link target="_blank" href="https://akros.ch">
                Akros
              </Link>
              . I love technology and always want to be up to date with the
              latest advancements.
              <br /> <br /> At the moment I'm working on my open-source project{" "}
              <Link
                target="_blank"
                href="https://github.com/stonith404/pingvin-share"
              >
                Pingvin Share
              </Link>{" "}
              and I'm also learning the fundamentals of machine learning.
            </p>
            <div className="mt-7 flex space-x-8">
              <IconButton target="_blank" href="https://github.com/stonith404">
                <FaGithub size={20} />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/elias-schneider-82887a21a/"
              >
                <FaLinkedin size={20} />
              </IconButton>
              <IconButton
                target="_blank"
                href="mailto:elias@eliasschneider.com"
              >
                <HiMail size={20} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Section title="Skills" subTitle="Recent Technologies I've Been Using">
          <div className="flex justify-center">
            <div className="grid w-full grid-cols-1 gap-5 xl:grid-cols-2">
              {Object.entries(skills).map(([category, skills]) => (
                <AnimateOnScroll key={category}>
                  <Card>
                    <h4 className="mb-4 text-lg font-bold">
                      {capitalizeFirstLetter(category)}
                    </h4>
                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                      {skills.map((skill) => (
                        <SkillCard
                          key={skill.name}
                          name={skill.name}
                          icon={skill.icon}
                        />
                      ))}
                    </div>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </Section>
        <Section title="Projects" subTitle="My Favourite Projects">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <AnimateOnScroll key={project.name}>
                <ProjectCard project={project} />
              </AnimateOnScroll>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
