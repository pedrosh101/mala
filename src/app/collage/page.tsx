"use client";

import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function Collage() {
  return (
    <>
      <div>
        <Navbar />
        <main className="flex justify-center align-middle items-center text-2xl font-courier text-white px-4">
          <div className="flex flex-col text-center space-y-10 min-h-screen justify-center">
            <Link href="/collage/pt-it-rc">
              <h1 className="hover:text-red-50">2021-2-3 Portugal-Italia-Republica Checka</h1>
            </Link>
            <Link href="/collage/berlim-lisboa">
              <h1 className="hover:text-red-50">2023, Summer. Berlim - Lisboa</h1>
            </Link>
            <Link href="/collage/espanha">
              <h1 className="hover:text-red-50">2023-4 Espanha</h1>
            </Link>
            <Link href="/collage/brasil">
              <h1 className="hover:text-red-50">2024, fevereiro, Brasil. Bahia, São Paulo, Rio de Janeiro</h1>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Collage;
