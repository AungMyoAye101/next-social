"use client";

import CreateForm from "@/components/ui/CreateForm";
import { Button, Input } from "@nextui-org/react";

import React, { useState } from "react";

const page = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser((pre) => ({
      ...pre,
      [name]: value,
    }));
    console.log(newUser);
  };

  const handleSubmit = async () => {
    const { name, email, password } = newUser;
    if (name.length < 3 && email.length < 0 && password.length < 6) {
      console.log("Failed to create user");
      return;
    }
    try {
      const res = await fetch("api/user/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-xl mx-auto py-10 px-4">
      {" "}
      {/* <form
        action={handleSubmit}
        className="flex flex-col gap-4 border border-gray-300 rounded-lg shadow-md p-4 items-center"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif">
          SignIn
        </h1>
        <p className="text-base md:text-lg font-semibold font-serif">
          Please signin your account
        </p>
        <Input
          type="name"
          label="Name"
          variant="flat"
          name="name"
          value={newUser.name}
          placeholder="Enter your name"
          labelPlacement="outside"
          size="lg"
          radius="sm"
          className="border border-gray-400 rounded-md"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          value={newUser.email}
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
          value={newUser.password}
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
          Sing In
        </Button>
      </form> */}
      <CreateForm
        type={true}
        name={newUser.name}
        email={newUser.email}
        password={newUser.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default page;
