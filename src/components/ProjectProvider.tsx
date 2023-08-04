"use client";

import { Project } from "@/app/projects/page";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

export const ProjectContext = createContext<any>(null);
interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectProvider: FC<ProjectProviderProps> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
    setSelectedProject(selectedProject);
  }, [selectedProject]);
  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
