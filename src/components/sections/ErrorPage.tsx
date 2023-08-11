import { FC } from "react";
import Card from "../ui/Card";

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: FC<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div className="h-full w-full flex text-neutral-700 dark:text-neutral-200">
      <Card className="m-auto" variant={"transparent"}>
        <div className="flex flex-col p-10 items-center">
          <p className="text-9xl font-bold">{statusCode}</p>
          <p className="">No data available (yet)</p>
        </div>
      </Card>
    </div>
  );
};

export default ErrorPage;
