"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function NavBar() {
  const { data, status } = useSession();
  return (
    <nav>
      <div className="flex">
        <Link className="m-2 badge hover p-4" href={"/"}>
          Home
        </Link>
        <Link className="m-2 badge hover p-4" href={"/users"}>
          users
        </Link>
        <Link className="m-2 badge hover p-4" href={"/products"}>
          products
        </Link>
        {status === "loading" && <div className="loading" />}

        {status === "authenticated" && (
          <div>
            <p className="badge m-2 p-4">{data.user?.name}</p>
            <Link href={"/api/auth/signout"} className="btn">
              sign out
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href={"/api/auth/signin"} className="btn">
            sign in
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
