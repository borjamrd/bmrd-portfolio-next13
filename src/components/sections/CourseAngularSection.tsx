import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";

interface CourseAngularSectionProps {}

const CourseAngularSection: FC<CourseAngularSectionProps> = ({}) => {
  return (
    <Link
      href={
        "https://www.linkedin.com/learning/certificates/36a87feeec6ae4da53eaba1a5278049036c60af434ff0f6f343076ea6c1d5b3c"
      }
      rel="noopener noreferrer"
      target="blank"
    >
      <Card
        hover={"scale"}
        variant={"angular"}
        className="aspect-square relative flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        <Icons.Diploma className="absolute lg:-top-5 lg:-left-5 -top-3 -left-3 lg:h-24 h-14 lg:w-24 w-14" />
        <div className="flex gap-2 flex-col">
          <p className="lg:text-2xl text-base font-bold">
            Angular<br></br> advanced
          </p>
          <p className="text-xl lg:inline-block hidden">Linkedin | 2023</p>
        </div>
      </Card>
    </Link>
  );
};

export default CourseAngularSection;
