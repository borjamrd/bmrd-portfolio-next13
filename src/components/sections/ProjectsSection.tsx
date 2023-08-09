"use client";

import { Project } from "@/app/projects/page";
import { FC, useContext, useEffect, useState } from "react";

import { ProjectContext } from "../ProjectProvider";
import SelectedProject from "../SelectedProject";
import { Input } from "../ui/Input";
import Toast from "../ui/Toast";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  const { selectedProject, setSelectedProject } = useContext(ProjectContext);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const [twoColumns, setTwoColumns] = useState(false);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setProjectTags();
  }, []);

  const setProjectTags = () => {
    const alltags: any[] = [];
    projects.forEach((project) => {
      alltags.push(project.tags);
    });
    const tags: any[] = [...new Set(alltags.flat())];
    setTags(tags);
  };

  useEffect(() => {
    if (selectedProject) {
      setTwoColumns(true);
    } else {
      setTwoColumns(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProject]);

  const handleChange = (e: any) => {
    let searchedString: string = e.target.value.toLowerCase();

    const filterByName = (project: Project) =>
      project.name.toLowerCase().includes(searchedString);

    const filterByTag = (project: Project) =>
      project.tags.some((tag) => tag.toLowerCase().includes(searchedString));

    let filtered = projects.filter(
      (project) => filterByName(project) || filterByTag(project)
    );

    setFilteredProjects(filtered);
  };

  return (
    <>
      <div className="p-4 flex justify-center items-center mb-4 gap-4">
        <Input
          onChange={(e) => handleChange(e)}
          placeholder="Search by name or technology"
          className="lg:w-1/2 w-full text-center text-slate-900 dark:text-slate-100"
        ></Input>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-4 gap-2">
        <div
          className={`auto-rows-max grid grid-cols-2   ${
            twoColumns ? "two-columns" : ""
          } gap-2 lg:gap-4 ${
            twoColumns
              ? "w-full lg:w-1/2 lg:grid-cols-2"
              : "w-full lg:grid-cols-3"
          }`}
        >
          {filteredProjects?.map((project: Project) => (
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
      {filteredProjects.length === 0 && (
        <div className="mt-4 text-center text-2xl text-slate-500">
          No projects founded
        </div>
      )}
      <Toast />
    </>
  );
};

export default ProjectsSection;
