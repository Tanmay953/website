import * as React from "react";

type Options = {
  /**
   * 0..1 — larger means user must see more of the section for it to become active.
   */
  threshold?: number;
  /**
   * rootMargin string passed to IntersectionObserver.
   * Example: "-20% 0px -70% 0px" activates when section enters top portion.
   */
  rootMargin?: string;
};

export function useActiveSection(sectionIds: string[], options: Options = {}) {
  const { threshold = 0.35, rootMargin = "-20% 0px -70% 0px" } = options;
  const [activeSection, setActiveSection] = React.useState<string>(sectionIds[0] ?? "");

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [rootMargin, sectionIds, threshold]);

  return activeSection;
}
