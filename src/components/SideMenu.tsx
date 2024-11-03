"use client";

import { Avatar } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMoon, FaPager } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const SideMenu = () => {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col gap-2 px-4 py-6 rounded-md shadow-md border border-gray-300">
      <Link href={"/"} className="side-menu">
        <Avatar
          isBordered
          radius="full"
          size="sm"
          src="https://nextui.org/avatars/avatar-1.png"
        />
        <p className=" font-semibold ">{session?.user?.name}</p>
      </Link>
      <Link href={"/"} className="side-menu">
        <MdEmail className="text-2xl" />
        <p className=" font-semibold ">{session?.user?.email}</p>
      </Link>
      <Link href={"/"} className="side-menu">
        <FaMoon className="text-xl" />
        <p className=" font-semibold ">Dark Mode</p>
      </Link>
      <Link href={"/friend"} className="side-menu">
        <FaPeopleGroup className="text-2xl " />
        <p className=" font-semibold ">Frends</p>
      </Link>
      <Link href={"/"} className="side-menu">
        <FaPager className="text-2xl" />
        <p className=" font-semibold ">Feed</p>
      </Link>
      <button className="side-menu text-rose-400" onClick={() => signOut()}>
        <IoMdLogOut className="text-2xl " />
        <p className=" font-semibold ">Log out</p>
      </button>
    </section>
  );
};

export default SideMenu;
