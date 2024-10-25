import Card from "@/components/Card";
import Center from "@/components/layout/Center";
import githubService from "@/services/github.service";
import { Project } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { HiStar } from "react-icons/hi";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-100 h-full">
      <Suspense fallback={<></>}>
        <GitHubStars githubRepository={project.githubRepository} />
      </Suspense>
      <Center>
        <Image
          src={`/images/projects/${project.image}`}
          width={80}
          height={80}
          alt={project.name}
        />
      </Center>

      <h4 className="py-5 text-center text-xl font-bold">{project.name}</h4>
      <p className="mb-4 text-center">{project.description}</p>

      <Center>
        <Link target="_blank" href={project.url} className="mt-8 text-center">
          Learn more
        </Link>
      </Center>
    </Card>
  );
}

async function GitHubStars({
  githubRepository,
}: {
  githubRepository?: string;
}) {
  const stars =
    githubRepository &&
    (await githubService
      .getStarsByRepository(githubRepository)
      .catch(() => undefined));

  if (!stars) return <div className="h-[24px]"></div>;

  return (
    <div className="flex justify-end">
      <p className="flex items-center">
        <HiStar />
        {" " + stars}
      </p>
    </div>
  );
}
