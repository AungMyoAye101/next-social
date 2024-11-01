"use server";

import { signOut } from "@/auth";
import React from "react";

const SignOutBtn = () => {
  return <button onClick={() => signOut()}>Log Out</button>;
};

export default SignOutBtn;
