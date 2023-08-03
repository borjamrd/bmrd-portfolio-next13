import ProjectCard from "@/components/sections/ProjectCard";
import LargeHeading from "@/components/ui/headings/LargeHeading";
import getProjects from "@/lib/getProjects";
import { Metadata } from "next";
import Image from "next/image";

export interface Project {
  _id: string;
  name: "Similarity API";
  urlProject: string;
  tags: string[];
  subtitle: string;
  full_description: string;
  projectImage: string;
  github: string;
  createdAt: string;
  __v: number;
}
export const metadata: Metadata = {
  title: "Projects",
  description: "text",
};

const page = async ({}) => {
  const data = await getProjects();
  const projects: Project[] = data.projects;
  console.log("TEST", projects);
  return (
    <div>
      <LargeHeading className="mt-20 mb-10">Projects</LargeHeading>
      <div className="grid grid-cols-3 gap-4">
        {projects?.map((project: Project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default page;
