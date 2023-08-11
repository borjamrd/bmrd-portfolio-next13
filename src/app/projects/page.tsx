import ErrorPage from "@/components/sections/ErrorPage";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LargeHeading from "@/components/ui/headings/LargeHeading";
import getProjects from "@/lib/getProjects";
import { Metadata } from "next";
import { useRouter } from "next/router";

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
  const data: any = null;
  const projects: Project[] = data?.projects;
  if (!data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <div className="flex lg:mt-20 mt-5 mb-3 lg:mb-10">
        <div className="mx-auto flex relative w-fit ">
          <LargeHeading className="mx-auto z-10">Projects & repos</LargeHeading>
          <span className="w-full inline-block absolute bg-gradient-to-r from-indigo-400 to-cyan-800 dark:bg-gradient-to-r dark:from-yellow-400 dark:to-orange-300 -bottom-2 -right-4 z-0  h-3"></span>
        </div>
      </div>
      {projects && <ProjectsSection projects={projects} />}
    </div>
  );
};

export default page;
