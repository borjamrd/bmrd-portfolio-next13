"use client";
/* eslint-disable react/no-unescaped-entities */
import LargeHeading from "@/components/ui/headings/LargeHeading";
import { FC, useState } from "react";

import AboutText from "@/components/ui/AboutText";
import Image from "next/image";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex flex-col items-center lg:mt-20 mt-5 mb-3 lg:mb-10">
      <div className="flex justify-center gap-3 items-center">
        <Image
          className="mb-5"
          alt="profile"
          src="/brmd-small.png"
          height={100}
          width={100}
        ></Image>
        <div className="mx-auto flex relative w-fit mb-8">
          <LargeHeading className="mx-auto z-10">About</LargeHeading>
          <span className="w-full inline-block absolute bg-gradient-to-r from-indigo-400 to-cyan-800 dark:bg-gradient-to-r dark:from-yellow-400 dark:to-orange-300 -bottom-2 -right-4 z-0  h-3"></span>
        </div>
      </div>

      <AboutText />
    </div>
  );
};

export default page;
