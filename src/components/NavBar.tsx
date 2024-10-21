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
  Link,
} from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <h1 className="font-bold text-3xl font-serif">Social</h1>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link
            className="text-2xl font-semibold font-serif text-gray-500"
            href="#"
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
        <Button color="primary" radius="full" variant="shadow">
          Sign up
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
