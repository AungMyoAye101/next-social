"use client";

import { Button, Input } from "@nextui-org/react";

import React, { useState } from "react";

const page = () => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (name.length < 3 && email.length < 0 && password.length < 6) {
      alert("User Failed to create!");
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
      <form
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
          value={name}
          placeholder="Enter your name"
          labelPlacement="outside"
          size="lg"
          radius="sm"
          className="border border-gray-400 rounded-md"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          value={email}
          variant="flat"
          placeholder="Enter your email"
          labelPlacement="outside"
          size="lg"
          radius="sm"
          className="border border-gray-400 rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          variant="flat"
          placeholder="Enter your passwords"
          labelPlacement="outside"
          size="lg"
          radius="sm"
          className="border border-gray-400 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color="primary" radius="sm" variant="shadow" type="submit">
          Sing In
        </Button>
      </form>
    </section>
  );
};

export default page;
