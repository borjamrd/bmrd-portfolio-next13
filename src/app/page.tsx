import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col">
        <section className="h-full grid auto-rows-max grid-cols-3 gap-2 lg:grid-cols-5 md:gap-4 lg:py-5 container">
          <HeroSection />
          <LinkedinSection />
          <CvSection />
          <GithubSection />
          <MailSection />
          <ProjectSection />
          <TechSection />
          <AboutSection />
          <DiscordSection />
          <CourseNodeSection />
          <CourseAngularSection />
          <CodeSection />
          <NotionSection />
          <BlogSection />
          <FormSection />
        </section>
      </div>
    </div>
  );
}
