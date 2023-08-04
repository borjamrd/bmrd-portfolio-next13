import { Project } from "@/app/projects/page";
import Image from "next/image";
import { FC } from "react";
import Card from "./ui/Card";
import { TfiClose } from "react-icons/tfi";
import Badge from "./ui/badges/Badge";
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
      <div className="mb-10">
        <p className="text-slate-800 dark:text-slate-100">
          {project.full_description}
        </p>
      </div>
      <div className="relative aspect-2/1 mb-10">
        <Image
          className="object-cover rounded-2xl"
          src={project.projectImage}
          fill={true}
          alt={project.subtitle}
        />
      </div>
    </Card>
  );
};

export default SelectedProject;
