import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { MotionInView } from "@/components/MotionInView";

export function SpotlightVideo() {
  const v = profile.spotlight;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0`;

  return (
    <section id="spotlight" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Spotlight
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-fg sm:text-lg">
            Featured dance performance — a glimpse beyond engineering.
          </p>
        </header>
      </div>

      <MotionInView>
        <div className="mt-10 w-full border-y border-border bg-muted/20">
          <div className="relative h-[75vh] min-h-[320px] w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embedSrc}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </MotionInView>

      <div className="mx-auto mt-4 flex w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="text-sm text-muted-fg">{v.subtitle}</div>
        <a
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-semibold text-fg backdrop-blur transition hover:bg-muted/60"
          href={v.youtubeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open on YouTube <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
