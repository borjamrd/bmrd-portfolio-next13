import { FC, ReactNode } from "react";
import { BsPlusLg } from "react-icons/bs";

interface ShowProjectButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}
const ShowProjectButton: FC<ShowProjectButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rotate-45 group-hover:rotate-0 duration-200 aspect-square  flex rounded-2xl bg-slate-900 p-2"
    >
      <BsPlusLg className="m-auto xl:text-3xl md:text-2xl"></BsPlusLg>
    </button>
  );
};

export default ShowProjectButton;
