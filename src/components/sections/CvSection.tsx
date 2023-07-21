import { FC } from "react";
import Card from "../ui/Card";
import Link from "next/link";
import { Icons } from "../ui/Icons";

interface CvSectionProps {}

const CvSection: FC<CvSectionProps> = ({}) => {
  return (
    <Link href={"/cv"} rel="noopener noreferrer" target="blank">
      <Card
        hover={"scale"}
        variant={"intense"}
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
