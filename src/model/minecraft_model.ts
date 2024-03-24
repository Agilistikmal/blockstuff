import { z } from "zod";

export const MinecraftRequest = z.object({
  ip: z.string().includes("."),
  port: z.number(),
  password: z.string(),
  commands: z.array(z.string()),
});
export type MinecraftRequest = z.infer<typeof MinecraftRequest>;
