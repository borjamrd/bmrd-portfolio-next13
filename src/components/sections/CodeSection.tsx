import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";

interface CodeSectionProps {}

const CodeSection: FC<CodeSectionProps> = ({}) => {
  return (
    <Link
      href={"https://app.codesignal.com/profile/borja_m_mbj"}
      rel="noopener noreferrer"
      target="blank"
      className="col-span-1 md:col-span-2 aspect-auto"
    >
      <Card
        hover={"scale"}
        variant={"codeSignal"}
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        <p className="text-3xl font-bold">CodeSignal</p>
      </Card>
    </Link>
  );
};

export default CodeSection;
