import {z} from "zod";
import {ProductSchema} from "./Product"
import {UserSchema} from "./User";
import {OrderStatus} from "./Status";

export const OrderSchema = z.object({
    id: z.string(),
    seller: UserSchema
        .refine((usr) => usr.role === "Seller", {message: "seller must have \"Seller\" role"}),
    buyer: UserSchema
        .refine((usr) => usr.role === "Buyer", {message: "buyer must have \"Buyer\" role"}),
    products: z.map(ProductSchema, z.number())
        .refine((map) => {
            map.forEach((amount) => {
                if (!Number.isInteger(amount)) {
                    return false;
                }
            });
        }, {message: "Amount of product must be an integer"})
        .refine((map) => {
            map.forEach((amount) => {
                if (amount < 1) {
                    return false;
                }
            })
        }, {message: "At least 1 product must be ordered"}),
    status: OrderStatus,
    date: z.date()
});

export type Order = z.infer<typeof OrderSchema>;
