"use client";
import { FC, HtmlHTMLAttributes } from "react";
import Card from "../ui/Card";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

interface ToggleSectionProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const ThemeToggle = dynamic(
  () => {
    return import("@/components/ui/ThemeToggle");
  },
  { ssr: false }
);
const ToggleSection: FC<ToggleSectionProps> = ({ className }) => {
  return (
    <Card
      variant={"transparent"}
      className={cn(
        "aspect-square col-span-1 md:aspect-auto flex flex-col justify-center items-center lg:p-4 p-2",
        className
      )}
    >
      <ThemeToggle />
    </Card>
  );
};

export default ToggleSection;
