import { FC } from "react";
import Card from "../ui/Card";

interface TechSectionProps {}

const TechSection: FC<TechSectionProps> = ({}) => {
  return (
    <Card className="col-span-3 md:col-span-2 md:row-span-1 aspect-3/1 md:aspect-auto flex flex-col justify-center items-center">
      Tech
    </Card>
  );
};

export default TechSection;
