import Providers from "@/components/Providers";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextBreadcrumbs from "@/components/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bmrdev | fullstack developer",
  description: "but not another fullstack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main
            className={cn(
              inter.className,
              "bg-opacity-20 min-h-screen transition-colors ease-in-out duration-5000 text-cyan-100 dark:text-slate-100 bg-gradient-to-br from-slate-100 via-blue-300 to-teal-400  dark:from-slate-950 dark:via-slate-700 dark:to-slate-950"
            )}
          >
            {/* dpNFuT */}
            <div className="min-h-screen lg:px-96 p-5">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
