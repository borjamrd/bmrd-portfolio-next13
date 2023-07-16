import { FC } from "react";
import Card from "../ui/Card";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <Card
      variant={"secondary"}
      className="md:col-span-4 row-span-3 col-span-3 aspect-4/3  lg:aspect-auto"
    >
      <span>MAIN DASHBOARD</span>
    </Card>
  );
};

export default HeroSection;
