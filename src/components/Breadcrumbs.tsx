import { useRouter } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FC } from "react";
import Link from "next/link";
import ToggleSection from "./sections/ToggleSection";
import Card from "./ui/Card";

interface BreadcrumbsProps {}

const NextBreadcrumbs: FC<BreadcrumbsProps> = ({}) => {
  const router = useRouter();

  // let currentLink: any = "";
  // const loc = location;
  // const crumbs = loc.pathname
  //   .split("/")
  //   .filter((crumb) => crumb !== "")
  //   .map((crumb) => {
  //     currentLink = `/${crumb}`;
  //     return (
  //       <div className="ms-2 btn btn-xs btn-neutral" key={crumb}>
  //         <Link href={currentLink}>/ {crumb}</Link>
  //       </div>
  //     );
  //   });

  return (
    <div className="flex gap-2 mb-10">
      <Card
        variant={"dark"}
        className="aspect-auto flex w-11/12 items-center px-6 py-2 lg:px-8"
      >
        <button className="btn btn-xs" onClick={() => router.back()}>
          Atrás
        </button>
        {/* {crumbs} */}
      </Card>
      <div className="w-1/12">
        <ToggleSection />
      </div>
    </div>
  );
};

export default NextBreadcrumbs;
