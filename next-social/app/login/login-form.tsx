// src/components/LoginForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormInputs, loginSchema } from '@/validation/login-schema';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { addToast } from '@heroui/toast';
import axiosInstance, { base } from '@/config/axios';

export function LoginForm() {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = async (data: LoginFormInputs) => {
        console.log(data)
        try {
            const res = await fetch(base + '/api/v1/auth/login', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
                credentials: "include"
            })



            const result = await res.json()
            console.log(result)
            addToast({
                title: 'Login Success',
                description: result.message,
                color: "success"
            })

        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                addToast({
                    title: 'Login Failed',
                    description: error.message,
                    color: "danger"
                })

            }
        }
        reset()
    }

    return (
        <form className="w-full max-w-xs bg-white/90 p-6 rounded-md shadow  flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

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