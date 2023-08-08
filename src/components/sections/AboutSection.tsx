import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";
import Link from "next/link";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <Link href={"/about"} className="col-span-1 aspect-auto">
      <Card
        hover={"scale"}
        variant={"dark"}
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        <p className="lg:text-5xl text-base font-bold">+more</p>
        <p className="lg:flex text-xl hidden">about me</p>
      </Card>
    </Link>
  );
};

export default AboutSection;
