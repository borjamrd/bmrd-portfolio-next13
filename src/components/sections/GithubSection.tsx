import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";
import Image from "next/image";
import github from "./../../assets/giphy.gif";
import { SiGithub } from "react-icons/si";
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
        {/* <div className="h-full w-full absolute">
          <Image
            src={github}
            alt="Picture of the author"
            width={800}
            height={550}
            className="w-full h-full object-cover opacity-40"
            // blurDataURL="data:..."  // automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div> */}
        <Icons.NewTab />
      </Card>
    </Link>
  );
};

export default GithubSection;
