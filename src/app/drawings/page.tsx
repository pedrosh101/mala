"use client";

import React from "react";
import Navbar from "./../components/navbar";
import Work from "@/app/components/work";

function Drawings() {
  const abstract = [
    {
      title: "Abstract - Strathmore Toned Gray 118g",
      images: [
        "/drawings/strathmore/1.jpg",
        "/drawings/strathmore/2.jpg",
        "/drawings/strathmore/3.jpg",
        "/drawings/strathmore/4.jpg",
        "/drawings/strathmore/5.jpg",
        "/drawings/strathmore/6.jpg",
        "/drawings/strathmore/7.jpg",
        "/drawings/strathmore/8.jpg",
      ],
    },
    {
      title: "Abstract - On linen",
      images: [
        "/drawings/onlinen/1.jpg",
        "/drawings/onlinen/2.jpg",
        "/drawings/onlinen/3.jpg",
      ],
    },

  ];



  return (
    <>
      <Navbar />
      {abstract.map((subCategory, index) => (
        <div key={index} className="w-full text-center font-courier">
          <h1 className="mt-8 mb-2">{subCategory.title}</h1>
          <Work imageUrls={subCategory.images} />
        </div>
      ))}
    </>
  );
}

export default Drawings;
