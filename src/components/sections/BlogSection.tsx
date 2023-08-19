import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";
import { BsJournalCode } from "react-icons/bs";
import Image from "next/image";

interface BlogSectionProps {}

const BlogSection: FC<BlogSectionProps> = ({}) => {
  return (
    <Link
      href={"https://blog.bmrd.dev/"}
      rel="noopener noreferrer"
      target="blank"
      className="col-span-2 row-span-1 aspect-auto"
    >
      <Card
        hover={"scale"}
        variant={"transparent"}
        className="h-full w-full flex flex-col justify-center items-center lg:py-20"
      >
        <Icons.NewTab />
        <div className="flex items-center gap-2">
          <BsJournalCode className="text-6xl" />
          <div>
            <p className="lg:text-5xl text-base font-bold">BLOG</p>
            <p className="lg:flex text-xl hidden">blog.bmrd.dev</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogSection;
