import type { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="text-neutral-900 dark:text-neutral-100 prose prose-neutral dark:prose-invert">
      {children}
    </section>
  );
}
