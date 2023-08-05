"use client";

import { Project } from "@/app/projects/page";
import Image from "next/image";
import { FC, useContext } from "react";
import { ProjectContext } from "../ProjectProvider";
import Badge from "../ui/badges/Badge";
import GithubButton from "../ui/buttons/GithubButton";
import ShowProjectButton from "../ui/buttons/ShowProjectButton";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { setSelectedProject } = useContext(ProjectContext);
  const handleClick = () => {
    const device = window.matchMedia("(max-width:700px)");
    function goToTop(device: any) {
      if (device.matches) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    goToTop(device);
    setSelectedProject(project);
  };
  return (
    <div className="group  dark:bg-slate-950/75 hover:bg-transparent hover:dark:bg-transparent backdrop-blur-xxs border-2/1 p-4  border-slate-200 dark:border-slate-400  relative flex items-end aspect-square rounded-3xl overflow-hidden dark:text-white text-gray-50 shadow-sm shadow-slate-700 ">
      <div className="absolute h-full w-full top-0 left-0 group-hover:top-4 group-hover:p-4 group-hover:left-4  duration-200 group-hover:h-1/2 group-hover:w-3/5">
        <div className="h-full group-hover:opacity-0 duration-75 w-full flex lg:p-10 p-4">
          <div className="m-auto flex gap-2 flex-wrap justify-center items-center">
            {project.tags.map((tag: any) => {
              return (
                <Badge size={"lg"} variant={"default"} key={tag}>
                  {tag}
                </Badge>
              );
            })}
          </div>
        </div>

        <Image
          className="object-cover backdrop-blur-sm rounded-3xl group-hover:rounded-2xl ease-in-out duration-200 opacity-30 group-hover:opacity-100"
          src={project.projectImage}
          fill={true}
          sizes="(min-width: 808px) 50vw, 100vw"
          priority={false}
          alt={project.subtitle}
        />
      </div>
      <div className="flex flex-col h-full gap-4 w-full duration-200 opacity-0 ease-in-out group-hover:opacity-100">
        <div className="h-3/5 w-full flex">
          <div className="w-4/5"></div>
          <div className="w-1/5 flex flex-col gap-4">
            <GithubButton />
            <ShowProjectButton onClick={handleClick} />
          </div>
        </div>
        <div className="h-2/5">
          <h4 className="text-slate-800 lg:text-3xl md:text-2xl dark:text-slate-100 font-bold mb-2">
            {project.name}
          </h4>

          <p className="text-slate-900 lg:text-lg md:text-sm dark:text-slate-200 mb-2 font-semibold">
            {project.subtitle}
          </p>
          {/* <div className="flex gap-1 flex-wrap">
            {project.tags.map((tag: any) => {
              return (
                <Badge variant={"dark"} size={"xs"} key={tag}>
                  {tag}
                </Badge>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
