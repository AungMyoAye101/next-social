"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Signin = () => {
  const router = useRouter();

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
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action={submitHandler}
      className="max-w-80 flex flex-col gap-4 mx-auto mt-10 p-4 shadow-md rounded-md border border-gray-300"
    >
      <h1>Sign in Form</h1>
      <input
        type="text"
        name="name"
        placeholder="name"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
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
        Sign Up
      </button>
    </form>
  );
};

export default Signin;
