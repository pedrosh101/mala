"use client";

import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function Performance() {
  return (
    <>
      <div>
        <Navbar />
        <main className="flex justify-center align-middle items-center text-2xl font-courier text-white">
          <div className="flex flex-col text-center space-y-10 min-h-screen justify-center">
            <Link href="/performance/COVID">
              <h1 className="hover:text-red-50">COVID19</h1>
            </Link>
            <Link href="/performance/desenho-livre">
              <h1 className="hover:text-red-50">Desenho Livre</h1>
            </Link>
            <Link href="/performance/mandontcry">
              <h1 className="hover:text-red-50">Man Don&lsquo;t Cry?</h1>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Performance;
