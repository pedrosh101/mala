"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";

function Performance() {
  return (
    <>
      <div>
        <Navbar />
        <main className="flex justify-center align-middle items-center text-2xl font-courier text-white">
          <div className="flex flex-col text-center space-y-10 min-h-screen justify-center">
              <h1 className="hover:text-red-50">Canson A3 90g</h1>
            <h1 className="hover:text-red-50">Canson A3 black 150g</h1>
            <Link href="/drawings/abstract/strathmore">
            <h1 className="hover:text-red-50">Strathmore Toned Gray 118g</h1>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Performance;
