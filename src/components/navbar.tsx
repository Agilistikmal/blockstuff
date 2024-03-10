"use client";

import Link from "next/link";
import Button from "./button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="bg-transparent">
        <div className="w-full max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-8 py-5">
          <div className="flex items-center gap-4 w-max mx-auto md:mr-auto">
            <Link
              href={"/"}
              className={`${pathname == "/" && "text-flame font-bold"}`}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className={`${pathname == "/about" && "text-flame font-bold"}`}
            >
              About
            </Link>
          </div>
          <div className="w-max mx-auto">
            <Link href={"/"}>
              <h1 className="font-black text-3xl border-4 border-platinum px-5">
                BS
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4 w-max mx-auto md:ml-auto">
            <Link
              href={"/store"}
              className={`${pathname == "/store" && "text-flame font-bold"}`}
            >
              Store
            </Link>
            <Link
              href={"/register"}
              className={`${
                pathname == "/register" && "text-flame font-bold"
              } inline md:hidden lg:inline`}
            >
              Create Store
            </Link>
            <Link
              href={"/login"}
              className={`${pathname == "/login" && "text-flame font-bold"}`}
            >
              <Button type={1} primaryBg="bg-flame" secondaryBg="bg-flame/70">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
