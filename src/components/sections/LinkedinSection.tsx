import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";

interface LinkedinSectionProps {}

const LinkedinSection: FC<LinkedinSectionProps> = ({}) => {
  return (
    <Link
      href={"https://www.linkedin.com/in/borjamunozruiz/"}
      rel="noopener noreferrer"
      target="blank"
    >
      <Card className="aspect-square" variant={"linkedin"} hover={"scale"}>
        <Icons.NewTab />
        <Icons.Linkedin />
      </Card>
    </Link>
  );
};

export default LinkedinSection;
