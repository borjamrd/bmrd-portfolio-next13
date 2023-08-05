"use client";

import { Project } from "@/app/projects/page";
import { FC, useContext, useEffect, useState } from "react";

import { ProjectContext } from "../ProjectProvider";
import SelectedProject from "../SelectedProject";
import ProjectCard from "./ProjectCard";
import Toast from "../ui/Toast";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  const { selectedProject, setSelectedProject } = useContext(ProjectContext);
  const [twoColumns, setTwoColumns] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setTwoColumns(true);
    } else {
      setTwoColumns(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProject]);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-4 gap-2">
        <div
          className={`grid grid-cols-2   ${
            twoColumns ? "two-columns" : ""
          } gap-2 lg:gap-4 ${
            twoColumns
              ? "w-full lg:w-1/2 lg:grid-cols-2"
              : "w-full lg:grid-cols-3"
          }`}
        >
          {projects?.map((project: Project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
        {selectedProject && (
          <div className="w-full lg:w-1/2 min-h-screen">
            <SelectedProject
              project={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          </div>
        )}
      </div>
      <Toast />
    </>
  );
};

export default ProjectsSection;
