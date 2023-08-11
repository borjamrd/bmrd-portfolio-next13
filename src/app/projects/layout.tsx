import ProjectProvider from "@/components/ProjectProvider";
import type { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return <ProjectProvider>{children}</ProjectProvider>;
}
