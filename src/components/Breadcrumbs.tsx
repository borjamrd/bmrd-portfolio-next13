import { useRouter } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FC } from "react";
import Link from "next/link";

interface BreadcrumbsProps {}

const NextBreadcrumbs: FC<BreadcrumbsProps> = ({}) => {
  const router = useRouter();

  let currentLink: any = "";
  console.log(location);

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = `/${crumb}`;
      return (
        <div className="ms-2 btn btn-xs btn-neutral" key={crumb}>
          <Link href={currentLink}>/ {crumb}</Link>
        </div>
      );
    });

  return (
    <div className="mx-auto flex max-w-full items-center px-6 py-2 rounded-lg lg:px-8 bg-slate-800">
      <button className="btn btn-xs" onClick={() => router.back()}>
        Atrás
      </button>
      {crumbs}
    </div>
  );
};

export default NextBreadcrumbs;
