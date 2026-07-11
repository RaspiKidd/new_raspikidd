import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Tutorials: one file per tutorial, each maps to a rendered page/route
    tutorials: defineCollection({
      type: 'page',
      source: 'learn/**/*.md',
      schema: z.object({
        platform: z.enum(['picobricks', 'raspberry-pi-pico', 'microbit']),
        language: z.string().optional(), // makecode | python | javascript
        level: z.string(),
        duration: z.string(),
        kit: z.array(z.string()),
        image: z.string().optional(),
        youtube: z.string().optional(),
      }),
    }),

    // Glossary: lookups, not routes, so type 'data'
    glossary: defineCollection({
      type: 'data',
      source: 'glossary/*.md',
      schema: z.object({
        term: z.string(),
        definition: z.string(), // the friendly, UK-English definition
        category: z.string().optional(),
        example: z.string().optional(),
      }),
    }),
  },
})
