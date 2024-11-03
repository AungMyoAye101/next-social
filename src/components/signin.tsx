"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaEnvelope, FaEye } from "react-icons/fa6";

const Signin = () => {
  const router = useRouter();
  const { pending } = useFormStatus();

  const submitHandler = async (data: FormData) => {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action={submitHandler}
      className=" flex flex-col gap-4 mx-auto  px-6 py-8  shadow-md rounded-md border border-gray-300"
    >
      <h1 className="text-2xl font-bold font-serif text-center mb-2">
        Sign Up
      </h1>
      <Input
        type="text"
        label="Name"
        name="name"
        radius="sm"
        variant="faded"
        placeholder="Enter your name"
        labelPlacement="outside"
      />
      <Input
        type="email"
        label="Email"
        name="email"
        radius="sm"
        variant="faded"
        placeholder="you@example.com"
        labelPlacement="outside"
      />

      <Input
        type="password"
        label="Password"
        name="password"
        radius="sm"
        variant="faded"
        placeholder="Enter your password"
        labelPlacement="outside"
      />

      <Button color="primary" type="submit" radius="sm" isLoading={pending}>
        Sign Up
      </Button>
      <Link
        href={"/login"}
        className="text-sm font-serif text-purple-500 font-semibold self-end"
      >
        Already have an account?
      </Link>
    </form>
  );
};

export default Signin;
