import * as React from "react";
import { Copy, Linkedin, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { MotionInView } from "@/components/MotionInView";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function encodeMailto(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

export function Contact() {
  const [toast, setToast] = React.useState<string | null>(null);
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const linkedin = profile.social.find((s) => s.kind === "linkedin")?.href;

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((v) => ({ ...v, [key]: e.target.value }));
    };

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast(`${label} copied`);
      window.setTimeout(() => setToast(null), 1600);
    } catch {
      setToast("Copy failed (browser blocked)");
      window.setTimeout(() => setToast(null), 2200);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = form.subject.trim() || "Portfolio message";
    const name = form.name.trim() || "(no name)";
    const email = form.email.trim() || "(no email provided)";
    const message = form.message.trim();

    const bodyLines = [
      message || "(No message — just saying hi!)",
      "",
      "—",
      `From: ${name}`,
      `Email: ${email}`,
    ];

    const href = `mailto:${profile.email}?subject=${encodeMailto(subject)}&body=${encodeMailto(
      bodyLines.join("\n")
    )}`;
    window.location.href = href;
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Send a message — it opens your email app with everything pre‑filled."
    >
      <MotionInView>
        <Card className="p-6">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Your name</span>
                <input
                  value={form.name}
                  onChange={set("name")}
                  placeholder="e.g., Tanmay"
                  className="focus-ring w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-fg placeholder:text-muted-fg"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">Your email</span>
                <input
                  value={form.email}
                  onChange={set("email")}
                  placeholder="e.g., tanmay@email.com"
                  type="email"
                  className="focus-ring w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-fg placeholder:text-muted-fg"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Subject</span>
              <input
                value={form.subject}
                onChange={set("subject")}
                placeholder="What is this about?"
                className="focus-ring w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-fg placeholder:text-muted-fg"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                value={form.message}
                onChange={set("message")}
                placeholder="Write your message…"
                rows={6}
                className="focus-ring w-full resize-none rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-fg placeholder:text-muted-fg"
              />
            </label>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <Button type="submit" className="shadow-glow">
                Send email <Mail className="h-4 w-4" />
              </Button>
              <div className="text-xs text-muted-fg">No data is stored — uses your email client.</div>
            </div>
          </form>

          <div className="mt-8 border-t border-border/70 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href={`mailto:${profile.email}`} variant="ghost">
                  <Mail className="h-4 w-4" /> {profile.email}
                </ButtonLink>
                <Button type="button" variant="ghost" onClick={() => copy(profile.email, "Email")}>
                  <Copy className="h-4 w-4" /> Copy
                </Button>

                {linkedin ? (
                  <ButtonLink href={linkedin} variant="ghost" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </ButtonLink>
                ) : null}
              </div>

              <div className="inline-flex items-center gap-2 text-xs text-muted-fg">
                <MapPin className="h-4 w-4" /> {profile.location}
              </div>
            </div>
          </div>
        </Card>
      </MotionInView>

      <AnimatePresence>
        {toast ? (
          <motion.div
            className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-semibold text-fg shadow-glow backdrop-blur"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
