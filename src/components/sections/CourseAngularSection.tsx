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
        variant={"default"}
        className="aspect-square flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        Angular avanzado
      </Card>
    </Link>
  );
};

export default CourseAngularSection;
