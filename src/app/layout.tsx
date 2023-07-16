import Providers from "@/components/Providers";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "bg-opacity-20 min-h-screen transition-colors duration-1000 text-slate-950 dark:text-slate-100 bg-gradient-to-br from-slate-100 via-blue-100 to-cyan-200 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-800"
        )}
      >
        <main className="dpNFuT min-h-screen lg:px-40 p-1">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
