"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
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
    <form
      action={submitHandler}
      className="max-w-80 flex flex-col gap-4 mx-auto mt-10 p-4 shadow-md rounded-md border border-gray-300"
    >
      <h1>Login in Form</h1>

      <input
        type="email"
        name="email"
        placeholder="email"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
      <button type="submit" className="bg-blue-400 rounded-md px-4 py-1">
        Login
      </button>
    </form>
  );
};

export default page;
