import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

/**
 * NOTE (GitHub Pages):
 * If you deploy to https://<user>.github.io/<repo>/ you must set:
 *   BASE_PATH=/<repo>/
 * during build, or hardcode `base: "/<repo>/"` below.
 */
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
