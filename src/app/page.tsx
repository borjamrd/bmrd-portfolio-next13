import Card from "@/components/ui/Card";
import dynamic from "next/dynamic";
import { cardVariants } from "@/components/ui/Card";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import ToggleSection from "@/components/sections/ToggleSection";
import LinkedinSection from "@/components/sections/LinkedinSection";
import HeroSection from "@/components/sections/HeroSection";
import CvSection from "@/components/sections/CvSection";
import GithubSection from "@/components/sections/GithubSection";
import MailSection from "@/components/sections/MailSection";
import ProjectSection from "@/components/sections/ProjectSection";
import TechSection from "@/components/sections/TechSection";
import SpotifySection from "@/components/sections/SpotifySection";
import DiscordSection from "@/components/sections/DiscordSection";
import CourseNodeSection from "@/components/sections/CourseNodeSection";
import CourseAngularSection from "@/components/sections/CourseAngularSection";
import NotionSection from "@/components/sections/NotionSection";
import CodeSection from "@/components/sections/CodeSection";
import FormSection from "@/components/sections/FormSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col">
        <section className="h-full grid auto-rows-max grid-cols-3 gap-2 lg:grid-cols-5 md:gap-4 p-5 container">
          <HeroSection />
          <ToggleSection />
          <LinkedinSection />
          <CvSection />
          <GithubSection />
          <MailSection />
          <ProjectSection />
          <TechSection />
          <SpotifySection />
          <DiscordSection />
          <CourseNodeSection />
          <CourseAngularSection />
          <NotionSection />
          <CodeSection />
          <FormSection />
        </section>
      </div>
    </div>
  );
}
