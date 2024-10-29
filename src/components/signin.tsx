import React from "react";

export const submitHandler = async (data: FormData) => {
  "use server";
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const user = { name, email, password };
  const res = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const newUser = await res.json();
  console.log(newUser);
};

const Signin = () => {
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
