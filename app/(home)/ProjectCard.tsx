import Card from "@/components/Card";
import Center from "@/components/layout/Center";
import { Project } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="w-100 h-full">
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
};

export default ProjectCard;
