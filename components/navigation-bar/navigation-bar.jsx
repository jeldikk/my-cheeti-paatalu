import Link from "next/link";
import {
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
} from "flowbite-react";
import { Navbar } from "flowbite-react";
import NavbarAuth from "./navbar-auth";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth/auth.config";
import { headers } from "next/headers";

async function NavigationBar() {
  // const headers = headers();
  const session = await getServerSession(authOptions);
  console.log({ session });
  console.log("I am from NavigationBar Server Component");
  return (
    <header className="w-2/3 mx-auto">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Cheeti Paatalu
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="/cheeti-paatalu/create" active>
            Add Cheeti Paata
          </NavbarLink>
          {session ? (
            <NavbarLink as={Link} href="/cheeti-paatalu">
              Cheeti Paatalu
            </NavbarLink>
          ) : null}
          <NavbarAuth session={session} />
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
