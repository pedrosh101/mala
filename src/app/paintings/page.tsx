"use client";

import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function Paintings() {
  return (
    <>
      <div>
        <Navbar />
        <main className="flex justify-center align-middle items-center text-2xl font-courier text-white">
          <div className="flex flex-col text-center space-y-10 min-h-screen justify-center">
            <Link href="/paintings/abstract">
              <h1 className="hover:text-red-50">Abstract</h1>
            </Link>
            <Link href="/paintings/cogumala">
              <h1 className="hover:text-red-50">Cogumala</h1>
            </Link>
            <Link href="/paintings/malaismo">
              <h1 className="hover:text-red-50">Malaismo</h1>
            </Link>
            <Link href="/paintings/contemporary">
              <h1 className="hover:text-red-50">Contemporary</h1>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Paintings;