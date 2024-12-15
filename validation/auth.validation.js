import { z } from "zod";

export const userRegistrationSchema = z.object({
  name: z.string().trim().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().min(6),
});

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
