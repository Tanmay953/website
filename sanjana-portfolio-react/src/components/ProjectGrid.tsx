import * as React from "react";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { profile, type Project } from "@/data/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { MotionInView } from "@/components/MotionInView";
import { Modal } from "@/components/ui/Modal";

export function ProjectGrid() {
  const [open, setOpen] = React.useState<Project | null>(null);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A small selection of production work: security, migrations, automation, and cloud governance."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profile.projects.map((p, idx) => (
          <MotionInView key={p.title} delay={0.05 * idx}>
            <Card className="group h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10">
                  <Layers3 className="h-5 w-5" />
                </div>
                <Chip tone="accent">Case study</Chip>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-fg">
                {p.summary}
              </p>

              <div className="mt-5 space-y-2">
                {p.impact.slice(0, 2).map((i) => (
                  <div key={i} className="text-sm text-muted-fg">
                    • {i}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.slice(0, 5).map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Button
                  variant="secondary"
                  onClick={() => setOpen(p)}
                  className="group-hover:shadow-glow"
                >
                  View details <ArrowUpRight className="h-4 w-4" />
                </Button>

                <span className="text-xs text-muted-fg">
                  Built for production reliability
                </span>
              </div>
            </Card>
          </MotionInView>
        ))}
      </div>

      <Modal
        open={!!open}
        onClose={() => setOpen(null)}
        title={open?.title ?? "Project details"}
      >
        {open ? (
          <div className="space-y-6">
            <div>
              <div className="text-sm font-semibold">Summary</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                {open.summary}
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold">Impact</div>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-fg">
                {open.impact.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold">Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {open.stack.map((x) => (
                  <Chip key={x} tone="accent">
                    {x}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <div className="text-sm font-semibold">How this helps teams</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                The goal is always the same: make delivery safer and faster, keep the
                system observable, and tie engineering work to outcomes a business
                can measure.
              </p>
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
