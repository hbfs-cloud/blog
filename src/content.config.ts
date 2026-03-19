import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const CATEGORIES = [
  'family', 'fatima', 'yassine', 'soufiane', 'youssouf', 'salma',
  'veille', 'reputation', 'business', 'retrospectives', 'review-strategy'
] as const;

const postSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.coerce.date(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  category: z.enum(CATEGORIES),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  lang: z.string().default('fr'),
  draft: z.boolean().default(false),
});

// One collection per category
const family = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/family' }), schema: postSchema });
const fatima = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/fatima' }), schema: postSchema });
const yassine = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/yassine' }), schema: postSchema });
const soufiane = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/soufiane' }), schema: postSchema });
const youssouf = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/youssouf' }), schema: postSchema });
const salma = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/salma' }), schema: postSchema });
const veille = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/veille' }), schema: postSchema });
const reputation = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reputation' }), schema: postSchema });
const business = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/business' }), schema: postSchema });
const retrospectives = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/retrospectives' }), schema: postSchema });
const reviewStrategy = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/review-strategy' }), schema: postSchema });

export const collections = {
  family, fatima, yassine, soufiane, youssouf, salma,
  veille, reputation, business, retrospectives,
  'review-strategy': reviewStrategy,
};
