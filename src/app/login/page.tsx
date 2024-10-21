import { Button, Input } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <section className="max-w-xl mx-auto py-10 px-4">
      {" "}
      <form
        action=""
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
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          labelPlacement="outside"
          size="lg"
          radius="sm"
        />
        <Input
          type="password"
          label="Password"
          variant="bordered"
          placeholder="Enter your passwords"
          labelPlacement="outside"
          size="lg"
          radius="sm"
        />
        <Button color="primary" radius="full" variant="shadow" size="lg">
          Login
        </Button>
      </form>
    </section>
  );
};

export default page;
