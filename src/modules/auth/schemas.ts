import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(63, "Username must be at most 63 characters long")
    .regex(
      /^[a-z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .refine((val) => !val.includes("--"), "Username cannot contain '--'")
    .transform((val) => val.toLowerCase()),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
