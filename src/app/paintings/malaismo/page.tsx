"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Malaismo() {
  const inside = [
    "/paintings/malaismo/inside/1.jpg",
    "/paintings/malaismo/inside/2.jpg",
    "/paintings/malaismo/inside/3.jpg",
    "/paintings/malaismo/inside/4.jpg",
    "/paintings/malaismo/inside/5.jpg",
    "/paintings/malaismo/inside/6.jpg",
    "/paintings/malaismo/inside/7.jpg",
    "/paintings/malaismo/inside/8.jpg",
    "/paintings/malaismo/inside/9.jpg",
    "/paintings/malaismo/inside/10.jpg",
    "/paintings/malaismo/inside/11.jpg",
    "/paintings/malaismo/inside/12.jpg",
    "/paintings/malaismo/inside/13.jpg",
    "/paintings/malaismo/inside/14.jpg",
  ];

  const outside = [
    "/paintings/malaismo/outside/1.jpg",
    "/paintings/malaismo/outside/2.jpg",
    "/paintings/malaismo/outside/3.jpg",
    "/paintings/malaismo/outside/4.jpg",
    "/paintings/malaismo/outside/5.jpg",
    "/paintings/malaismo/outside/6.jpg",
    "/paintings/malaismo/outside/7.jpg",
    "/paintings/malaismo/outside/8.jpg",
    "/paintings/malaismo/outside/9.jpg",
    "/paintings/malaismo/outside/10.jpg",
    "/paintings/malaismo/outside/11.jpg",
    "/paintings/malaismo/outside/12.jpg",
    "/paintings/malaismo/outside/13.jpg",
    "/paintings/malaismo/outside/14.jpg",
    "/paintings/malaismo/outside/15.jpg",
    "/paintings/malaismo/outside/16.jpg",
    "/paintings/malaismo/outside/17.jpg",
    "/paintings/malaismo/outside/18.jpg",
    "/paintings/malaismo/outside/19.jpg",
    "/paintings/malaismo/outside/20.jpg",
    "/paintings/malaismo/outside/21.jpg",
    "/paintings/malaismo/outside/22.jpg",

  ];

  const [selectedImages, setSelectedImages] = useState(inside);

  const handleButtonClick = (images: any) => {
    setSelectedImages(images);
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center space-x-8 font-courier md:mt-0 mt-6">
        <button onClick={() => handleButtonClick(inside)}>Inside</button>
        <button onClick={() => handleButtonClick(outside)}>Outside</button>
      </div>
      <Work imageUrls={selectedImages} />
    </>
  );
}

export default Malaismo;
