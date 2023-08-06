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
        className="relative h-full w-full flex flex-col lg:justify-end justify-center items-center"
      >
        <div className="h-full w-full absolute top-0 opacity-40 z-0">
          <Image
            src={projects}
            alt="Picture of the author"
            fill={true}
            sizes="(min-width: 808px) 50vw, 100vw"
            priority={false}
            className="object-cover"

            // blurDataURL="data:..."  // automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <Icons.NewTab />
        <div className="lg:p-4 p-3 z-10 lg:flex-col flex">
          <h3 className="lg:flex lg:ms-0 m-auto font-bold lg:text-5xl text-xl lg:mb-2">
            Projects & stuff
          </h3>
          <p className="lg:flex hidden lg:text-xl text-sm">
            Here you can find my latests projects and ideas. Some of them work
            and some of them... well go & check it
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectSection;
