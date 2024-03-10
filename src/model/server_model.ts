import { z } from "zod";

export const Server = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  ip: z.string().includes("."),
  logo: z.string(),
  website: z.string().optional(),
  discord: z.string().optional(),
});
export const ServerPartial = Server.partial();

export type Server = z.infer<typeof Server>;
export type ServerPartial = z.infer<typeof ServerPartial>;
