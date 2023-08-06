import { useRouter } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FC } from "react";
import Link from "next/link";
import ToggleSection from "./sections/ToggleSection";
import Card from "./ui/Card";
import Button from "./ui/buttons/Button";
import Badge from "./ui/badges/Badge";

export type BreadcrumbsProps = {};

const NextBreadcrumbs: FC<BreadcrumbsProps> = ({}) => {
  const router = useRouter();

  let currentLink: any = "";
  // const loc = location;
  // const crumbs = loc.pathname
  //   .split("/")
  //   .filter((crumb) => crumb !== "")
  //   .map((crumb) => {
  //     currentLink = `/${crumb}`;
  //     return (
  //       <Badge variant={"dark"} className="ms-2" key={crumb}>
  //         <Link href={currentLink}>/ {crumb}</Link>
  //       </Badge>
  //     );
  //   });

  return (
    <div className="flex gap-2 mb-10 sticky top-5 z-30">
      <Card
        variant={"transparent"}
        className="aspect-auto backdrop-blur-xl flex w-11/12 items-center px-6 py-2 lg:px-8"
      >
        <Button onClick={() => router.back()}>Atrás</Button>
        {/* {crumbs} */}
      </Card>
      <div className="w-1/12">
        <ToggleSection />
      </div>
    </div>
  );
};

export default NextBreadcrumbs;
