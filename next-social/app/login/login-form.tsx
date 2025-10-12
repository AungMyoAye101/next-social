// src/components/LoginForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormInputs, loginSchema } from '@/validation/login-schema';
import { Button } from '@heroui/button';


export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginFormInputs) => {
        console.log(data);
        // Handle form submission logic here (e.g., API call)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-green-200 gap-4'>
            <input {...register("email")} placeholder='email' />
            {
                errors.email && <p>{errors.email.message}</p>
            }
            <input {...register("password")} placeholder='password' />
            {
                errors.password && <p>{errors.password.message}</p>
            }
            <Button type='submit'>Submit</Button>
        </form>
    );
}