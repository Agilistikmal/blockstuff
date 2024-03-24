import { z } from "zod";

export const Item = z.object({
  id: z.string(),
  slug: z.string(),
  server_slug: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  price: z.number().min(500),
  stock: z.number().min(0).default(0),
  sold: z.number().min(0).default(0),
  features: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      item_id: z.string(),
    })
  ),
  commands: z.array(z.string()).min(1),
});
export type Item = z.infer<typeof Item>;

export const ItemRequest = z.object({
  slug: z.string(),
  server_slug: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  price: z.number().min(500),
  stock: z.number().min(-1).default(-1),
  sold: z.number().min(0).default(0),
  commands: z.array(z.string()).min(1),
});
export type ItemRequest = z.infer<typeof ItemRequest>;

export const ItemFeatureRequest = z
  .array(
    z.object({
      name: z.string(),
    })
  )
  .optional();
export type ItemFeatureRequest = z.infer<typeof ItemFeatureRequest>;
