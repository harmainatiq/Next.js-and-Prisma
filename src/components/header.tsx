import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href={"/"} className="text-white text-2xl font-bold">
          MY BLOGS
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href={"/blogs"} className="text-white hover:underline">
              BLOGS
            </Link>
          </li>
          <li>
            <Link
              href={"/api/auth/signin"}
              className="text-white hover:underline"
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
