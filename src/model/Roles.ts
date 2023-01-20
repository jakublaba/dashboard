import { z } from "zod";

const roles = [
    "Buyer",
    "Seller"
] as const;

export const Role = z.enum(roles);
