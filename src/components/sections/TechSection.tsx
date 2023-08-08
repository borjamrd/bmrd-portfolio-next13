import { FC } from "react";
import Card from "../ui/Card";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiAngular,
  SiTypescript,
  SiBootstrap,
  SiExpress,
  SiAmazonaws,
  SiNotion,
  SiAmazonec2,
  SiAmazons3,
  SiJira,
  SiConfluence,
} from "react-icons/si";
interface TechSectionProps {}

const TechSection: FC<TechSectionProps> = ({}) => {
  return (
    <Card
      variant={"red"}
      className="col-span-3 md:col-span-2 md:row-span-1 aspect-2/1 md:aspect-auto flex"
    >
      <div className="m-auto grid grid-cols-6 place-content-center text-2xl sm:text-4xl place-items-center sm:gap-5 gap-2 p-2">
        <SiHtml5 title="html" />
        <SiCss3 title="css" />
        <SiJavascript title="javascript" />
        <SiTypescript title="typescript" />
        <SiAngular title="angular" />
        <SiReact title="react" />
        <SiNextdotjs title="next" />
        <SiTailwindcss title="tailwind" />
        <SiBootstrap title="bootstrap" />
        <SiNodedotjs title="node" />
        <SiExpress title="express" />
        <SiMongodb title="mongodb" />
        <SiAmazonec2 title="amazon ec2" />
        <SiAmazons3 title="amazon s3" />
        <SiNotion title="notion" />
        <SiJira title="jira" />
        <SiConfluence title="confluence" />
        <SiGit title="git" />
      </div>
    </Card>
  );
};

export default TechSection;
