import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { MotionInView } from "@/components/MotionInView";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Backend engineering, cloud-native delivery, and a calm approach to shipping."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <MotionInView>
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-muted-fg sm:text-lg">
              I’m a backend-focused software engineer based in Pune. Over the last 3+ years, I’ve
              built and shipped production systems in Java and Spring Boot — with an emphasis on
              security, reliability, and clean architecture.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-fg sm:text-lg">
              My favorite problems sit at the intersection of <span className="text-fg font-semibold">speed</span> and
              <span className="text-fg font-semibold"> stability</span>: cloud migrations (AWS → GCP), automation that saves
              teams days, and performance tuning that turns slow APIs into real-time experiences —
              including recent work integrating LLM/RAG pipelines.
            </p>
          </div>
        </MotionInView>

        <MotionInView delay={0.1}>
          <Card className="p-6">
            <div className="text-sm font-semibold">At a glance</div>

            <dl className="mt-5 grid gap-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">Experience</dt>
                <dd className="mt-1 text-sm font-semibold">3+ years (Searce Inc)</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">Core stack</dt>
                <dd className="mt-1 text-sm font-semibold">Java • Spring Boot • SQL • Docker</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">Cloud</dt>
                <dd className="mt-1 text-sm font-semibold">Google Cloud (GCP) • Cloud Run • Functions</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-fg">Contact</dt>
                <dd className="mt-1 text-sm text-muted-fg">
                  <a
                    className="font-semibold text-fg underline decoration-border underline-offset-4 hover:decoration-fg"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Card>
        </MotionInView>
      </div>
    </Section>
  );
}
