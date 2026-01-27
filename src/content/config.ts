import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('First Layer Digital'),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

// Work (Case Studies) collection schema
const work = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		techStack: z.array(z.string()),
		image: z.string().optional(),
		result: z.string(),
		clientName: z.string().optional(),
		category: z.enum(['custom-software', 'digital-transformation', 'ecommerce-optimization', 'operational-infrastructure']).optional(),
		anonymous: z.boolean().default(false),
	}),
});

export const collections = {
	blog,
	work,
};
