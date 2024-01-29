import { defineCollection, z } from "astro:content";

const ArticlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const ProjectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.string(),
  }),
});

export const collections = {
  articles: ArticlesCollection,
  projects: ProjectsCollection,
};
