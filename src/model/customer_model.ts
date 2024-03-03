import { z } from "zod";

const Customer = z.object({
    username: z.string().min(3).max(16),
    email: z.string().includes("@"),
    password: z.string().optional()
})
