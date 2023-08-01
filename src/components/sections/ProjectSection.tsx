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
      className=" text-white rounded-3xl row-span-1 col-span-3 aspect-3/1 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-500 ease-in-out"
      href={"/projects"}
      rel="noopener noreferrer"
    >
      <Card
        variant={"secondary"}
        className="relative h-full w-full flex flex-col justify-end items-center p-2"
      >
        <div className="h-full w-full absolute opacity-40 z-0 ">
          <Image
            src={projects}
            alt="Picture of the author"
            width={800}
            height={550}
            className="w-full h-full object-cover "
            // blurDataURL="data:..."  // automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <Icons.NewTab />
        <div className="p-4 z-10">
          <h3 className="font-bold text-5xl mb-2">Projects & stuff</h3>
          <p className="text-2xl">
            Here you can find my latests projects and ideas. Some of them work
            and some of them... well go & check it
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectSection;
