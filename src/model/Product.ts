import {z} from "zod";

export const ProductSchema = z.object({
    id: z.string(),
    name: z.string().min(1).max(30),
    price: z.number().min(1).max(Number.MAX_VALUE)
});

export type Product = z.infer<typeof ProductSchema>;
