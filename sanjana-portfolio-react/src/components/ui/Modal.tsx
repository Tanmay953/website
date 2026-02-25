import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ open, onClose, title, children }: Props) {
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus close button for accessibility
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <button
        className="absolute inset-0 cursor-pointer bg-bg/70 backdrop-blur"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card text-fg shadow-glow"
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border bg-card/60 px-5 py-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-fg">
              Case study
            </div>
            <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
              {title}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex items-center justify-center rounded-full border border-border bg-muted/40 p-2 text-fg hover:bg-muted/60"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-auto px-5 py-5">{children}</div>
      </div>
    </div>,
    document.body
  );
}
