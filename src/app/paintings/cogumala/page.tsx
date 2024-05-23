"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Cogumala() {
  const insideCogu = [
    {
      title: "2020, mix media, 25x15 Série 'Tamanho não é documento'",
      images: [
        {
          url: "/paintings/cogumala/inside/1.jpg",
          title: "2020 “Marlyn” Técnica mista 20x15",
        },
        {
          url: "/paintings/cogumala/inside/2.jpg",
          title: "2020 “Mens sana in corpórea são?” Técnica mista 20x15",
        },
        {
          url: "/paintings/cogumala/inside/3.jpg",
          title: "2020 'deus e o diabo na terra do cogumala' 35x25 mix media on canvas",
        },
        {
          url: "/paintings/cogumala/inside/4.jpg",
          title: "2020 'o filho do cogumelo' 35x25 mix media on canvas ",
        },

      ],
    },
    {
      title: "2020, mix media, 90x60 Série “Até onde meus braços alcançarem”",
      images: [
        {
          url: "/paintings/cogumala/inside/5.jpg",
          title: "2020 “Fé” técnica mista 40x30",
        },
        {
          url: "/paintings/cogumala/inside/6.jpg",
          title: "2020 “Can that talks” técnica mista  40x30",
        },
        {
          url: "/paintings/cogumala/inside/7.jpg",
          title: "2020 “Hang” 40x30 técnica mista",
        },
        {
          url: "/paintings/cogumala/inside/8.jpg",
          title: "2020 “horizon” 40x30 técnica mista",
        },
      ],
    },
    {
      title: "2020, mix media on Spray Cans. Serie “CoguCans”",
      images: [
        {
          url: "/paintings/cogumala/inside/9.jpg",
          title: "'Cogumelos babilônicos' mix média on spray cans",
        },
        {
          url: "/paintings/cogumala/inside/10.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/11.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/12.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/13.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/14.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/15.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/16.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/17.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/18.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/19.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/20.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/21.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/22.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/23.jpg",
          title: "",
        },
      ],
    },
    {
      title: "2021, Série 'povo brasileiro' mix media on fotográfic paper a4",
      images: [
        {
          url: "/paintings/cogumala/inside/24.jpg",
          title: "'Antirracista' mixmedia on fotográfic paper A4",
        },
        {
          url: "/paintings/cogumala/inside/25.jpg",
          title: "'Blackpower' mixmedia on fotográfic paper A4",
        },
        {
          url: "/paintings/cogumala/inside/26.jpg",
          title: "'Coguche' mixmedia on fotográfic paper",
        },
        {
          url: "/paintings/cogumala/inside/27.jpg",
          title: "'Favelado' mixmedia on fotográfic paper A4",
        },
        {
          url: "/paintings/cogumala/inside/28.jpg",
          title: "'Feminista' mixmedia on fotográfic paper A4",
        },
        {
          url: "/paintings/cogumala/inside/29.jpg",
          title: "'MST' mixmedia on fotográfic paper A4",
        },
        {
          url: "/paintings/cogumala/inside/30.jpg",
          title: "'PetroBras' mixmedia on fotográfic paper A4",
        },
        {
          url: "/paintings/cogumala/inside/31.jpg",
          title: "'Proud' mixmedia on fotográfic paper A4",
        },
        {
          url: "/paintings/cogumala/inside/32.jpg",
          title: "'Style' mixmedia on fotográfic paper A4",
        },
      ],
    },
    {
      title: "2021, Série 'CoguOrixas' 160x90 on raw tecid",
      images: [
        {
          url: "/paintings/cogumala/inside/33.jpg",
          title: "2021 'Coguangô' 120x70 mix média on canvas",
        },
        {
          url: "/paintings/cogumala/inside/34.jpg",
          title: "2021 'Coguexu' 120x70 mix média on canvas",
        },
        {
          url: "/paintings/cogumala/inside/35.jpg",
          title: "2021 'Coguiansã' 120x70 mix média on canvas",
        },
        {
          url: "/paintings/cogumala/inside/36.jpg",
          title: "2021 'Coguiêmanja' mix média on canvas 120x70",
        },
        {
          url: "/paintings/cogumala/inside/37.jpg",
          title: "2021 'Cogum' 120x70. mix média on canvas",
        },
        {
          url: "/paintings/cogumala/inside/38.jpg",
          title: "2021 'Coguobatalá' 120x70 mix média on canvas",
        },
        {
          url: "/paintings/cogumala/inside/39.jpg",
          title: "2021 'Coguoxum' 120x70 mix média on canvas",
        },
        {
          url: "/paintings/cogumala/inside/40.jpg",
          title: "2021 'Coguxóssi' 120x70 mix média on canvas",
        },
      ],
    },
    {
      title: "Murals - Hospedaria Lilás, Chapada Diamantina, 2020",
      images: [
        {
          url: "/paintings/cogumala/inside/41.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/42.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/43.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/44.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/45.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/46.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/47.jpg",
          title: "",
        },
      ],
    },
    {
      title: "Murals - Pousada Vidavibra, Itamambuca, 2021",
      images: [
        {
          url: "/paintings/cogumala/inside/48.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/49.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/50.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/51.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/52.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/inside/53.jpg",
          title: "",
        },

      ],
    },
  ];

  const outsideCogu = [
    {
      title: "",
      images: [
        {
          url: "/paintings/cogumala/outside/1.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/outside/2.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/outside/3.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/outside/4.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/outside/5.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/outside/6.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/outside/7.jpg",
          title: "",
        },
        {
          url: "/paintings/cogumala/outside/8.jpg",
          title: "",
        },

      ],
    },
    // {
    //   title: "Cogumala Retirantes - Maracanã",
    //   images: [
    //     "/paintings/cogumala/outside/5.jpg",
    //     "/paintings/cogumala/outside/6.jpg",
    //     "/paintings/cogumala/outside/7.jpg",
    //     "/paintings/cogumala/outside/8.jpg",
    //   ],
    // },
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
