"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
  Navbar,
} from "flowbite-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

function NavbarAuth({ session }) {
  console.log("I am from NavbarAuth client component");
  const pathname = usePathname();
  const [sessionState, setSessionState] = useState(session);

  useEffect(() => {
    setSessionState(sessionState);
  }, [sessionState]);

  const handleSignOut = async (event) => {
    console.log("We are calling from signout");
    const response = await signOut({
      callbackUrl: "http://localhost:3000/auth/login",
    });
    // redire
    console.log({ response });
  };

  const handleUserLinkClick = (event) => {
    event.preventDefault();
  };

  // console.log({ session });
  return (
    <>
      {sessionState ? (
        <Dropdown label={"JK"} arrowIcon={false} inline>
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
        </Dropdown>
      ) : (
        <Navbar.Link as={Link} href="/auth/login">
          Login
        </Navbar.Link>
      )}
    </>
  );
}

export default NavbarAuth;
