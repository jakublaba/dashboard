import {z} from "zod";
import {Role} from "./Roles";

export const UserSchema = z.object({
    id: z.bigint(),
    name: z.string().min(1).max(30),
    role: Role
});

export type User = z.infer<typeof UserSchema>;

export interface UserProps {
  user: User;
}