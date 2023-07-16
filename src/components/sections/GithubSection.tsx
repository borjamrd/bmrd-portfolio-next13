import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";

interface GithubSectionProps {}

const GithubSection: FC<GithubSectionProps> = ({}) => {
  return (
    <Link
      href={"https://github.com/borjamrd"}
      rel="noopener noreferrer"
      target="blank"
      className="col-span-2 md:col-span-1"
    >
      <Card
        hover={"scale"}
        variant={"default"}
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        Github
      </Card>
    </Link>
  );
};

export default GithubSection;
