"use client";

import CreateForm from "@/components/ui/CreateForm";
import { Button, Input } from "@nextui-org/react";
import Email from "next-auth/providers/email";
import React, { useState } from "react";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
      <CreateForm
        type={false}
        email={user.email}
        password={user.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default page;
