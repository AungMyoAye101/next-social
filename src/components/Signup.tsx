"use client";

import { createUser } from "./actions/action";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

interface FormState {
  message: string;
}

const initialState = {
  message: "",
};
const Signin = () => {
  const [state, action, isPending] = useActionState(createUser, initialState);

  return (
    <form
      action={action}
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
      {state?.message && <p className="text-rose-400">{state.message}</p>}
      <Button color="primary" type="submit" radius="sm" isLoading={isPending}>
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
