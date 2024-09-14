import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav>
      <div>
        <Link className="m-2 badge hover p-4" href={"/"}>
          Home
        </Link>
        <Link className="m-2 badge hover p-4" href={"/users"}>
          users
        </Link>
        <Link className="m-2 badge hover p-4" href={"/products"}>
          products
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
