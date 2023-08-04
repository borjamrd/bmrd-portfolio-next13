"use client";
import React, { Suspense, FC } from "react";
import Card from "../ui/Card";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <Card
      variant={"transparent"}
      className="relative md:col-span-4 row-span-2 col-span-3 aspect-auto"
    >
      <div className="h-full w-full flex justify-end items-end">
        <p className="xl:text-5xl lg:text-3xl text-2xl text-slate-600 dark:text-slate-300  rounded-3xl font-semibold bg-opacity-10 lg:p-10 p-5">
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
    </Card>
  );
};

export default HeroSection;
