"use client";

import { initialState } from "@/components/Signup";
import { Input, Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { redirect } from "next/navigation";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

const submitHandler: any = async (
  prevState: { message: string },
  data: FormData
) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  let redirectPath: string | null = null;

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    redirectPath = "/";
    return res;
  } catch (error) {
    console.log(error);

    return { message: "Failed to login." };
  } finally {
    if (redirectPath) redirect(redirectPath);
  }
};
const page = () => {
  const [state, action, isPending] = useActionState(
    submitHandler,
    initialState
  );

  return (
    <section>
      {" "}
      <form
        action={action}
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
        {state.message && <p>{state.message}</p>}

        <Button color="primary" type="submit" radius="sm" isLoading={isPending}>
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
