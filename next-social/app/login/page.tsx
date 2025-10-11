"use client";
import React from 'react'
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

const login = () => {

    return (
        <div className='flex justify-center'>
            <Form
                className="w-full max-w-xs flex flex-col gap-4 p-6 bg-white rounded-md "
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(e.target)
                }}
            >


                <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />
                <Input
                    isRequired
                    errorMessage="Please enter a valid username"
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                />

                <Button color="primary" type="submit">
                    Submit
                </Button>


            </Form>


        </div>
    )
}

export default login