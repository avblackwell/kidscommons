// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sanity from "@sanity/astro"

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "your-project-id",
      dataset: process.env.PUBLIC_SANITY_DATASET || "production",
      useCdn: true,
      // Studio is hosted separately at sanity.io/manage
      // To embed it, add an adapter (e.g. @astrojs/cloudflare) and uncomment:
      // studioBasePath: "/admin",
    }),
  ],
})
