"use client";

import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function Performance() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center align-middle min-h-screen items-center text-2xl font-courier bg-no-repeat bg-top text-white">
        <div className="flex flex-col text-center space-y-10">
          <Link href="/performance/COVID">
            <h1>COVID19</h1>
          </Link>
          <h1>Desenho Livre</h1>
          <h1>Man Don&lsquo;t Cry?</h1>
        </div>
      </main>
    </>
  );
}

export default Performance;
