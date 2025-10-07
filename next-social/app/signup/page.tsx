"use client";

import React from 'react'
import { Button } from '@heroui/button';
import { Input } from '@heroui/input'
import { Form } from '@heroui/form'
const page = () => {

    const [submitted, setSubmitted] = React.useState<any>(null);

    const onSubmit = (e: any) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        setSubmitted(data);
    };
    return (
        <Form className="w-full max-w-xs bg-primary-50" onSubmit={onSubmit}>
            <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
            />
            <Button type="submit" variant="bordered">
                Submit
            </Button>
            {submitted && (
                <div className="text-small text-default-500">
                    You submitted: <code>{JSON.stringify(submitted)}</code>
                </div>
            )}
        </Form>



    )
}

export default page