import { Button, Input } from "@nextui-org/react";
import { div } from "framer-motion/client";

import React, { useState } from "react";

interface NewUserCreateProps {
  type: Boolean;
  name?: string;
  email?: string;
  password?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: any) => void;
  errorMessage?: string;
  error?: boolean;
}

const CreateForm = ({
  type,
  name,
  email,
  password,
  handleChange,
  handleSubmit,
  errorMessage,
  error,
}: NewUserCreateProps) => {
  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-4 border border-gray-300 rounded-lg shadow-md p-4 items-center"
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif">
        {type ? "Sing Up" : "Login"}
      </h1>
      <p className="text-base md:text-lg font-semibold font-serif">
        Please {type ? "Sing Up" : "Login"} your account
      </p>
      {type && (
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
          onChange={handleChange}
        />
      )}

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
        onChange={handleChange}
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
        onChange={handleChange}
      />
      {error && <div>{errorMessage}</div>}

      <Button color="primary" radius="sm" variant="shadow" type="submit">
        {type ? "Sing Up" : "Login"}
      </Button>
    </form>
  );
};

export default CreateForm;
