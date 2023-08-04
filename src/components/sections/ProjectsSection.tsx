"use client";

import { Project } from "@/app/projects/page";
import { FC, useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { TfiClose } from "react-icons/tfi";
import { ProjectContext } from "../ProjectProvider";
import SelectedProject from "../SelectedProject";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  const { selectedProject, setSelectedProject } = useContext(ProjectContext);

  const [twoColumns, setTwoColumns] = useState(false);
  const toastOptions = {
    duration: 30000,
  };
  useEffect(() => {
    if (selectedProject) {
      console.log("selected project", selectedProject);
      setTwoColumns(true);
    } else {
      setTwoColumns(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProject]);
  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      toast.custom(
        <div className="relative bg-green-400 p-4 rounded-xl text-slate-900">
          <button
            className="absolute top-1 right-1 bg-transparent p-2"
            onClick={() => toast.dismiss()}
          >
            <TfiClose className="text-slate-900 dark:text-slate-100" />
          </button>
          <div>👋 hey buddy</div>
        </div>
      );
    }, 30000);
    return () => clearTimeout(toastTimeout);
  }, []);

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
      <Toaster position="bottom-right" toastOptions={toastOptions} />
    </>
  );
};

export default ProjectsSection;
