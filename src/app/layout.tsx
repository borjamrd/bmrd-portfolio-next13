"use client";

import Providers from "@/components/Providers";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
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
      <head></head>
      <body>
        <Providers>
          <AnimatePresence mode="wait">
            <main
              className={cn(
                inter.className,
                "min-h-screen transition-colors ease-in-out duration-5000 text-cyan-100  dark:text-slate-100 bg-gradient-to-br from-slate-100 from-60% via-cyan-300 via to-white to-100%  dark:from-black dark:to-[#111111]"
              )}
            >
              {/* dpNFuT lg:px-96 */}

              <div className="dpNFuT min-h-screen xl:px-64 md:px-40 p-5">
                <NextBreadcrumbs />
                {children}
              </div>
            </main>
          </AnimatePresence>
        </Providers>
      </body>
    </html>
  );
}
