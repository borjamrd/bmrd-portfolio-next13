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
        variant={"default"}
        className="aspect-square flex flex-col justify-center items-center"
      >
        <Icons.DownLoad />
        CV
      </Card>
    </Link>
  );
};

export default CvSection;
