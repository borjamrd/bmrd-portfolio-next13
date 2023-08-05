import CodeSection from "@/components/sections/CodeSection";
import CourseAngularSection from "@/components/sections/CourseAngularSection";
import CourseNodeSection from "@/components/sections/CourseNodeSection";
import CvSection from "@/components/sections/CvSection";
import DiscordSection from "@/components/sections/DiscordSection";
import FormSection from "@/components/sections/FormSection";
import GithubSection from "@/components/sections/GithubSection";
import HeroSection from "@/components/sections/HeroSection";
import LinkedinSection from "@/components/sections/LinkedinSection";
import MailSection from "@/components/sections/MailSection";
import NotionSection from "@/components/sections/NotionSection";
import ProjectSection from "@/components/sections/ProjectSection";
import TechSection from "@/components/sections/TechSection";
import ToggleSection from "@/components/sections/ToggleSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col">
        <section className="h-full grid auto-rows-max grid-cols-3 gap-2 lg:grid-cols-5 md:gap-4 xl:py-5 py-4 container">
          <HeroSection />
          {/* <ToggleSection /> */}
          <LinkedinSection />
          <CvSection />
          <GithubSection />
          <MailSection />
          <ProjectSection />
          <TechSection />
          {/* <SpotifySection /> */}
          <DiscordSection />
          <CourseNodeSection />
          <CourseAngularSection />
          <CodeSection />
          <NotionSection />
          <FormSection />
        </section>
      </div>
    </div>
  );
}
