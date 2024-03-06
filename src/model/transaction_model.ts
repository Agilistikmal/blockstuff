import { z } from "zod";

export const Transaction = z.object({
  id: z.string(),
  customer_id: z.string(),
  item_id: z.string(),
  quantity: z.number(),
  total_price: z.number(),
  status: z.string(),
  payment_ref: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});
