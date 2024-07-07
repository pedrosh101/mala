"use client";

import React from "react";
import Navbar from "../components/navbar";
import Work from "@/app/components/work";

function Available() {
  const images = [
    {
      url: "/Inside/4.jpg",
      ano: "2024",
      title: "Summer is coming",
      material: "oil on linen",
      size: "120x100",
    },
    {
      url: "/Inside/3.jpg",
      ano: "2024",
      title: "Untitled",
      description: "spray, esmalte acrílico on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/1.jpg",
      ano: "2024",
      title: "The bridge",
      description: "acrílico, spray, esmalte, folhas de ouro on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/2.jpg",
      ano: "2024",
      title: 'Bright Darkness (De "black and white" series)',
      description: "acrílico, spray, esmalte, oil on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/13.jpg",
      ano: "2024",
      title: "Untitled #1 (Série Algarve)",
      description: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/12.jpg",
      ano: "2024",
      title: "Untitled #2 (Série Algarve)",
      description: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/11.jpg",
      ano: "2024",
      title: "Untitled #3 (Série Algarve)",
      description: "mix media",
      size: "120x120",
    },
    {
      url: "/Inside/49.jpg",
      ano: "2024",
      title: "Untitled #5 (Série Algarve)",
      description: "esmalte, spray, acrílico",
      size: "100x100",
    },
    {
      url: "/Inside/10.jpg",
      ano: "2024",
      title: "Untitled #6 (Série Algarve)",
      description: "spray, acrílico, gesso, pastel, oil on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/48.jpg",
      ano: "2024",
      title: "Olive (Série Algarve)",
      description: "spray, esmalte, acrílico",
      size: "100x100",
    },
    {
      url: "/Inside/9.jpg",
      ano: "2024",
      title: "Untitled #7 (Série Algarve)",
      description: "acrílico, oil, pastel, gesso on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/6.jpg",
      ano: "2024",
      title: "Untitled",
      description: "spray on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/7.jpg",
      ano: "2024",
      title: "Untitled (folha de ouro e tinta esmalte)",
      description: "9 canvas 35x25",
      size: "100x100",
    },
    {
      url: "/Inside/5.jpg",
      ano: "2024",
      title: "Untitled",
      description: "Spray acrílico e grafiti on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/8.jpg",
      ano: "2024",
      title: "Basic Black (Série Algarve)",
      description: "acrílico, spray, grafite, carvão, oil and oil stickers on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/20.jpg",
      ano: "2023",
      title: "Caterpillar",
      description: "oil on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/19.jpg",
      ano: "2023",
      title: "Rehab",
      description: "oil on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/21.jpg",
      ano: "2023",
      title: "Carnaval",
      description: "oil on canvas",
      size: "90x60",
    },
  ];

  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="w-full text-center font-realCourier">
        <Work imageUrls={images} />
      </div>
    </>
  );
}

export default Available;
