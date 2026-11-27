import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import { readdirSync, readFileSync } from "node:fs"

const PROJECTS_DIR = "./src/content/projects"

// Same check as hasProjectStory in src/lib/projects.ts: project pages without
// a story are noindex, so they are left out of the sitemap too
const projectsWithoutStory = readdirSync(PROJECTS_DIR).filter((id) => {
  const source = readFileSync(`${PROJECTS_DIR}/${id}/index.mdx`, "utf-8")
  const body = source.replace(/^---[\s\S]*?---/, "")
  return !body.replace(/\{\/\*[\s\S]*?\*\/\}/g, "").trim()
})

export default defineConfig({
  site: "https://carlosreyes.me",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !projectsWithoutStory.some((id) => page.endsWith(`/projects/${id}/`)),
    }),
    mdx({ gfm: true }),
  ],
})
