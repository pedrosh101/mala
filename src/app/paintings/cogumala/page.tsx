"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Cogumala() {
  const insideCogu = [
    {
      title: "Tamanho não é documento",
      images: [
        "/paintings/cogumala/inside/1.jpg",
        "/paintings/cogumala/inside/2.jpg",
        "/paintings/cogumala/inside/3.jpg",
        "/paintings/cogumala/inside/4.jpg",
      ],
    },
    {
      title: "Até onde meus braços alcançarem",
      images: [
        "/paintings/cogumala/inside/5.jpg",
        "/paintings/cogumala/inside/6.jpg",
        "/paintings/cogumala/inside/7.jpg",
        "/paintings/cogumala/inside/8.jpg",
      ],
    },
    {
      title: "Até onde meus braços alcançarem",
      images: [
        "/paintings/cogumala/inside/9.jpg",
        "/paintings/cogumala/inside/10.jpg",
        "/paintings/cogumala/inside/11.jpg",
        "/paintings/cogumala/inside/12.jpg",
        "/paintings/cogumala/inside/13.jpg",
        "/paintings/cogumala/inside/14.jpg",
        "/paintings/cogumala/inside/15.jpg",
        "/paintings/cogumala/inside/16.jpg",
        "/paintings/cogumala/inside/17.jpg",
        "/paintings/cogumala/inside/18.jpg",
        "/paintings/cogumala/inside/19.jpg",
        "/paintings/cogumala/inside/20.jpg",
        "/paintings/cogumala/inside/21.jpg",
        "/paintings/cogumala/inside/22.jpg",
        "/paintings/cogumala/inside/23.jpg",
      ],
    },
    {
      title: "Cogumelos Babilônicos",
      images: [
        "/paintings/cogumala/inside/24.jpg",
        "/paintings/cogumala/inside/25.jpg",
        "/paintings/cogumala/inside/26.jpg",
        "/paintings/cogumala/inside/27.jpg",
        "/paintings/cogumala/inside/28.jpg",
        "/paintings/cogumala/inside/29.jpg",
        "/paintings/cogumala/inside/30.jpg",
        "/paintings/cogumala/inside/31.jpg",
        "/paintings/cogumala/inside/32.jpg",

      ],
    },
    {
      title: "CoguOrixas",
      images: [
        "/paintings/cogumala/inside/33.jpg",
        "/paintings/cogumala/inside/34.jpg",
        "/paintings/cogumala/inside/35.jpg",
        "/paintings/cogumala/inside/36.jpg",
        "/paintings/cogumala/inside/37.jpg",
        "/paintings/cogumala/inside/38.jpg",
        "/paintings/cogumala/inside/39.jpg",
        "/paintings/cogumala/inside/40.jpg",
      ],
    },
    {
      title: "Murals - Hospedaria Lilás, Chapada Diamantina, 2020",
      images: [
        "/paintings/cogumala/inside/41.jpg",
        "/paintings/cogumala/inside/42.jpg",
        "/paintings/cogumala/inside/43.jpg",
        "/paintings/cogumala/inside/44.jpg",
        "/paintings/cogumala/inside/45.jpg",
        "/paintings/cogumala/inside/46.jpg",
        "/paintings/cogumala/inside/47.jpg",
      ],
    },
    {
      title: "Murals - Pousada Vidavibra, Itamambuca, 2021",
      images: [
        "/paintings/cogumala/inside/48.jpg",
        "/paintings/cogumala/inside/49.jpg",
        "/paintings/cogumala/inside/50.jpg",
        "/paintings/cogumala/inside/51.jpg",
        "/paintings/cogumala/inside/52.jpg",
        "/paintings/cogumala/inside/53.jpg",
      ],
    },
  ];

  const outsideCogu = [
    {
      title: "",
      images: [
        "/paintings/cogumala/outside/1.jpg",
        "/paintings/cogumala/outside/2.jpg",
        "/paintings/cogumala/outside/3.jpg",
        "/paintings/cogumala/outside/4.jpg",
      ],
    },
    {
      title: "Cogumala Retirantes - Maracanã",
      images: [
        "/paintings/cogumala/outside/5.jpg",
        "/paintings/cogumala/outside/6.jpg",
        "/paintings/cogumala/outside/7.jpg",
        "/paintings/cogumala/outside/8.jpg",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(insideCogu);

  const handleButtonClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center space-x-8 font-courier md:mt-0 mt-6">
        <button onClick={() => handleButtonClick(insideCogu)}>Inside</button>
        <button onClick={() => handleButtonClick(outsideCogu)}>Outside</button>
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

export default Cogumala;
