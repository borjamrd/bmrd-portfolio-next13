import { FC, ReactNode } from "react";
import { BsPlusLg } from "react-icons/bs";

interface ShowProjectButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}
const ShowProjectButton: FC<ShowProjectButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rotate-45 group-hover:rotate-0 duration-200 aspect-square  flex  lg:rounded-2xl rounded-xl bg-slate-900 lg:p-2 p-1"
    >
      <BsPlusLg className="m-auto xl:text-4xl text-2xl"></BsPlusLg>
    </button>
  );
};

export default ShowProjectButton;
