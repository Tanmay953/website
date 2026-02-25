import * as React from "react";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "accent";
};

export function Chip({ className, tone = "neutral", ...props }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "neutral" &&
          "border-border/80 bg-muted/60 text-fg",
        tone === "accent" &&
          "border-accent/30 bg-accent/10 text-fg",
        className
      )}
      {...props}
    />
  );
}
