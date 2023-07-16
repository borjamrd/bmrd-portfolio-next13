import Card from "@/components/ui/Card";
import dynamic from "next/dynamic";
import { cardVariants } from "@/components/ui/Card";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

// const ThemeToggle = dynamic(
//   () => {
//     return import("@/components/ui/ThemeToggle");
//   },
//   { ssr: false }
// );
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col">
        <section className="h-full grid auto-rows-max grid-cols-3 gap-2 lg:grid-cols-5 md:gap-4 p-5 container">
          <Card
            variant={"secondary"}
            className="md:col-span-4 row-span-3 col-span-3 aspect-4/3  lg:aspect-auto"
          >
            <span>MAIN DASHBOARD</span>
          </Card>
          <Card className="aspect-square col-span-1 md:aspect-auto flex flex-col justify-center items-center p-4">
            <span>themetoggle</span>
            {/* <ThemeToggle /> */}
          </Card>
          <Link
            href={"https://www.linkedin.com/in/borjamunozruiz/"}
            rel="noopener noreferrer"
            target="blank"
          >
            <Card
              className="aspect-square"
              variant={"linkedin"}
              hover={"scale"}
            >
              <Icons.NewTab />
              <Icons.Linkedin />
            </Card>
          </Link>

          <Link href={"/cv"} rel="noopener noreferrer" target="blank">
            <Card
              hover={"scale"}
              variant={"default"}
              className="aspect-square flex flex-col justify-center items-center"
            >
              <Icons.DownLoad />
              CV
            </Card>
          </Link>
          <Link
            href={"https://github.com/borjamrd"}
            rel="noopener noreferrer"
            target="blank"
            className="col-span-2 md:col-span-1"
          >
            <Card
              hover={"scale"}
              variant={"default"}
              className="h-full w-full flex flex-col justify-center items-center"
            >
              <Icons.NewTab />
              Github
            </Card>
          </Link>
          <Link
            href={"mailto:borjamrd1@gmail.com?Subject=Contacto%web"}
            rel="noopener noreferrer"
            target="blank"
          >
            <Card
              hover={"scale"}
              variant={"default"}
              className="aspect-square flex flex-col justify-center items-center"
            >
              <Icons.NewTab />
              Mail
            </Card>
          </Link>

          <Link
            className="relative rounded-3xl row-span-1 col-span-3 aspect-3/1 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-500 ease-in-out"
            href={"/projects"}
            rel="noopener noreferrer"
          >
            <Card className="h-full w-full flex flex-col justify-center items-center">
              <Icons.NewTab />
              Projects
            </Card>
          </Link>
          <Card className="col-span-3 md:col-span-2 md:row-span-1 aspect-3/1 md:aspect-auto flex flex-col justify-center items-center">
            Tech
          </Card>
          <Card className="col-span-2 md:row-span-1 aspect-auto flex flex-col justify-center items-center">
            spoty
          </Card>
          <Card className="aspect-square flex flex-col justify-center items-center">
            Discord
          </Card>
          <Link
            href={
              "https://www.linkedin.com/learning/certificates/6aaa795755fd3df36bb2bf0d41dec910070d8618988c6fd74bbe78cadfd85fd3"
            }
            rel="noopener noreferrer"
            target="blank"
          >
            <Card
              hover={"scale"}
              variant={"default"}
              className="aspect-square flex flex-col justify-center items-center"
            >
              <Icons.NewTab />
              Nodejs avanzado
            </Card>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/learning/certificates/36a87feeec6ae4da53eaba1a5278049036c60af434ff0f6f343076ea6c1d5b3c"
            }
            rel="noopener noreferrer"
            target="blank"
          >
            <Card
              hover={"scale"}
              variant={"default"}
              className="aspect-square flex flex-col justify-center items-center"
            >
              <Icons.NewTab />
              Angular avanzado
            </Card>
          </Link>
          <Link
            href={
              "https://borjamruizdana.notion.site/Borja-Mu-oz-Ruiz-Dana-180822ff51f64b96a8158d959f1f1c72?pvs=4"
            }
            rel="noopener noreferrer"
            target="blank"
          >
            <Card
              hover={"scale"}
              variant={"default"}
              className="aspect-square flex flex-col justify-center items-center"
            >
              <Icons.NewTab />
              Notion profile
            </Card>
          </Link>
          <Link
            href={"https://app.codesignal.com/profile/borja_m_mbj"}
            rel="noopener noreferrer"
            target="blank"
            className="col-span-3 md:col-span-2 aspect-3/1 md:aspect-auto"
          >
            <Card
              hover={"scale"}
              variant={"default"}
              className="h-full w-full flex flex-col justify-center items-center"
            >
              <Icons.NewTab />
              CodeSignal
            </Card>
          </Link>
          <Card className="col-span-3 md:col-span-5 md:row-span-2 aspect-3/1 lg:aspect-5/1 flex flex-col justify-center items-center">
            <span>Form</span>
          </Card>
        </section>
      </div>
    </div>
  );
}
