"use client";

import { Project } from "@/app/projects/page";
import Image from "next/image";
import { FC } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  console.log(project);
  return (
    <div className="group border-2/1 border-slate-200 dark:border-slate-400 relative flex items-end aspect-square rounded-3xl overflow-hidden  cursor-pointer dark:text-white text-gray-50 shadow-xl">
      <div className="absolute h-full top-0 left-0 group-hover:top-4 group-hover:left-4 w-full duration-500 group-hover:h-56 group-hover:w-56">
        <Image
          className="object-cover rounded-3xl group-hover:rounded-2xl ease-in-out duration-500 group-hover:opacity-70"
          src={project.projectImage}
          fill={true}
          alt={project.subtitle}
        />
      </div>
      <div className="flex flex-col h-full w-full duration-500 opacity-0 group-hover:delay-200 ease-in-out group-hover:opacity-100 gap-4 p-2">
        <div className="h-56 p-2 flex justify-end gap-4">
          <div className="w-40 h-56 flex flex-col gap-4 ">
            <div className="aspect-square flex rounded-2xl bg-slate-900 p-2">
              <SiGithub className="m-auto text-4xl"></SiGithub>
            </div>
            <div className="aspect-square flex rounded-2xl bg-slate-900 p-2">
              <BsBoxArrowUpRight className="m-auto text-4xl"></BsBoxArrowUpRight>
            </div>
          </div>
        </div>
        <div className="h-44 p-2">
          <h4 className="text-slate-800 text-4xl dark:text-slate-100 font-bold mb-4">
            {project.name}
          </h4>
          <p className="text-slate-900 text-xl dark:text-slate-200 font-semibold">
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
