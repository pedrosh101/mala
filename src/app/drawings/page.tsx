"use client";

import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function Drawings() {
  return (
    <>
      <div>
        <Navbar />
        <main className="flex justify-center align-middle items-center text-2xl font-courier text-white">
          <div className="flex flex-col text-center space-y-10 min-h-screen justify-center">
            <Link href="/drawings/abstract">
              <h1 className="hover:text-red-50">Abstract</h1>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Drawings;
