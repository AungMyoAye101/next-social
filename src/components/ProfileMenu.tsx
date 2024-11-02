"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const ProfileMenu = () => {
  const { data: session } = useSession();
  return (
    <section className=" bg-gray-50 flex flex-col gap-2 px-4 py-8 rounded-lg shadow-md absolute top-14 z-10 w-80  -right-4 border border-gray-400 ">
      <div className="px-4 py-2 rounded shadow-md">{session?.user?.name}</div>
      <div className="px-4 py-2 rounded shadow-md">{session?.user?.email}</div>
      <div className="px-4 py-2 rounded shadow-md">Dark Mode</div>
      <div className="px-4 py-2 rounded shadow-md">Update Profile</div>
      <div
        className="px-4 py-2 rounded shadow-md text-red-400 cursor-pointer"
        onClick={() => signOut()}
      >
        Log Out
      </div>
    </section>
  );
};

export default ProfileMenu;
