import { z } from "zod";

const statuses = [
    "Awaiting",
    "Paid",
    "Sent",
    "Received",
    "Returned"
] as const;

export const OrderStatus = z.enum(statuses);