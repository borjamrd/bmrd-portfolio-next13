import getProjects from "@/lib/getProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "text",
};

const page = async ({}) => {
  const projects = await getProjects();
  console.log(projects);
  return <div>projects works</div>;
};

export default page;
