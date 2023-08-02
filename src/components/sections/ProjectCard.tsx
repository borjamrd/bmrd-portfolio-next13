"use client";

import { Project } from "@/app/projects/page";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  console.log(project);
  return (
    <div className="rounded-lg shadow-sm bg-slate-900">
      <Image
        src={project.projectImage}
        width={500}
        height={500}
        alt={project.subtitle}
      />
    </div>
  );
};

export default ProjectCard;
