import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIES = ['CFD', 'Structures & Materials', 'Space', 'Industry'] as const;

/**
 * One Markdown file per project in src/content/projects/.
 * Files starting with "_" (e.g. _template.md) are ignored by the loader.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().regex(/^[a-z0-9-]+$/, 'slug: lowercase letters, digits and hyphens only'),
      summary: z.string().max(160, 'summary: keep it to one sentence (160 chars max)'),
      category: z.enum(CATEGORIES),
      tools: z.array(z.string()).min(1),
      team: z.string(),
      period: z.string(),
      order: z.number(),
      cover: image(),
      coverAlt: z.string(),
      coverIsPhoto: z.boolean().default(false), // true = photo, fills the frame; false = figure, shown in full
      stats: z.array(z.object({ value: z.string(), label: z.string() })).max(4).default([]),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string() }))
        .default([]),
      confidential: z.boolean().default(false),
      status: z.enum(['completed', 'ongoing']).default('completed'),
      // Optional extras (not required to add a project)
      context: z.string().optional(), // e.g. "Materials & Behaviour course" or "Renault Group, Tangier plant"
      logo: image().optional(),
      logoAlt: z.string().optional(),
      charts: z
        .array(
          z.object({
            title: z.string(),
            caption: z.string(),
            unit: z.string(),
            series: z.array(z.string()).min(1).max(2),
            data: z.array(z.object({ label: z.string(), values: z.array(z.number()) })),
          }),
        )
        .default([]),
    }),
});

export const collections = { projects };
