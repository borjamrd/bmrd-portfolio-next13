import { FC, ReactNode } from "react";
import { BsPlusLg } from "react-icons/bs";

interface ShowProjectButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}
const ShowProjectButton: FC<ShowProjectButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rotate-45 group-hover:rotate-0 duration-200 aspect-square  flex  lg:rounded-2xl rounded-xl  bg-gradient-to-br  from-rose-800 to-orange-300 hover:bg:gradient-to-br hover:from-rose-700 hover:to-orange-200 lg:p-2 p-1"
    >
      <BsPlusLg className="m-auto xl:text-4xl text-2xl"></BsPlusLg>
    </button>
  );
};

export default ShowProjectButton;
