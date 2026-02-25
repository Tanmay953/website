import * as React from "react";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLElement> & {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function Section({ id, eyebrow, title, subtitle, className, children }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <header className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-fg">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-muted-fg sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </header>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
