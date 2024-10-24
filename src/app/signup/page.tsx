"use client";

import CreateForm from "@/components/ui/CreateForm";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const page = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, email, password } = newUser;

    if (name.length < 3 && email.length < 0 && password.length < 6) {
      setError(true);
      seterrorMessage("Failed to create user");
      return;
    }
    try {
      const res = await fetch("api/user/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-xl mx-auto py-10 px-4">
      <CreateForm
        type={true}
        name={newUser.name}
        email={newUser.email}
        password={newUser.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        errorMessage={errorMessage}
      />
    </section>
  );
};

export default page;
