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
        variant={"default"}
        className="aspect-square flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        Nodejs avanzado
      </Card>
    </Link>
  );
};

export default CourseNodeSection;
