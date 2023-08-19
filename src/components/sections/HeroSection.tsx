/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";
import Card from "../ui/Card";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Typewriter } from "react-simple-typewriter";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <Card
      variant={"transparent"}
      className="relative md:col-span-4 row-span-2 col-span-3 aspect-auto"
    >
      <div className="relative h-full w-full flex">
        <p className="xl:text-5xl lg:text-4xl text-2xl text-slate-600 dark:text-slate-300  rounded-3xl font-semibold bg-opacity-10 lg:p-8 p-5">
          Hi 👋, Im Borja.{" "}
          <span className="text-slate-800 dark:text-yellow-300">
            Fullstack developer.
          </span>{" "}
          I'm constantly curious and love tinkering with things. Most of the
          time, I find ways to make them<br></br>
          <span className="text-3xl text-slate-800 dark:text-yellow-300 lg:text-5xl xl:text-6xl">
            <Typewriter
              words={["better.", "faster.", "prettier."]}
              loop={1}
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </p>
      </div>
      {/* <div className="h-auto w-screen absolute">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/2RoEGWy5S1OwjCxn/scene.splinecode" />
        </Suspense> *
      </div> */}
    </Card>
  );
};

export default HeroSection;
