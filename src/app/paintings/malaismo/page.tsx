"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Malaismo() {

  const inside = [
    {
      title: "",
      images: [
        {
          url: "/paintings/malaismo/inside/1.jpg",
          title: "_3333 malas_ mix media on canvas 220x80 2021",
        },
        {
          url: "/paintings/malaismo/inside/2.jpg",
          title: "_Back to Black_ oil on canvas 70x50 2023_",
        },
        {
          url: "/paintings/malaismo/inside/3.jpg",
          title: "_Carnaval_ oil on canvas 90x60 2023",
        },
        {
          url: "/paintings/malaismo/inside/4.jpg",
          title: "_Caterpillar_ oil on canvas 90x60 2023",
        },
        {
          url: "/paintings/malaismo/inside/5.jpg",
          title: "_Rehab_ oil on canvas 90x60 2023",
        },
        {
          url: "/paintings/malaismo/inside/6.jpg",
          title: "_Summer_ mix media on canvas 90x60 2023",
        },
        {
          url: "/paintings/malaismo/inside/7.jpg",
          title: "_Titanium_ oil on canvas 70x50 2023",
        },
        {
          url: "/paintings/malaismo/inside/8.jpg",
          title: "_Untitled_ acrilic on canvas 120x70 2022",
        },
        {
          url: "/paintings/malaismo/inside/a.jpg",
          title: "2021. 100x100 mix media 'untitled'",
        },
        {
          url: "/paintings/malaismo/inside/b.jpg",
          title: "2024 - Série Algarve, 'Untitled', mix media - 100x100",
        },
        {
          url: "/paintings/malaismo/inside/c.jpg",
          title: "2024 - Série Algarve, 'Untitled', mix media - 120x120",
        },
        { url: "/paintings/malaismo/inside/10.jpg", title: ""},
        {
          url: "/paintings/malaismo/inside/9.jpg",
          title: "Untitled 100x100 spray on canvas 2022",
        },

      ],
    },
    {
      title: "Gravuras",
      images: [
        {
          url: "/paintings/malaismo/inside/Gravuras/1.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/2.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/3.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/4.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/5.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/6.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/7.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/8.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/inside/Gravuras/9.jpg",
          title: "",
        },

      ],
    },


  ];

  const outside = [
    {
      title: "",
      images: [
        {
          url: "/paintings/malaismo/outside/1.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/2.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/3.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/4.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/5.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/6.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/7.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/8.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/9.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/10.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/11.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/12.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/13.jpg",
          title: "Aracaju 2020",
        },
        {
          url: "/paintings/malaismo/outside/14.jpg",
          title: "Aracaju 2020",
        },
        {
          url: "/paintings/malaismo/outside/15.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/16.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/17.jpg",
          title: "",
        },
        {
          url: "/paintings/malaismo/outside/18.jpg",
          title: "Rio de Janeiro 2020",
        },
        {
          url: "/paintings/malaismo/outside/19.jpg",
          title: "Rio de Janeiro 2020",
        },
        {
          url: "/paintings/malaismo/outside/20.jpg",
          title: "Rio de Janeiro 2020",
        },
        {
          url: "/paintings/malaismo/outside/21.jpg",
          title: "Rio de Janeiro 2020",
        },
        {
          url: "/paintings/malaismo/outside/22.jpg",
          title: "Rio de Janeiro 2020",
        },

      ],
    },


  ];


  const [selectedCategory, setSelectedCategory] = useState(inside);

  const handleButtonClick = (images: any) => {
    setSelectedCategory(images);
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center space-x-8 font-courier md:mt-0 mt-6">
        <button onClick={() => handleButtonClick(inside)}>Inside</button>
        <button onClick={() => handleButtonClick(outside)}>Outside</button>
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
