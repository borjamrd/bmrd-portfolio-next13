import { FC } from "react";
import Card from "../ui/Card";
import { Icons } from "../ui/Icons";
import ErrorPage from "./ErrorPage";
import getDiscordStatus from "@/lib/getDiscordStatus";

interface DiscordSectionProps {}

const DiscordSection: FC<DiscordSectionProps> = async ({}) => {
  const data: any = await getDiscordStatus();
  console.log(data);
  if (!data) {
    return <ErrorPage statusCode={404} />;
  }

  const activities = data?.activities?.filter(
    (activity: any) => activity?.type == 0
  );

  const activity = Array.isArray(activities) ? activities[0] : activities;
  const textActivity = activity?.name;
  const detailsTitle = activity?.assets?.small_text;
  const details = activity?.details;

  return (
    <Card className="relative col-span-2 md:row-span-1  aspect-2/1 flex flex-col justify-center items-center">
      {activity ? (
        <>
          <div className="transition ease-in-out bg-discord duration-300 hover:opacity-0 absolute h-full w-full flex justify-center items-center">
            <div className="flex gap-1 md:gap-2 justify-center items-center text-md md:text-2xl lg:text-4xl font-bold">
              <Icons.Discord />{" "}
              {textActivity ? <p>{textActivity}</p> : <p>Offline</p>}
            </div>
          </div>

          <div className="p-6 flex flex-col gap-1">
            {detailsTitle && (
              <p className="lg:text-xl font-semibold">{detailsTitle}</p>
            )}
            {details && <p className="lg:flex hidden">{details}</p>}
          </div>
        </>
      ) : (
        <div className="transition  bg-discord duration-300 absolute h-full w-full flex justify-center items-center">
          <div className="flex gap-1 md:gap-2 justify-center items-center text-md md:text-2xl lg:text-4xl font-bold">
            <Icons.Discord />
            <p>Offline</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default DiscordSection;
