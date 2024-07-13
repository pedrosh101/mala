"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import useIsMobile from "./hooks/useIsMobile";

export default function Home() {
  const allImages = [
    "/0.jpg",
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
    "/16.jpg",
    "/17.jpg",
    "/18.jpg",
    "/19.jpg",
    "/20.jpg",
  ];

  const mobileImages = [
    "/0.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/8.jpg",
    "/10.jpg",
    "/11.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
    "/18.jpg",
    "/19.jpg",
    "/20.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        return (prevImage === (isMobile ? mobileImages.length - 1 : allImages.length - 1) ? 0 : prevImage + 1);
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, [isMobile]);

  const imagesToUse = isMobile ? mobileImages : allImages;

  return (
    <>
      <main className="flex">
        <Navbar isProjetosPage={false} />
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={imagesToUse[currentImage]}
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
