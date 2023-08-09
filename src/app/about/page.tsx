/* eslint-disable react/no-unescaped-entities */
import LargeHeading from "@/components/ui/headings/LargeHeading";
import { FC } from "react";
import { SlLocationPin, SlRocket, SlChart } from "react-icons/sl";
import { SiVolkswagen } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

interface pageProps {}

interface AboutItems {
  icon: any;
  text: string;
}

const page: FC<pageProps> = ({}) => {
  const aboutItems: AboutItems[] = [
    {
      icon: <SlLocationPin className="sm:text-base text-3xl" />,
      text: "Happily married with my mujercita and living in Madrid",
    },
    {
      icon: <SiVolkswagen className="sm:text-base text-3xl" />,
      text: "Currently working as fullstack developer at Volkswagen Retail Group Spain ",
    },
    {
      icon: <FaCodeBranch className="sm:text-base text-3xl" />,
      text: "I finished a full stack developer bootcamp at The Bridge | Digital Talent Accelerator",
    },
    {
      icon: <SlRocket className="sm:text-base text-3xl" />,
      text: "Founded Mushing Marketing, a digital marketing agency.",
    },
    {
      icon: <PiStudentFill className="sm:text-base text-3xl" />,
      text: "I finished my marketing degree in english at Rey Juan Carlos University in Madrid",
    },
    {
      icon: <SlChart className="sm:text-base text-3xl" />,
      text: "I left my work at Europa Press after 6 years in financial and legal departments",
    },
  ];
  return (
    <div className="flex flex-col items-center lg:mt-20 mt-5 mb-3 lg:mb-10">
      <div className="mx-auto flex relative w-fit mb-8">
        <LargeHeading className="mx-auto z-10">About</LargeHeading>
        <span className="w-full inline-block absolute bg-gradient-to-r from-indigo-400 to-cyan-800 dark:bg-gradient-to-r dark:from-yellow-400 dark:to-orange-300 -bottom-2 -right-4 z-0  h-3"></span>
      </div>
      <div className="max-w-3xl container ">
        <p className="">
          I'm glad you're here. It took me over 10 years to realize that I would
          work as a developer. My initial foray into programming began with
          Visual Basic for creating Excel macros. After working with WordPress
          and visual builders like Elementor, I finally grasped the importance
          of studying JavaScript in order to tackle more intricate projects{" "}
        </p>
        <div className="mt-16 flex flex-col gap-4">
          {aboutItems.map((item, index) => (
            <div
              className="flex gap-4 items-center backdrop-blur-xs bg-gradient-to-r  from-slate-500/10 from-60% to-cyan-200/10 dark:from-to-cyan-200/10 dark:to-slate-600/10 p-4 rounded-xl"
              key={index}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
