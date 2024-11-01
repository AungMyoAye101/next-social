"use client";

import { signOut } from "@/auth";
import { useSession } from "next-auth/react";
import React from "react";
import SignOutBtn from "./UI/SignOutBtn";

const ProfileMenu = () => {
  const { data: session } = useSession();
  return (
    <section className=" bg-neutral-100 flex flex-col gap-2 px-4 py-8 rounded-md absolute top-14 z-10 w-80  -right-4 ">
      <div className="px-4 py-2 rounded shadow-md">{session?.user?.name}</div>
      <div className="px-4 py-2 rounded shadow-md">{session?.user?.email}</div>
      <div className="px-4 py-2 rounded shadow-md">Dark Mode</div>
      <div className="px-4 py-2 rounded shadow-md">Update Profile</div>
      <div className="px-4 py-2 rounded shadow-md text-red-400 cursor-pointer">
        <SignOutBtn />
      </div>
    </section>
  );
};

export default ProfileMenu;
