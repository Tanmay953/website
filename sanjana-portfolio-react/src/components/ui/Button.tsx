import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition",
        "active:scale-[0.98]",
        variant === "primary" &&
          "bg-accent text-accent-fg shadow-glow hover:opacity-95",
        variant === "secondary" &&
          "card-surface text-fg hover:shadow-glow",
        variant === "ghost" &&
          "text-fg hover:bg-muted/70 border border-transparent hover:border-border",
        className
      )}
      {...props}
    />
  );
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: LinkProps) {
  return (
    <a
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition",
        "active:scale-[0.98]",
        variant === "primary" &&
          "bg-accent text-accent-fg shadow-glow hover:opacity-95",
        variant === "secondary" &&
          "card-surface text-fg hover:shadow-glow",
        variant === "ghost" &&
          "text-fg hover:bg-muted/70 border border-transparent hover:border-border",
        className
      )}
      {...props}
    />
  );
}
