import Signin from "@/components/signin";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/lib/model/User";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = async () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newUser = await res.json();
    console.log(newUser);
  };

  return (
    <div>
      <Signin changeHandler={changeHandler} submitHandler={submitHandler} />
    </div>
  );
};

export default page;
