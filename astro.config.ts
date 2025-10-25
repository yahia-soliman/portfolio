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
        name: "Cairo",
        cssVariable: "--font-cairo",
      },
      {
        provider: fontProviders.google(),
        name: "Roboto Mono",
        cssVariable: "--font-roboto-mono",
      },
    ],
  },
});
