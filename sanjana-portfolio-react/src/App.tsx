import * as React from "react";
import { Film, Mail, Moon, Sun, ArrowUpRight, LayoutGrid, Copy } from "lucide-react";
import { profile } from "@/data/profile";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useHotkeys } from "@/hooks/useHotkeys";
import { useActiveSection } from "@/hooks/useActiveSection";

import { ScrollProgress } from "@/components/ScrollProgress";
import { TopNav, type NavItem } from "@/components/TopNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommandPalette, type PaletteAction } from "@/components/CommandPalette";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { SpotlightVideo } from "@/components/SpotlightVideo";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

type Theme = "light" | "dark";

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "spotlight", label: "Spotlight" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.location.hash = `#${id}`;
}

export default function App() {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useHotkeys([
    {
      combo: "mod+k",
      onTrigger: (e) => {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      },
      enabled: true,
    },
  ]);

  const activeId = useActiveSection(navItems.map((n) => n.id));

  const actions: PaletteAction[] = React.useMemo(() => {
    const base: PaletteAction[] = navItems.map((n) => ({
      id: `jump-${n.id}`,
      title: `Go to ${n.label}`,
      subtitle: `Jump to the ${n.label.toLowerCase()} section`,
      keywords: [n.id, n.label.toLowerCase()],
      icon: <LayoutGrid className="h-4 w-4" />,
      perform: () => scrollToId(n.id),
    }));

    base.unshift({
      id: "jump-top",
      title: "Go to top",
      subtitle: "Back to the hero section",
      keywords: ["home", "hero", "top"],
      icon: <LayoutGrid className="h-4 w-4" />,
      perform: () => scrollToId("top"),
    });

    base.push(
      {
        id: "toggle-theme",
        title: "Toggle theme",
        subtitle: theme === "dark" ? "Switch to light" : "Switch to dark",
        keywords: ["theme", "dark", "light", "mode"],
        icon: theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
        perform: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      },
      {
        id: "email",
        title: "Email Sanjana",
        subtitle: profile.email,
        keywords: ["contact", "mail"],
        icon: <Mail className="h-4 w-4" />,
        perform: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "copy-email",
        title: "Copy email",
        subtitle: profile.email,
        keywords: ["copy", "clipboard"],
        icon: <Copy className="h-4 w-4" />,
        perform: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
          } catch {
            // ignore
          }
        },
      },
      {
        id: "resume",
        title: "Open résumé",
        subtitle: "PDF",
        keywords: ["cv", "resume", "pdf"],
        icon: <ArrowUpRight className="h-4 w-4" />,
        perform: () => window.open("/sanjana-jadhav-resume.pdf#view=FitH", "_blank", "noreferrer"),
      },
      {
        id: "video",
        title: "Watch dance feature",
        subtitle: "YouTube",
        keywords: ["dance", "video", "spotlight"],
        icon: <Film className="h-4 w-4" />,
        perform: () => scrollToId("spotlight"),
      }
    );

    return base;
  }, [theme]);

  return (
    <div className="noise">
      <div className="aurora" />
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <ScrollProgress />

      <TopNav
        items={navItems}
        activeId={activeId}
        onOpenPalette={() => setPaletteOpen(true)}
        right={
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          />
        }
      />

      <main id="content" className="relative z-10">
        <Hero />
        <About />
        <ExperienceTimeline />
        <ProjectGrid />
        <SkillsMatrix />
        <Certifications />
        <Education />
        <SpotlightVideo />
        <Contact />
        <Footer />
      </main>

      <BackToTop />

      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        actions={actions}
      />
    </div>
  );
}
