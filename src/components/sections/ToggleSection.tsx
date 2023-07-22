"use client";
import { FC } from "react";
import Card from "../ui/Card";
import dynamic from "next/dynamic";

interface ToggleSectionProps {}

const ThemeToggle = dynamic(
  () => {
    return import("@/components/ui/ThemeToggle");
  },
  { ssr: false }
);
const ToggleSection: FC<ToggleSectionProps> = ({}) => {
  return (
    <Card
      variant={"dark"}
      className="aspect-square col-span-1 md:aspect-auto flex flex-col justify-center items-center p-4"
    >
      <ThemeToggle />
    </Card>
  );
};

export default ToggleSection;
