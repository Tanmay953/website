import * as React from "react";
import { Code2, Database, Cloud, BarChart3 } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { MotionInView } from "@/components/MotionInView";
import { cn } from "@/lib/cn";

type Category = "technologies" | "databases_tools" | "cloud" | "analytics";

const categories: { key: Category; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "technologies", label: "Technologies", icon: Code2 },
  { key: "databases_tools", label: "Databases & Tools", icon: Database },
  { key: "cloud", label: "Cloud (GCP)", icon: Cloud },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
];

export function SkillsMatrix() {
  const [active, setActive] = React.useState<Category>("technologies");

  const skillsByCategory: Record<Category, string[]> = profile.skills;

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A practical toolkit for backend, cloud-native delivery, and data collaboration."
    >
      <div className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
        <MotionInView>
          <Card className="p-4 sm:p-5">
            <div className="text-sm font-semibold">Categories</div>
            <div className="mt-3 grid gap-2">
              {categories.map((c) => {
                const Icon = c.icon;
                const isActive = c.key === active;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setActive(c.key)}
                    className={cn(
                      "focus-ring flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition",
                      isActive
                        ? "border-accent/40 bg-accent/10 shadow-glow"
                        : "border-border bg-card/40 hover:bg-muted/50"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn("grid h-9 w-9 place-items-center rounded-xl", isActive ? "bg-accent/15" : "bg-muted/50")}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{c.label}</span>
                        <span className="block text-xs text-muted-fg">
                          {skillsByCategory[c.key].length} items
                        </span>
                      </span>
                    </span>
                    <span className={cn("text-xs font-semibold", isActive ? "text-fg" : "text-muted-fg")}>
                      {isActive ? "Selected" : "View"}
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>
        </MotionInView>

        <MotionInView delay={0.1}>
          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-2xl font-bold tracking-tight">{categories.find((c) => c.key === active)?.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                  Select a category to see the tools and technologies Sanjana uses day‑to‑day.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {skillsByCategory[active].map((s) => (
                <Chip key={s} tone="accent">
                  {s}
                </Chip>
              ))}
            </div>
          </Card>
        </MotionInView>
      </div>
    </Section>
  );
}
