import { z } from 'zod';

export const createGroupSchema = z.object({
  groupName: z.string(),
  groupDescription: z.string(),
});

export const createPostSchema = z.object({
  description: z.string(),
  title: z.string(),
});
