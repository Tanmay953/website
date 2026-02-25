import * as React from "react";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Kbd } from "@/components/ui/Kbd";

export type NavItem = { id: string; label: string };

type Props = {
  items: NavItem[];
  activeId: string;
  onOpenPalette: () => void;
  right?: React.ReactNode;
};

export function TopNav({ items, activeId, onOpenPalette, right }: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navLinks = (
    <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
      {items.map((it) => {
        const active = it.id === activeId;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={cn(
                "focus-ring inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold transition",
                active
                  ? "text-fg underline decoration-border underline-offset-[10px]"
                  : "text-muted-fg hover:text-fg hover:underline hover:decoration-border/70 hover:underline-offset-[10px]"
              )}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/70 backdrop-blur supports-[backdrop-filter]:bg-bg/55">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="focus-ring group flex items-center gap-3 rounded-full px-2 py-1">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--ring))] text-accent-fg shadow-glow">
            <span className="font-display text-sm font-bold">SJ</span>
          </span>
          <span className="hidden font-display text-sm font-bold tracking-tight sm:block">
            Sanjana Jadhav
          </span>
        </a>

        <nav className="hidden md:block">{navLinks}</nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className={cn(
              "focus-ring hidden items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 text-sm font-semibold text-muted-fg backdrop-blur transition hover:bg-muted/60 md:inline-flex"
            )}
            aria-label="Open command palette"
            title="Open command palette (Ctrl/⌘ + K)"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">
              <Kbd>Ctrl</Kbd> <Kbd>K</Kbd>
            </span>
          </button>

          <ButtonLink
            href="/sanjana-jadhav-resume.pdf#view=FitH"
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            Resume <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>

          {right}

          <button
            type="button"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-border bg-card/60 p-2 text-fg backdrop-blur transition hover:bg-muted/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-border/70 bg-bg/85 backdrop-blur md:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenPalette();
                }}
                className="focus-ring inline-flex flex-1 items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 text-sm font-semibold text-muted-fg"
              >
                <Search className="h-4 w-4" />
                <span>Search / Jump</span>
              </button>
              <ButtonLink
                href="/sanjana-jadhav-resume.pdf#view=FitH"
                variant="secondary"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="mt-3">{navLinks}</div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
