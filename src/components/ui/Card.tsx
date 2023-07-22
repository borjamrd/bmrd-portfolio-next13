"use client";

import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva(
  "backdrop-filter backdrop-blur-sm shadow rounded-3xl overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-sky-900/50 dark:bg-slate-200/25",
        secondary: "bg-cyan-900/50 dark:bg-slate-600/25",
        dark: "bg-slate-800/90 dark:bg-slate-950",
        white: "bg-white",
        intense: "bg-green-600/50 dark:bg-green-900/25",
        transparent: "bg-transparent",
        red: " bg-[#ff4848d3]",
        violet: "bg-[#7785ff56]",
        nodejs: "bg-gradient-to-br from-[#72A962]/80 to-[#3E853D]",
        angular: "bg-gradient-to-br from-[#DD0031]/80 to-[#C3002F]",
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
