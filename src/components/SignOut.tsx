"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <button
      className="px-4 py-2 rounded-full bg-gray-300"
      onClick={() => signOut()}
    >
      SignOut
    </button>
  );
};

export default SignOut;
