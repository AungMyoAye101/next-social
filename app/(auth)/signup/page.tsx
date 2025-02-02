import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <section className="page_padding flex-1 ">
      <form
        action=""
        className="flex flex-col gap-4 py-8 px-8 bg-purple-400 rounded-lg shadow-md dark:shadow-none max-w-80  mx-auto mt-14  "
      >
        <h2 className="font-serif font-semibold font-2xl text-center">
          Sign Up
        </h2>
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
        <div className="flex justify-between items-center">
          <p className="text-xs font-serif">Already have an account ?</p>
          <Link href={"/login"} className="text-netural-50 hover:text-blue-400">
            Login
          </Link>
        </div>
        <button className="bg-blue-300 rounded-full px-4 py-1">Sign up</button>
      </form>
    </section>
  );
};

export default Signup;
