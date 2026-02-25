import { GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { MotionInView } from "@/components/MotionInView";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic foundation — from school to engineering."
    >
      <div className="space-y-4">
        {profile.education.map((e, idx) => (
          <MotionInView key={`${e.school}-${e.degree}`} delay={0.05 * idx}>
            <Card className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold tracking-tight">
                      {e.degree}
                    </div>
                    <div className="mt-1 text-sm text-muted-fg">
                      {e.school} • {e.location}
                    </div>
                    {e.note ? (
                      <div className="mt-1 text-xs text-muted-fg">{e.note}</div>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm sm:text-right">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">
                    {e.period}
                  </div>
                  {e.score ? <div className="mt-1 font-semibold">{e.score}</div> : null}
                </div>
              </div>
            </Card>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
}
