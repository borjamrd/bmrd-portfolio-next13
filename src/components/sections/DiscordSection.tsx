import { FC } from "react";
import Card from "../ui/Card";

interface DiscordSectionProps {}

const DiscordSection: FC<DiscordSectionProps> = ({}) => {
  return (
    <Card className="aspect-square flex flex-col justify-center items-center">
      Discord
    </Card>
  );
};

export default DiscordSection;
