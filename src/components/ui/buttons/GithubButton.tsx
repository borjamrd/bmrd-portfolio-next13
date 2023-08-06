import Link from "next/link";
import { FC } from "react";
import { SiGithub } from "react-icons/si";

interface GithubButtonProps {
  githubUrl: string;
}

const GithubButton: FC<GithubButtonProps> = ({ githubUrl }) => {
  return (
    <Link
      href={githubUrl}
      target="_blank"
      className="-rotate-45 group-hover:rotate-0 duration-200 aspect-square flex lg:rounded-2xl rounded-xl  bg-slate-900 lg:p-2 p-1"
    >
      <SiGithub className="m-auto xl:text-4xl text-2xl"></SiGithub>
    </Link>
  );
};

export default GithubButton;
