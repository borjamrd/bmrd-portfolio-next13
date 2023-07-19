import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";
import Image from "next/image";
import projects from "./../../assets/projects.gif";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
  return (
    <Link
      className="relative rounded-3xl row-span-1 col-span-3 aspect-3/1 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-500 ease-in-out"
      href={"/projects"}
      rel="noopener noreferrer"
    >
      <div className="h-full w-full absolute">
        <Image
          src={projects}
          alt="Picture of the author"
          width={800}
          height={550}
          className="w-full h-full object-cover opacity-90"
          // blurDataURL="data:..."  // automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <Card
        variant={"secondary"}
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        Projects
      </Card>
    </Link>
  );
};

export default ProjectSection;
