import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts live in src/content/blog/*.md — add a new .md file with the
// frontmatter below and it appears on /blog automatically.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    // Optional shorter title for the <title> tag / search results.
    // Google truncates around 60 characters — set this when `title` is longer.
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
