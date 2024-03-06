import { z } from "zod";

export const Customer = z.object({
  id: z.string(),
  username: z.string().min(3).max(16),
  email: z.string().includes("@"),
});

export type Customer = z.infer<typeof Customer>;
