"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";



function Inside() {

  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const imageUrls = [
    {
      url: "/Inside/1.jpg",
      ano: "2024",
      title: "Série Algarve, the bridge",
      material: "acrílico, spray, esmalte, folhas de ouro on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/2.jpg",
      ano: "2024",
      title: "De black and white series, Bright Darkness",
      material: "acrílico, spray, esmalte, óleo on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/3.jpg",
      ano: "2024",
      title: "untitled",
      material: "spray, esmalte, acrílico on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/4.jpg",
      ano: "2024",
      title: "Summer is coming",
      material: "óleo on linen",
      size: "120x100",
    },
    {
      url: "/Inside/5.jpg",
      ano: "2024",
      title: "untitled",
      material: "spray acrílico e grafite on canvas",
      size: "",
    },
    {
      url: "/Inside/6.jpg",
      ano: "2024",
      title: "Untitled",
      material: "spray on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/7.jpg",
      ano: "2024",
      title: "untitled",
      material: "folha de ouro e tinta esmalte on 9 canvases",
      size: "35x25 cada",
    },
    {
      url: "/Inside/8.jpg",
      ano: "2024",
      title: "basic black",
      material: "acrílico, spray, grafite, carvão, óleo e adesivos de óleo on canvas",
      size: "",
    },
    {
      url: "/Inside/9.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled",
      material: "acrílico, óleo, pastel, gesso on canvas",
      size: "45x35",
    },
    {
      url: "/Inside/10.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #5",
      material: "spray, acrílico, gesso, pastel, óleo on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/11.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #3",
      material: "mix media",
      size: "120x120",
    },
    {
      url: "/Inside/12.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #2",
      material: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/13.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #1",
      material: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/14.jpg",
      ano: "2023",
      title: "da série Andalucía, Málaga",
      material: "mix media on linen",
      size: "100x100",
    },
    {
      url: "/Inside/15.jpg",
      ano: "2023",
      title: "da série Andalucía, Untitled #4",
      material: "mix media on linen",
      size: "120x180",
    },
    {
      url: "/Inside/16.jpg",
      ano: "2023",
      title: "da série Andalucía, Untitled #2",
      material: "mix media on linen",
      size: "250x90",
    },
    {
      url: "/Inside/17.jpg",
      ano: "2023",
      title: "da série Andalucía, Untitled",
      material: "mix media on linen",
      size: "120x180",
    },
    {
      url: "/Inside/18.jpg",
      ano: "2023",
      title: "Summer",
      material: "mix media on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/19.jpg",
      ano: "2023",
      title: "Rehab",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/20.jpg",
      ano: "2023",
      title: "Caterpillar",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/21.jpg",
      ano: "2023",
      title: "Carnaval",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/22.jpg",
      ano: "2022",
      title: "de Black and white series, untitled",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/23.jpg",
      ano: "2022",
      title: "de black and white series, Untitled",
      material: "spray on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/24.jpg",
      ano: "2022",
      title: "de black and white series, Untitled",
      material: "acrílico on canvas",
      size: "120x70",
    },
    {
      url: "/Inside/25.jpg",
      ano: "2022",
      title: "de black and white series, Untitled",
      material: "spray on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/26.jpg",
      ano: "2022",
      title: "de black and white series, Back to Black, Untitled",
      material: "óleo on canvas",
      size: "70x50",
    },
    {
      url: "/Inside/27.jpg",
      ano: "2022",
      title: "de black and white series, Titanium",
      material: "óleo on canvas",
      size: "70x50",
    },
    {
      url: "/Inside/28.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #10",
      material: "acrílico on canvas",
      size: "60x40",
    },
    {
      url: "/Inside/29.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #9",
      material: "acrílico on canvas",
      size: "60x40",
    },
    {
      url: "/Inside/30.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #8",
      material: "mix media on canvas",
      size: "140x60",
    },
    {
      url: "/Inside/31.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #7",
      material: "mix media on canvas",
      size: "70x40",
    },
    {
      url: "/Inside/32.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #6",
      material: "mix media on canvas",
      size: "110x110",
    },
    {
      url: "/Inside/33.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #5",
      material: "mix media on canvas",
      size: "150x100",
    },
    {
      url: "/Inside/34.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #4",
      material: "mix media on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/35.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #3",
      material: "mix media on canvas",
      size: "90x70",
    },
    {
      url: "/Inside/36.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #3",
      material: "mix media on canvas",
      size: "90x70",
    },
    {
      url: "/Inside/37.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #1",
      material: "mix media on canvas",
      size: "90x70",
    },
    {
      url: "/Inside/38.jpg",
      ano: "2022",
      title: "Untitled",
      material: "mix media on canvas",
      size: "160x90",
    },
    {
      url: "/Inside/39.jpg",
      ano: "2021",
      title: "Untitled",
      material: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/40.jpg",
      ano: "2021",
      title: "de SOUL series, 3333 malas",
      material: "mix media on canvas",
      size: "220x80",
    },
    {
      url: "/Inside/41.jpg",
      ano: "2021",
      title: "de SOUL series, alma mala",
      material: "acrílico on canvas",
      size: "60x60",
    },
    {
      url: "/Inside/42.jpg",
      ano: "2021",
      title: "da série SOUL, Untitled",
      material: "mix media on canvas",
      size: "100x75",
    },
    {
      url: "/Inside/43.jpg",
      ano: "2021",
      title: "Untitled",
      material: "mix media on canvas",
      size: "220x90",
    },
    {
      url: "/Inside/44.jpg",
      ano: "2021",
      title: "Retirantes, interpretação de Portinari",
      material: "mix media on canvas",
      size: "150x90",
    },
    {
      url: "/Inside/45.jpg",
      ano: "2020",
      title: "Visceral",
      material: "mix media on canvas",
      size: "100x40",
    },
    {
      url: "/Inside/46.jpg",
      ano: "2020",
      title: "Retirantes, re-interpretação de Portinari",
      material: "mix media on canvas",
      size: "200x120",
    },
    {
      url: "/Inside/47.jpg",
      ano: "2020",
      title: "Ready for the fight",
      material: "mix media on wood",
      size: "90x60",
    },
  ];

  const filteredImages = selectedYear
  ? imageUrls.filter((image) => image.ano === selectedYear)
  : [];

  return (
    <>
      <Navbar isProjetosPage={true} />

      <div className="flex flex-col bg-slate-50 min-h-screen py-10 font-courier px-4 text-black text-sm">
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setSelectedYear("2020")}
            className="mx-2 py-2 px-4  rounded"
          >
            2020
          </button>
          <button
            onClick={() => setSelectedYear("2021")}
            className="mx-2 py-2 px-4   rounded"
          >
            2021
          </button>
          <button
            onClick={() => setSelectedYear("2022")}
            className="mx-2 py-2 px-4 rounded"
          >
            2022
          </button>
          <button
            onClick={() => setSelectedYear("2023")}
            className="mx-2 py-2 px-4 rounded"
          >
            2023
          </button>
          <button
            onClick={() => setSelectedYear("2024")}
            className="mx-2 py-2 px-4 rounded"
          >
            2024
          </button>
        
        </div>

     
        {filteredImages.length > 0
          ? filteredImages.map((image, index) => (
            <div
            key={index}
            className="relative w-full h-96 md:h-[90vh] mb-14 flex flex-col items-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt={image.title || `Image ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <p className="pt-4 text-center">{image?.ano}</p>
            <p className="pt-1 text-center">{image?.title}</p>
            <p className="pt-1 text-center">{image?.material}</p>
            <p className="pt-1 text-center">{image?.size}</p>
          </div>
            ))
          : ""}
      </div>
    </>
  );
}

export default Inside;
