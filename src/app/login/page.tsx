"use client";

import { Button, Input } from "@nextui-org/react";
import Email from "next-auth/providers/email";
import React, { useState } from "react";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: e.target.value }));
    console.log(user);
  };

  const handleSubmit = () => {
    if (user.email.length < 3) {
      console.log("email is too short");
      return;
    }
    console.log("successed");
  };

  return (
    <section className="max-w-xl mx-auto py-10 px-4">
      {" "}
      <form
        action={handleSubmit}
        className="flex flex-col gap-4 border border-gray-300 rounded-lg shadow-md p-4 items-center"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif">
          Log In
        </h1>
        <p className="text-base md:text-lg font-semibold font-serif">
          Please Login your existing account
        </p>

        <Input
          type="email"
          name="email"
          label="Email"
          variant="flat"
          placeholder="Enter your email"
          labelPlacement="outside"
          size="lg"
          radius="sm"
          className="border border-gray-400 rounded-md"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          variant="flat"
          placeholder="Enter your passwords"
          labelPlacement="outside"
          size="lg"
          radius="sm"
          className="border border-gray-400 rounded-md"
          onChange={handleChange}
        />
        <Button color="primary" radius="sm" variant="shadow" type="submit">
          Login
        </Button>
      </form>
    </section>
  );
};

export default page;
