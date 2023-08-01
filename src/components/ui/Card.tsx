"use client";

import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva(
  "border border-2/1 border-slate-200 dark:border-slate-400 backdrop-filter backdrop-blur-sm shadow shadow-slate-700 rounded-3xl overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-cyan-900/50 dark:bg-slate-600/25",
        secondary: " bg-sky-900/50 dark:bg-slate-200/25",
        dark: "bg-slate-800/90 dark:bg-slate-950",
        white: "bg-white",
        intense: "bg-green-600/50 dark:bg-green-900/25",
        transparent: "bg-transparent",
        red: "bg-gradient-to-br from-[#ff4848d3] to-[#ff484860]",
        violet: "bg-[#7785ff56]",
        nodejs: "bg-gradient-to-br from-[#72A96290]/80 to-[#3E853D20]",
        angular: "bg-gradient-to-br from-[#DD003190]/80 to-[#C3002F40]",
        codeSignal: "bg-gradient-to-br from-[#1261FA]/80 to-[#3A99E0]",

        linkedin:
          "bg-[#0e76a8] dark:bg-[#49a7ff56] flex flex-col justify-center items-center",
      },
      hover: {
        scale:
          "cursor-pointer  hover:scale-[103%] transition duration-300 ease-in-out",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ className, children, hover, variant }) => {
  return (
    <div className={cn(cardVariants({ variant, hover, className }))}>
      {children}
    </div>
  );
};

export default Card;
