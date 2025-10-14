// src/components/LoginForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormInputs, loginSchema } from '@/validation/login-schema';
import { Button } from '@heroui/button';
import { axiosInstance } from '@/config/axios';
import { Input } from '@heroui/input';

export function LoginForm() {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const res = await axiosInstance.post('/api/v1/auth/register', { data })
            const result = res.data
            console.log(result)

        } catch (error) {
            console.log(error)
        }
        reset()
    }

    return (
        <form className="w-full max-w-xs bg-white/90 p-6 rounded-md shadow " onSubmit={handleSubmit(onSubmit)}>

            <Input
                {
                ...register("email")
                }

                errorMessage={errors.email?.message}
                isInvalid={!!errors.email}
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                type="email"

            />
            <Input
                {
                ...register("password")
                }
                errorMessage={errors.password?.message}
                isInvalid={!!errors.password}
                label="password"
                labelPlacement="outside"
                placeholder="Enter your password"
                type="password"

            />
            <Button type="submit" variant="bordered" color='primary' isLoading={isSubmitting}>
                Submit
            </Button>

        </form>
    );
}