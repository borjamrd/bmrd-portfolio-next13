"use client";
import React, { Suspense, FC } from "react";
import Card from "../ui/Card";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="relative md:col-span-4 row-span-2 col-span-3 aspect-4/3  lg:aspect-auto">
      <div className="h-full w-full flex justify-end items-end">
        <p className="text-6xl text-slate-600 dark:text-slate-300  rounded-3xl font-semibold bg-opacity-10 p-10">
          Hi 👋, Im Borja.{" "}
          <span className="text-slate-800 dark:text-yellow-300">
            Fullstack developer.
          </span>{" "}
          Restless. I like fiddling with things, and most of the time I improve
          them.
        </p>
      </div>
      {/* <div className="h-auto w-screen absolute">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/2RoEGWy5S1OwjCxn/scene.splinecode" />
        </Suspense> *
      </div> */}
    </div>
  );
};

export default HeroSection;
