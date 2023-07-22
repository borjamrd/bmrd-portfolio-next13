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
        className="aspect-square flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        <div className="flex gap-2 flex-col">
          <div className="flex gap-3 text-2xl font-bold items-center">
            <Icons.Coin />{" "}
            <p>
              Angular<br></br> advanced
            </p>
          </div>
          <p className="text-xl">Linkedin | 2023</p>
        </div>
      </Card>
    </Link>
  );
};

export default CourseAngularSection;
