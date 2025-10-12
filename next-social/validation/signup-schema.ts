import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string('Name is required.').min(3, { message: "Name must be at least 3 characters long." }),
    email: z.email('Invalid email address').nonempty("Email is required."),
    password: z.string("Password is required.").min(6, { message: 'Password must be at least 6 characters long.' }),
});

export type signupFormInputs = z.infer<typeof signupSchema>;