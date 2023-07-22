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
        className="bg-gradient-to-br from bg-[#72A962]/80 to bg-[#3E853D] aspect-square flex flex-col justify-center items-center"
      >
        <Icons.NewTab />

        <div className="flex gap-2 flex-col">
          <div className="flex gap-3 text-2xl font-bold items-center">
            <Icons.Coin />{" "}
            <p>
              Node<br></br> advanced
            </p>
          </div>
          <p className="text-xl">Linkedin | 2023</p>
        </div>
      </Card>
    </Link>
  );
};

export default CourseNodeSection;
