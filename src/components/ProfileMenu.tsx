"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";

const ProfileMenu = () => {
  const { data: session } = useSession();
  return (
    <Dropdown showArrow radius="sm" shouldBlockScroll={false}>
      <DropdownTrigger>
        <Image
          src={"/profile.jpg"}
          width={40}
          height={40}
          alt="User Profile image"
          className=" size-10 rounded-full border border-gray-100 cursor-pointer "
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="name"
          startContent={
            <Image
              src={"/profile.jpg"}
              width={20}
              height={20}
              alt="user profile"
              className=" size-8 rounded-full"
            />
          }
        >
          <span className="text-lg font-semibold">{session?.user?.name}</span>
        </DropdownItem>
        <DropdownItem
          key="email"
          startContent={<MdEmail className="text-large" />}
        >
          {session?.user?.email}
        </DropdownItem>
        <DropdownItem
          key="themes"
          startContent={<FaMoon className="text-large" />}
        >
          Dark Mode
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          startContent={<IoMdLogOut className="text-large" />}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileMenu;
