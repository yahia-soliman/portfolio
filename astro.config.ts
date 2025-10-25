// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Albert Sans",
        cssVariable: "--font-albert-sans",
        fallbacks: ["sans-serif"],
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.google(),
        name: "Roboto Mono",
        cssVariable: "--font-roboto-mono",
        fallbacks: ["monospace"],
      },
    ],
  },
});
