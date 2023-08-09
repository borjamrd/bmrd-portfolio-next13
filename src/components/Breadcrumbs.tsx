"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import ToggleSection from "./sections/ToggleSection";
import Card from "./ui/Card";
import Badge from "./ui/badges/Badge";
import { BsChevronRight } from "react-icons/bs";
export type BreadcrumbsProps = {};

const NextBreadcrumbs: FC<BreadcrumbsProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();

  let currentLink: any = "";

  const crumbs: any = pathname
    ?.split("/")
    .filter((crumb: any) => crumb !== "")
    .map((crumb, i) => {
      currentLink = `/${crumb}`;
      return (
        <>
          <BsChevronRight key={i} />
          <Badge
            // className="mx-1  dark:bg-slate-800 text-slate-100 bg-cyan-900/50"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
            key={i}
          >
            <Link href={currentLink}>
              {" "}
              {crumb?.charAt(0).toUpperCase() + crumb?.slice(1)}
            </Link>
          </Badge>
        </>
      );
    });

  return (
    <div className="flex gap-2 mb-10 sticky top-5 z-30">
      <Card
        variant={"default"}
        className="aspect-auto backdrop-blur-xl flex w-11/12 items-center px-6 py-2 lg:px-8"
      >
        <Badge
          // className="mx-1 dark:bg-slate-800 text-slate-100 bg-cyan-900/50"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
        >
          <Link href={"/"}>Home</Link>
        </Badge>
        {crumbs}
      </Card>

      <ToggleSection />
    </div>
  );
};

export default NextBreadcrumbs;
