import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://Jggcod.github.io",
  base: "/jorgegilgarcia",
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@cv": path.resolve(__dirname, "./src/cv.json"),
      },
    },
  },
});
