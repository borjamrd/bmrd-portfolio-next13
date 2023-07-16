"use client";

import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva(
  "backdrop-filter backdrop-blur-sm rounded-3xl overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-indigo-500/25 dark:bg-indigo-500/25",
        secondary: "bg-slate-900/50 dark:bg-slate-600/25",
        transparent: "bg-transparent",
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
