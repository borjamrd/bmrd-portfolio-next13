import Link from "next/link";
import { FC } from "react";
import { SiGithub } from "react-icons/si";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";
interface GithubSectionProps {}

const GithubSection: FC<GithubSectionProps> = ({}) => {
  return (
    <Link
      href={"https://github.com/borjamrd"}
      rel="noopener noreferrer"
      target="blank"
      className="col-span-1 aspect-auto md:col-span-1 lg:aspect-square"
    >
      <Card
        hover={"scale"}
        variant={"dark"}
        className="h-full w-full  flex flex-col justify-center items-center"
      >
        <div className="h-full w-full flex justify-center items-center">
          <SiGithub className="m-auto lg:text-8xl md:text-6xl text-4xl"></SiGithub>
        </div>
        <Icons.NewTab />
      </Card>
    </Link>
  );
};

export default GithubSection;
