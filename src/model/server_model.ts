import { z } from "zod";

const Server = z.object({
    id: z.string(),
    name: z.string(),
    ip: z.string().includes("."),
    website: z.string().optional()
})