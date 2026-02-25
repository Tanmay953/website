import { Briefcase, Calendar, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { MotionInView } from "@/components/MotionInView";

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Production systems, cloud migrations, automation, and performance — delivered in large cross‑functional teams."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-border/80 sm:block" />

        <div className="space-y-6">
          {profile.experience.map((exp, idx) => (
            <MotionInView key={exp.role + exp.company} delay={0.05 * idx}>
              <div className="relative sm:pl-14">
                <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-card sm:flex">
                  <Briefcase className="h-4 w-4 text-muted-fg" />
                </div>

                <Card className="p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="font-display text-xl font-bold tracking-tight">
                        {exp.role}
                      </div>
                      <div className="mt-1 text-sm text-muted-fg">
                        <span className="font-semibold text-fg">{exp.company}</span>{" "}
                        • {exp.mode ?? ""}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-fg">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> {exp.start} — {exp.end}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {exp.tags.slice(0, 6).map((t) => (
                        <Chip key={t} tone="accent">
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <details className="mt-5 rounded-xl border border-border bg-muted/30 p-4 open:bg-muted/40">
                    <summary className="cursor-pointer select-none text-sm font-semibold text-fg">
                      Highlights
                      <span className="ml-2 text-xs font-normal text-muted-fg">(click to expand)</span>
                    </summary>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-fg">
                      {exp.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </details>
                </Card>
              </div>
            </MotionInView>
          ))}
        </div>
      </div>
    </Section>
  );
}
