import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <h1>
        <Link
          href={"/login"}
          style={{
            color: router.pathname === "/login" ? "black" : "blue",
          }}
        >
          Login
        </Link>
        <Link
          href={"/"}
          style={{
            color: router.pathname === "/" ? "black" : "blue",
          }}
        >
          Index
        </Link>
      </h1>
    </>
  );
};

export default Header;
