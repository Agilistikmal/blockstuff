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
export type Transaction = z.infer<typeof Transaction>;

export const TransactionChannel = z.object({
  group: z.string(),
  code: z.string(),
  name: z.string(),
  type: z.string(),
  fee_merchant: z.object({
    flat: z.number(),
    percent: z.number(),
  }),
  fee_customer: z.object({
    flat: z.number(),
    percent: z.number(),
  }),
  total_fee: z.object({
    flat: z.number(),
    percent: z.string(),
  }),
  minimum_fee: z.number() || z.null(),
  maximum_fee: z.number() || z.null(),
  icon_url: z.string(),
  active: z.boolean(),
});
export type TransactionChannel = z.infer<typeof TransactionChannel>;
