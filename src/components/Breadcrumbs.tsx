"use client";
import { useRouter } from "next/router";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FC } from "react";

interface BreadcrumbsProps {}

const NextBreadcrumbs: FC<BreadcrumbsProps> = ({}) => {
  return <Breadcrumbs aria-label="breadcrumb" />;
};

export default NextBreadcrumbs;
