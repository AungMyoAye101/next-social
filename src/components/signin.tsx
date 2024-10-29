import React from "react";
interface HandlerProps {
  changeHandler: (e: any) => void;
  submitHandler: (e: any) => void;
}
const Signin = ({ changeHandler, submitHandler }: HandlerProps) => {
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
        onChange={changeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
        onChange={changeHandler}
      />
      <button type="submit" className="bg-blue-400 rounded-md px-4 py-1">
        Sign Up
      </button>
    </form>
  );
};

export default Signin;
