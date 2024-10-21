import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
} from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand className="flex gap-2 px-4">
        <Image src="/sociallogo.svg" alt="scoial logo" />
        <h1 className="font-bold text-3xl font-serif">Social</h1>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex flex-1 gap-4 " justify="center">
        <NavbarItem>
          <Link
            className="text-2xl font-semibold font-serif text-gray-500"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-2xl font-semibold font-serif text-gray-500"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-2xl font-semibold font-serif text-gray-500"
          >
            Friends
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button href="/login" radius="sm" variant="ghost" as={Link}>
          Login
        </Button>
        <Button
          href="/signin"
          color="primary"
          radius="sm"
          variant="shadow"
          as={Link}
        >
          Sign Up
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
