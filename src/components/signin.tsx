import React from "react";

const Signin = () => {
  return (
    <form className="max-w-80 flex flex-col gap-4 mx-auto mt-10 p-4 shadow-md rounded-md border border-gray-300">
      <h1>Sign in Form</h1>
      <input
        type="text"
        placeholder="name"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
      <input
        type="email"
        placeholder="email"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
      <input
        type="password"
        placeholder="password"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
      <button className="bg-blue-400 rounded-md px-4 py-1">Sign Up</button>
    </form>
  );
};

export default Signin;
