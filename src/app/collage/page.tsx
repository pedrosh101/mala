"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Work from "@/app/components/work";

function Malaismo() {
  const ptitrc = [
    {
      title: "",
      images: [
        {
          url: "/Collage/pt-it-rc/1.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/2.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/3.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/4.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/5.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/6.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/7.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/8.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/9.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/10.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/11.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/12.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/13.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/14.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/15.jpg",
          title: "",
        },
        {
          url: "/Collage/pt-it-rc/16.jpg",
          title: "",
        },
      ],
    },
  ];

  const berlim = [
    {
      title: "",
      images: [
        {
          url: "/Collage/berlim/1.jpg",
          title: "",
        },
        {
          url: "/Collage/berlim/2.jpg",
          title: "",
        },
        {
          url: "/Collage/berlim/3.jpg",
          title: "",
        },
        {
          url: "/Collage/berlim/4.jpg",
          title: "",
        },
        {
          url: "/Collage/berlim/5.jpg",
          title: "",
        },
        {
          url: "/Collage/berlim/6.jpg",
          title: "",
        },
      ],
    },
  ];

  const espanha = [
    {
      title: "",
      images: [
        {
          url: "/Collage/espanha/1.jpg",
          title: "",
        },
        {
          url: "/Collage/espanha/2.jpg",
          title: "",
        },
        {
          url: "/Collage/espanha/3.jpg",
          title: "",
        },
        {
          url: "/Collage/espanha/4.jpg",
          title: "",
        },
        {
          url: "/Collage/espanha/5.jpg",
          title: "",
        },
        {
          url: "/Collage/espanha/6.jpg",
          title: "",
        },
        {
          url: "/Collage/espanha/7.jpg",
          title: "",
        },
        {
          url: "/Collage/espanha/8.jpg",
          title: "",
        },
      ],
    },
  ];

  const brasil = [
    {
      title: "",
      images: [
        {
          url: "/Collage/brasil/1.jpg",
          title: "",
        },
        {
          url: "/Collage/brasil/2.jpg",
          title: "",
        },
        {
          url: "/Collage/brasil/3.jpg",
          title: "",
        },
        {
          url: "/Collage/brasil/4.jpg",
          title: "",
        },
        {
          url: "/Collage/brasil/5.jpg",
          title: "",
        },
        {
          url: "/Collage/brasil/6.jpg",
          title: "",
        },
        {
          url: "/Collage/brasil/7.jpg",
          title: "",
        },
        {
          url: "/Collage/brasil/8.jpg",
          title: "",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(ptitrc);

  const handleButtonClick = (images: any) => {
    setSelectedCategory(images);
  };

  return (
    <>
      <Navbar />
      <div className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 w-full justify-center space-x-10 font-courier md:mt-0 mt-6 px-6">
        <button
          onClick={() => handleButtonClick(ptitrc)}
          className="hover:text-red-50"
        >
          2021-2-3 Portugal-Italia-Republica Checka
        </button>
        <button
          onClick={() => handleButtonClick(berlim)}
          className="hover:text-red-50"
        >
          2023, Summer. Berlim - Lisboa
        </button>
        <button
          onClick={() => handleButtonClick(espanha)}
          className="hover:text-red-50"
        >
          2023-4 Espanha
        </button>
        <button
          onClick={() => handleButtonClick(brasil)}
          className="hover:text-red-50"
        >
          2024, fevereiro, Brasil. Bahia, São Paulo, Rio de Janeiro
        </button>
      </div>

      {selectedCategory.map((subCategory, index) => (
        <div key={index} className="w-full text-center font-courier">
          <h1 className="mt-8 mb-2">{subCategory.title}</h1>
          <Work imageUrls={subCategory.images} />
        </div>
      ))}
    </>
  );
}

export default Malaismo;
