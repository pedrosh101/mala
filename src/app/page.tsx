"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 13 ? 0 : prevImage + 1));
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main className="flex">
        <Navbar isProjetosPage={false} />
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={`/${currentImage}.jpg`}
            alt="Background image"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </main>
    </>
  );
}
