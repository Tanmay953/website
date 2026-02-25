import * as React from "react";
import { Search, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { Kbd } from "@/components/ui/Kbd";

export type PaletteAction = {
  id: string;
  title: string;
  subtitle?: string;
  keywords?: string[];
  icon?: React.ReactNode;
  perform: () => void;
};

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  actions: PaletteAction[];
};

export function CommandPalette({ open, onOpenChange, actions }: Props) {
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    setQuery("");
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [open]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => {
      const hay = [a.title, a.subtitle ?? "", ...(a.keywords ?? [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [actions, query]);

  const [active, setActive] = React.useState(0);

  React.useEffect(() => setActive(0), [query, open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((v) => Math.min(filtered.length - 1, v + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((v) => Math.max(0, v - 1));
      }
      if (e.key === "Enter") {
        const action = filtered[active];
        if (!action) return;
        e.preventDefault();
        action.perform();
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, filtered, onOpenChange, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-start p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="Command palette"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute inset-0 cursor-pointer bg-bg/70 backdrop-blur"
            aria-label="Close palette"
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/95 shadow-glow backdrop-blur"
            initial={{ y: 10, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 border-b border-border bg-card/60 px-4 py-3">
              <Search className="h-4 w-4 text-muted-fg" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, actions…"
                className="w-full bg-transparent text-sm text-fg placeholder:text-muted-fg focus:outline-none"
              />
              <div className="hidden items-center gap-1 sm:flex">
                <Kbd>Esc</Kbd>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-auto p-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-10 text-center text-sm text-muted-fg">
                  No results. Try a different keyword.
                </div>
              ) : (
                <ul className="space-y-1">
                  {filtered.map((a, idx) => {
                    const selected = idx === active;
                    return (
                      <li key={a.id}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => {
                            a.perform();
                            onOpenChange(false);
                          }}
                          className={cn(
                            "focus-ring flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition",
                            selected ? "bg-accent/10" : "hover:bg-muted/50"
                          )}
                        >
                          <span className="flex items-start gap-3">
                            <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl bg-muted/60 text-fg">
                              {a.icon ?? <CornerDownLeft className="h-4 w-4" />}
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-fg">
                                {a.title}
                              </span>
                              {a.subtitle ? (
                                <span className="mt-1 block text-xs text-muted-fg">
                                  {a.subtitle}
                                </span>
                              ) : null}
                            </span>
                          </span>

                          <span className="hidden text-xs text-muted-fg sm:inline">
                            <Kbd>Enter</Kbd>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="border-t border-border bg-card/60 px-4 py-3 text-xs text-muted-fg">
              Tip: press <span className="font-semibold text-fg">Ctrl/⌘ + K</span> anytime.
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
