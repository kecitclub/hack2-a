"use client";

import Image from "next/image";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react"; // import useState, useEffect for token management
import { siteConfig } from "@/config/site";

import logoColored from "@/public/assets/images/logo-colored.svg";

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Or use cookies if you prefer
    if (token) {
      setIsAuthenticated(true); // Token exists, user is authenticated
    } else {
      setIsAuthenticated(false); // No token, user is not authenticated
    }
  }, []); // Empty dependency array means it runs once when the component mounts

  // Define the links to be displayed in the navbar based on the authentication state
  const navItems = isAuthenticated
    ? [{ label: "Profile", href: "/dashboard" }]
    : [
        { label: "Login", href: "/login" },
        { label: "Register", href: "/register" },
      ];

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="fixed z-10 ">
      <NavbarContent className="basis-1/5 sm:basis-full flex justify-between ">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={logoColored} alt="Logo" width={20} />
            <span className="text-[#f63e3e] -ml-[2px] font-semibold">
              asobas
            </span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ul className="hidden lg:flex gap-4 justify-start ">
            {navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-sm"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`${
                  index === 2
                    ? "text-black"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "text-[#f63e3e]"
                      : "text-black"
                } font-medium tracking tight text-md`}
                href={`${item.href}`}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
