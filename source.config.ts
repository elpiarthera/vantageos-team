import { defineDocs, defineConfig, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs: blog, meta } = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string().optional(),
      author: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      source_url: z.string().optional(),
      source_type: z.enum(['repo', 'video']).optional(),
      video_id: z.string().optional(),
      speaker: z.string().optional(),
      duration: z.string().optional(),
      lang: z.string().default('en'),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig();
