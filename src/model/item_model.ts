import { z } from "zod";

const Item = z.object({
    id: z.string(),
    server_id: z.string(),
    title: z.string(),
    description: z.string(),
    type: z.string(),
    price: z.number().min(500),
    stock: z.number().min(0).default(0),
    sold: z.number().min(0).default(0)
})

