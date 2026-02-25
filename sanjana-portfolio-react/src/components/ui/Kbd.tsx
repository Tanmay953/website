import * as React from "react";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLElement>;

export function Kbd({ className, ...props }: Props) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-card/60 px-2 py-1 text-[11px] font-medium text-muted-fg",
        className
      )}
      {...props}
    />
  );
}
