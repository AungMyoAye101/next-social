'use client';
import { Button } from '@heroui/button'
import React from 'react'
import { Input } from '@heroui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupFormInputs, signupSchema } from '@/validation/signup-schema'
import { axiosInstance } from '@/config/axios';
import { addToast } from '@heroui/toast';


const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(signupSchema)
    })
    const onSubmit = async (data: signupFormInputs) => {
        try {
            const res = await axiosInstance.post('/api/v1/auth/register', data)
            const result = res.data
            addToast({
                title: "Signup successfull",
                description: result.message,
                color: 'success'
            });
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {

                addToast({
                    title: "Signup error",
                    description: error.message,
                    color: 'danger'
                });
            }
        }
        reset()
    }
    return (
        <form className="w-full max-w-xs bg-white/90 p-6 rounded-md shadow flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                {
                ...register("name")
                }
                errorMessage={errors.name?.message}
                isInvalid={!!errors.name}
                type="text"
                label="Name"
                labelPlacement="outside"
                placeholder="Enter your name"

            />
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
    )
}

export default Signup