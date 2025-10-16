import { defineCollection, z } from 'astro:content';

const valuesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    version: z.string().optional(),
  }),
});

export const collections = {
  values: valuesCollection,
};
