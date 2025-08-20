import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    avatar: z.string().url(),
    email: z.string().email(),
    role: z.enum(["admin", "user"]),
});

export type User = z.infer<typeof userSchema>;
