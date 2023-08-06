import { Project } from "@/app/projects/page";
import Image from "next/image";
import { FC } from "react";
import Card from "./ui/Card";
import { TfiClose } from "react-icons/tfi";
import Badge from "./ui/badges/Badge";
import Link from "next/link";
import { BsBoxArrowInUpRight, BsEye } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AiFillEye } from "react-icons/ai";

interface SelectedProjectProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  project: Project;
  setSelectedProject: any;
}

const SelectedProject: FC<SelectedProjectProps> = ({
  project,
  setSelectedProject,
}) => {
  return (
    <Card className="p-4 sticky top-[22%]" variant={"transparent"}>
      <button
        onClick={() => {
          setSelectedProject(null);
        }}
        className="absolute top-4 right-4  bg-transparent"
      >
        <TfiClose className="text-slate-900 dark:text-slate-100" />
      </button>
      <h4 className="text-slate-800 lg:text-3xl md:text-2xl dark:text-slate-100 font-bold mb-2">
        {project.name}
      </h4>
      <div className="flex gap-1 flex-wrap mb-4">
        {project.tags.map((tag: any) => {
          return (
            <Badge variant={"default"} size={"xs"} key={tag}>
              {tag}
            </Badge>
          );
        })}
      </div>
      <div className="mb-7">
        <p className="text-slate-800 dark:text-slate-100">
          {project.full_description}
        </p>
      </div>
      <div className="relative aspect-2/1 mb-7">
        <Image
          className="object-cover rounded-xl"
          src={project.projectImage}
          fill={true}
          priority={false}
          sizes="(min-width: 808px) 50vw, 100vw"
          alt={project.subtitle}
        />
      </div>
      <div className="flex flex-col gap-2">
        {project.github && (
          <div className="flex flex-col">
            <span className="items-center gap-1 flex text-nowrap text-xl text-blue-900 dark:text-yellow-300  font-semibold">
              {" "}
              <SiGithub /> Github
            </span>

            <Link
              className="flex lg:text-base text-sm flex-wrap gap-2 hover:underline underline-offset-2 items-center text-slate-900 dark:text-slate-100"
              href={project.github}
              target="_blank"
            >
              {project.github} <BsBoxArrowInUpRight />
            </Link>
          </div>
        )}
        {project.urlProject && (
          <div className="flex flex-col">
            <span className="items-center gap-1 flex text-nowrap text-xl text-blue-900 dark:text-yellow-300 font-semibold">
              {" "}
              <AiFillEye />
              Full project
            </span>
            <Link
              className="flex lg:text-base text-sm flex-wrap gap-2 hover:underline underline-offset-2 items-center text-slate-900 dark:text-slate-100"
              href={project.urlProject}
              target="_blank"
            >
              {project.urlProject} <BsBoxArrowInUpRight />
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SelectedProject;
