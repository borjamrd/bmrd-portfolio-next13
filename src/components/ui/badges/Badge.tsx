"use client";

import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "whitespace-nowrap rounded-2xl px-2.5 py-0.5 ",
  {
    variants: {
      variant: {
        default:
          "bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-100",
        dark: "text-slate-100 bg-slate-800",
      },
      size: {
        xs: "text-xs px-2.5 py-0.5",
        sm: "text-sm px-2.5 py-0.5",
        md: "text-base px-2.5 py-0.5",
        lg: "lg:text-lg text-base lg:px-3 px-2 lg:py-1.5 py-0.5",
        xl: "text-3xl px-3.5 py-1.5.5",
        xxl: "text-4xl px-4 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface BadgeProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ className, variant, children, size }) => {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))}>
      {children}
    </span>
  );
};

export default Badge;
