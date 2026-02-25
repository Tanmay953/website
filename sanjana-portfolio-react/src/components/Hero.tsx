import { ArrowDown, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { MotionInView } from "@/components/MotionInView";
import { ButtonLink } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";

export function Hero() {
  const linkedin = profile.social.find((s) => s.kind === "linkedin")?.href;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-16 md:py-24">
          <MotionInView>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-fg">
              {profile.title}
            </p>

            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-semibold tracking-tight text-fg/90 sm:text-xl">
              {profile.headline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-fg sm:text-lg">
              {profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#experience" className="shadow-glow">
                Explore experience <ArrowDown className="h-4 w-4" />
              </ButtonLink>

              <ButtonLink
                href="/sanjana-jadhav-resume.pdf#view=FitH"
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>

              <ButtonLink href={`mailto:${profile.email}`} variant="ghost">
                Email <Mail className="h-4 w-4" />
              </ButtonLink>

              {linkedin ? (
                <ButtonLink href={linkedin} variant="ghost" target="_blank" rel="noreferrer">
                  LinkedIn <Linkedin className="h-4 w-4" />
                </ButtonLink>
              ) : null}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Chip>Java</Chip>
              <Chip>Spring Boot</Chip>
              <Chip>Google Cloud (GCP)</Chip>
              <Chip>SQL</Chip>
              <Chip>LLM / RAG</Chip>
            </div>
          </MotionInView>

          <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
            <div className="animate-floaty rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold text-muted-fg backdrop-blur">
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
