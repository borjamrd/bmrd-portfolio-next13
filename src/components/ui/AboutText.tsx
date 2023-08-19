"use client";

import { FC, useEffect, useState } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { SlLocationPin, SlRocket, SlChart } from "react-icons/sl";
import { SiVolkswagen } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";

interface AboutTextProps {}

interface AboutItems {
  icon: any;
  text: string;
  date: string;
}

const AboutText = ({}) => {
  const aboutItems: AboutItems[] = [
    {
      icon: <SlLocationPin />,
      text: "Happily married with my mujercita and living in Madrid",
      date: "12/23",
    },
    {
      icon: <SiVolkswagen />,
      text: "Currently working as fullstack developer at Volkswagen Retail Group Spain ",
      date: "04/22",
    },
    {
      icon: <FaCodeBranch />,
      text: "I finished a full stack developer bootcamp at The Bridge | Digital Talent Accelerator",
      date: "06/22",
    },
    {
      icon: <SlChart />,
      text: "I left my work at Europa Press after 6 years in financial and legal departments",
      date: "03/22",
    },
    {
      icon: <SlRocket />,
      text: "Founded Mushing Marketing, a digital marketing agency.",
      date: "02/20",
    },
    {
      icon: <PiStudentFill />,
      text: "I finished my marketing degree in english at Rey Juan Carlos University in Madrid",
      date: "07/19",
    },
  ];
  const [showDivs, setShowDivs] = useState<any[]>([]);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const text: string =
    "I'm glad you're here. It took me over 10 years to realize that I would work as a developer. My initial foray into programming began with Visual Basic for creating Excel macros. After working with WordPress and visual builders like Elementor, I finally grasped the importance of studying JavaScript in order to tackle more intricate projects.";

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setShowDivs((prevShowDivs: any) => {
          const nextIndex = prevShowDivs.length;
          if (nextIndex >= aboutItems.length) {
            clearInterval(interval);
            return prevShowDivs;
          }
          return [...prevShowDivs, nextIndex];
        });
      }, 2000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }, 3000);
  }, []);

  return (
    <div className="max-w-3xl container ">
      <p className="mb-10">
        {" "}
        <Typewriter words={[text]} loop={1} typeSpeed={10} />
        <Cursor />
      </p>
      <div className="flex flex-col-reverse gap-4">
        {aboutItems.reverse().map((item, index) => (
          <div
            className={`elemento flex gap-4 items-start backdrop-blur-xs bg-gradient-to-r  from-slate-500/10 from-60% to-cyan-200/10 dark:from-to-cyan-200/10 dark:to-slate-600/10 p-4 rounded-xl ${
              showDivs.includes(index) ? "visible" : ""
            }`}
            key={index}
          >
            <span className="my-2 md:my-auto text-slate-700 dark:text-slate-300 lg:text-base sm:text-2xl text-3xl">
              {item.icon}
            </span>
            <span>
              {showDivs.includes(index) && (
                <Typewriter words={[item.text]} typeSpeed={20} loop={1} />
              )}
            </span>
            <div className="ms-auto flex items-center gap-1 text-slate-600  dark:text-slate-600">
              <BsCalendar3 className="lg:text-base" />
              <span className="text-sm">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutText;
