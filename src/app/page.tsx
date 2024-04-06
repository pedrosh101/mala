"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 8 ? 1 : prevImage + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main
        className="flex justify-between min-h-screen sm:text-5xl text-4xl bg-cover font-harbour bg-no-repeat bg-top text-white"
        style={{
          backgroundImage: `url('/${currentImage}.jpg')`,
        }}
      >
        <Navbar />
      </main>
    </>
  );
}
