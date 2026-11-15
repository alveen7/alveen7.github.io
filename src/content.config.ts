import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Satu file markdown di src/content/tulisan/ = satu tulisan.
// Build gagal kalau judul, tanggal, atau kategori tidak ada.
const tulisan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tulisan' }),
  schema: z.object({
    judul: z.string(),
    tanggal: z.coerce.date(),
    kategori: z.string(),
  }),
});

export const collections = { tulisan };
