import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      category: z.string(),
      summary: z.string(),
      status: z.enum(["live", "discontinued", "replaced"]),
      role: z.string().optional(),
      stack: z.array(z.string()).default([]),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
      url: z.url().optional(),
      archiveUrl: z.url().optional(),
      icon: image().optional(),
      cover: image(),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
})

export const collections = { projects }
