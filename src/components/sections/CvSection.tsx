import { FC } from "react";
import Card from "../ui/Card";
import Link from "next/link";
import { Icons } from "../ui/Icons";

interface CvSectionProps {}

const CvSection: FC<CvSectionProps> = ({}) => {
  return (
    <Link
      href={
        "https://drive.google.com/file/d/16B1mBLTP0-WZ8YJVndDhruRAibRNzhgb/view?usp=sharing"
      }
      rel="noopener noreferrer"
      target="blank"
    >
      <Card
        hover={"scale"}
        variant={"dark"}
        className="aspect-square flex flex-col justify-center items-center"
      >
        <Icons.DownLoad />
        <span className="hidden lg:display text-sm md:text-sm font-bold mt-7">
          DOWNLOAD MY
        </span>
        <span className="text-3xl md:text-6xl font-bold">CV</span>
      </Card>
    </Link>
  );
};

export default CvSection;
