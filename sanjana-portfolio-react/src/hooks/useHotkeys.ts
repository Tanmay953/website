import * as React from "react";

type Hotkey = {
  combo: string;
  onTrigger: (e: KeyboardEvent) => void;
  enabled?: boolean;
};

/**
 * Tiny hotkey handler.
 * combo examples:
 *  - "mod+k"  (Ctrl+K / Cmd+K)
 *  - "escape"
 */
export function useHotkeys(hotkeys: Hotkey[]) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      for (const hk of hotkeys) {
        if (hk.enabled === false) continue;
        if (matchesCombo(e, hk.combo)) {
          hk.onTrigger(e);
          return;
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hotkeys]);
}

function matchesCombo(e: KeyboardEvent, combo: string) {
  const parts = combo.toLowerCase().split("+");
  const key = parts[parts.length - 1];

  const wantsMod = parts.includes("mod");
  const wantsShift = parts.includes("shift");
  const wantsAlt = parts.includes("alt");

  const modPressed = e.metaKey || e.ctrlKey;

  if (wantsMod && !modPressed) return false;
  if (!wantsMod && modPressed && (parts.includes("meta") || parts.includes("ctrl"))) return false;

  if (wantsShift !== e.shiftKey) return false;
  if (wantsAlt !== e.altKey) return false;

  if (key === "escape") return e.key === "Escape";
  if (key.length === 1) return e.key.toLowerCase() === key;

  return e.key.toLowerCase() === key;
}
