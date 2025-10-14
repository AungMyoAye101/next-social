// src/schemas/authSchema.ts
import { z } from 'zod';

export const loginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string("Password is required.").min(6, 'Password must be at least 6 characters long'),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;