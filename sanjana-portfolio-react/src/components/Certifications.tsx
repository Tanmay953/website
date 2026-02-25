import { Award } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { MotionInView } from "@/components/MotionInView";

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Cloud credentials and scalable-systems training."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profile.certifications.map((c, idx) => (
          <MotionInView key={c.title} delay={0.05 * idx}>
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-lg font-bold tracking-tight">
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-fg">
                    {c.issuer} • {c.date}
                  </div>
                </div>
              </div>
            </Card>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
}
