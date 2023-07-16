import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";

interface NotionSectionProps {}

const NotionSection: FC<NotionSectionProps> = ({}) => {
  return (
    <Link
      href={
        "https://borjamruizdana.notion.site/Borja-Mu-oz-Ruiz-Dana-180822ff51f64b96a8158d959f1f1c72?pvs=4"
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
        Notion profile
      </Card>
    </Link>
  );
};

export default NotionSection;
