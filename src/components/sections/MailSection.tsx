import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";

interface MailSectionProps {}

const MailSection: FC<MailSectionProps> = ({}) => {
  return (
    <Link
      href={"mailto:borjamrd1@gmail.com?Subject=Contacto%web"}
      rel="noopener noreferrer"
      target="blank"
    >
      <Card
        hover={"scale"}
        variant={"default"}
        className="aspect-square flex flex-col justify-center items-center"
      >
        <Icons.NewTab />
        <Icons.Mail />
      </Card>
    </Link>
  );
};

export default MailSection;
