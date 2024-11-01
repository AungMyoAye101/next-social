"use client";

import { auth } from "@/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

export default function Nav() {
  const { data: session } = useSession();

  const [profileToggle, setProfileToggle] = useState(false);

  console.log(session?.user);
  return (
    <Navbar position="sticky" isBlurred isBordered maxWidth="xl">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex " justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl px-4 py-2 hover:bg-blue-500 rounded"
          >
            Feed
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl px-4 py-2 hover:bg-blue-500 rounded"
          >
            Friends
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl px-4 py-2 hover:bg-blue-500 rounded"
          >
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-2xl px-4 py-2 hover:bg-blue-500 rounded"
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <>
            <NavbarItem className="hidden lg:flex gap-2 relative">
              <div
                className="size-10 rounded-full border border-blue-500 cursor-pointer"
                onClick={() => setProfileToggle((pre) => !pre)}
              ></div>

              {profileToggle && <ProfileMenu />}
            </NavbarItem>
          </>
        ) : (
          <>
            {" "}
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" variant="solid" href="/signup">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
