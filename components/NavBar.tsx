import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-2 shadow-md bg-white  fixed top-0 left-0 right-0 z-50">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold ">Social </h1>
      </Link>
      <div className="flex items-center gap-4 ">
        <Link href={"/login"} className="bg-blue-400 px-4 py-2 rounded-md">
          Login
        </Link>
        <Link href={"/signup"} className="bg-blue-400 px-4 py-2 rounded-md">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
