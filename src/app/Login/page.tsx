"use client";

import { Input, Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { useFormStatus } from "react-dom";

const page = () => {
  const { pending } = useFormStatus();
  const router = useRouter();
  const submitHandler: any = async (data: FormData) => {
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      router.push("/");

      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <section>
      {" "}
      <form
        action={submitHandler}
        className=" flex flex-col gap-4 mx-auto  px-6 py-8  shadow-md rounded-md border border-gray-300"
      >
        <h1 className="text-2xl font-bold font-serif text-center mb-2">
          Login
        </h1>

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
          Login
        </Button>
        <Link
          href={"/signup"}
          className="text-sm font-serif text-purple-500 font-semibold self-end"
        >
          Don't have an account?
        </Link>
      </form>
    </section>
  );
};

export default page;
