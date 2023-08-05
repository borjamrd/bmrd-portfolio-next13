import ProjectsSection from "@/components/sections/ProjectsSection";
import LargeHeading from "@/components/ui/headings/LargeHeading";
import getProjects from "@/lib/getProjects";
import { Metadata } from "next";

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
  const data: any = await getProjects();
  const projects: Project[] = data?.projects;

  return (
    <div>
      <div className="flex mt-20 mb-10">
        <LargeHeading className="mx-auto">Projects</LargeHeading>
      </div>

      <ProjectsSection projects={projects} />
    </div>
  );
};

export default page;
