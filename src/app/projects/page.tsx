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
      <div className="flex lg:mt-20 mt-5 mb-3 lg:mb-10">
        <LargeHeading className="mx-auto">Projects & repos</LargeHeading>
      </div>
      {projects && <ProjectsSection projects={projects} />}
    </div>
  );
};

export default page;
