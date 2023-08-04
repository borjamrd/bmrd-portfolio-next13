import { FC } from "react";
import { SiGithub } from "react-icons/si";

interface GithubButtonProps {}

const GithubButton: FC<GithubButtonProps> = ({}) => {
  return (
    <button className="-rotate-45 group-hover:rotate-0 duration-200 aspect-square flex rounded-2xl  bg-slate-900 p-2">
      <SiGithub className="m-auto xl:text-3xl md:text-2xl"></SiGithub>
    </button>
  );
};

export default GithubButton;
