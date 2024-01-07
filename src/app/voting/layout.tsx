"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const VoteLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className=" ">
      <nav className="bg-white  px-4 py-3 shadow-md md:px-6 ">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-gray-900 ">
              Voting Election
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant={"default"}
              className="rounded bg-black text-white hover:bg-gray-700"
            >
              {pathname === "/voting/new" ? (
                <Link href="/voting">View Elections</Link>
              ) : (
                <Link href="/voting/new">Create Election</Link>
              )}
            </Button>
          </div>
        </div>
      </nav>
      <div className="mt-20 flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};
export default VoteLayout;
