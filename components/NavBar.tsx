import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-2 shadow-md bg-white ">
      <div>
        <h1 className="text-2xl font-bold ">Social </h1>
      </div>
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
