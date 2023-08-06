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
      className="-rotate-45 active:border-2 active:border-slate-900 group-hover:rotate-0 duration-200 aspect-square flex lg:rounded-2xl rounded-xl bg-gradient-to-br from-rose-800 to-orange-300 hover:bg:gradient-to-br hover:from-rose-600 hover:to-orange-300  lg:p-2 p-1"
    >
      <SiGithub className="m-auto xl:text-4xl text-2xl"></SiGithub>
    </Link>
  );
};

export default GithubButton;
