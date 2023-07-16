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
      className="col-span-3 md:col-span-2 aspect-3/1 md:aspect-auto"
    >
      <Card
        hover={"scale"}
        variant={"default"}
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        CodeSignal
      </Card>
    </Link>
  );
};

export default CodeSection;
