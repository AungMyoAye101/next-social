import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-4 py-8 px-8 bg-gray-200 rounded-md max-w-80  mx-auto mt-14  "
    >
      <h2 className="font-serif font-semibold font-2xl text-center">Sign Up</h2>
      <div className="">
        <input
          type="text"
          placeholder="name"
          id="name"
          className="input_style"
        />
      </div>
      <div className="">
        <input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          className="input_style"
        />
      </div>{" "}
      <div className="">
        <input
          type="password"
          placeholder="password"
          id="password"
          className="input_style"
        />
      </div>
      <div className="flex justify-between ">
        <p className="text-xs">Already have an account ?</p>
        <Link href={"/login"} className="text-blue-500">
          Login
        </Link>
      </div>
      <button className="bg-blue-400 rounded-full px-4 py-1">Sign up</button>
    </form>
  );
};

export default Signup;
