import { Heart } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-fg">
            © {year} {profile.name}. Built with React + Vite.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-fg">
            Crafted with <Heart className="h-4 w-4" /> clean architecture and good vibes.
          </div>
        </div>
      </div>
    </footer>
  );
}
