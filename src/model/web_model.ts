import { z } from "zod";

export const ApiResponse = z.object({
  status: z.number(),
  error: z.string().nullable(),
  data: z.any(),
});

export type ApiResponse = z.infer<typeof ApiResponse>;
