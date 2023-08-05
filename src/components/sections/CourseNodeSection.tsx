import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";

interface CourseNodeSectionProps {}

const CourseNodeSection: FC<CourseNodeSectionProps> = ({}) => {
  return (
    <Link
      href={
        "https://www.linkedin.com/learning/certificates/6aaa795755fd3df36bb2bf0d41dec910070d8618988c6fd74bbe78cadfd85fd3"
      }
      rel="noopener noreferrer"
      target="blank"
    >
      <Card
        hover={"scale"}
        variant={"nodejs"}
        className="bg-gradient-to-br relative from bg-[#72A962]/80 to bg-[#3E853D] aspect-square flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        <Icons.Diploma className="absolute lg:-top-5 lg:-left-5 -top-3 -left-3 lg:h-24 h-14 lg:w-24 w-14" />

        <div className="flex gap-2 flex-col lg:items-start items-center">
          <p className="lg:text-2xl text-base font-bold">
            Node<br></br> advanced
          </p>
          <p className="text-xl lg:inline-block hidden">Linkedin | 2023</p>
        </div>
      </Card>
    </Link>
  );
};

export default CourseNodeSection;
