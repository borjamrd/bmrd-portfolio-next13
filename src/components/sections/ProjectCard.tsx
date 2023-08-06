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
    <div className="group  bg-blue-900/75 dark:bg-slate-950/75 hover:bg-transparent hover:dark:bg-transparent backdrop-blur-xxs border-2/1 lg:p-4 p-2 border-slate-200 dark:border-slate-400  relative flex items-end aspect-square rounded-3xl overflow-hidden dark:text-white text-gray-50 shadow-sm shadow-slate-700 ">
      <div className="absolute h-full w-full top-0 left-0 lg:group-hover:top-4 group-hover:top-2 lg:group-hover:p-4 group-hover:p-2 lggroup-hover:left-4 group-hover:left-2  duration-200 group-hover:h-1/2 group-hover:w-3/5">
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
      <div className="flex flex-col h-full lg:gap-4 gap-2 w-full duration-200 opacity-0 ease-in-out group-hover:opacity-100">
        <div className="h-3/5 w-full flex justify-end">
          <div className="flex w-1/4 flex-col lg:gap-4 gap-2">
            {project.github && <GithubButton githubUrl={project.github} />}
            <ShowProjectButton onClick={handleClick} />
          </div>
        </div>
        <div className="h-2/5">
          <h4 className="text-slate-800 customtitle xl:text-3xl md:text-xl text-lg lg:leading-tight leading-none dark:text-slate-100 font-bold mb-1">
            {project.name}
          </h4>

          <p className="lg:flex hidden customdescription text-slate-900 lg:text-xl lg:font-semibold md:text-sm dark:text-slate-200 mb-2 ">
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
