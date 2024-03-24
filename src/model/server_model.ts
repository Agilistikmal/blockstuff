import { z } from "zod";

export const Server = z.object({
  id: z.string(),
  slug: z.string(),
  ip: z.string().includes("."),
  name: z.string(),
  logo: z.string(),
  website: z.string().optional(),
  discord: z.string().optional(),
});
export type Server = z.infer<typeof Server>;

export const ServerRequest = z.object({
  slug: z.string(),
  ip: z.string().includes("."),
  name: z.string(),
  logo: z.string(),
  website: z.string().optional(),
  discord: z.string().optional(),
  rcon: z.object({
    ip: z.string(),
    port: z.number(),
    password: z.string(),
  }),
});
export type ServerRequest = z.infer<typeof ServerRequest>;

export const ServerRequestPartial = ServerRequest.partial();
export type ServerRequestPartial = z.infer<typeof ServerRequestPartial>;
