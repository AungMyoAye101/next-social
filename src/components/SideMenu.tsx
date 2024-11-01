import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFreebsd, FaMoon, FaPager } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const SideMenu = () => {
  return (
    <section className="flex flex-col gap-2 px-4 py-6 rounded-md">
      <Link
        href={"/"}
        className="flex gap-3 px-4 py-1 items-center shadow-md rounded-md"
      >
        <Image
          src={"/"}
          width={20}
          height={20}
          alt="icons"
          className="rounded-full "
        />
        <p className=" font-semibold ">Billy Maximoff</p>
      </Link>
      <Link
        href={"/"}
        className="flex gap-3 px-4 py-1 items-center shadow-md rounded-md"
      >
        <MdEmail className="text-2xl" />
        <p className=" font-semibold ">email@gmail.com</p>
      </Link>
      <Link
        href={"/"}
        className="flex gap-3 px-4 py-1 items-center shadow-md rounded-md"
      >
        <FaMoon className="text-xl" />
        <p className=" font-semibold ">Dark Mode</p>
      </Link>
      <Link
        href={"/"}
        className="flex gap-3 px-4 py-1 items-center shadow-md rounded-md"
      >
        <FaPeopleGroup className="text-2xl " />
        <p className=" font-semibold ">Frends</p>
      </Link>
      <Link
        href={"/"}
        className="flex gap-3 px-4 py-1 items-center shadow-md rounded-md"
      >
        <FaPager className="text-2xl" />
        <p className=" font-semibold ">Feed</p>
      </Link>
      <Link
        href={"/"}
        className="flex gap-3 px-4 py-1 items-center shadow-md rounded-md"
      >
        <IoMdLogOut className="text-2xl " />
        <p className=" font-semibold ">Log out</p>
      </Link>
    </section>
  );
};

export default SideMenu;
