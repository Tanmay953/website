import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

export function BackToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={cn(
        "focus-ring fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-semibold text-fg shadow-glow backdrop-blur transition",
        show ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
      Top
    </a>
  );
}
