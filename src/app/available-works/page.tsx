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
      description:
        "acrílico, spray, grafite, carvão, oil and oil stickers on canvas",
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
    {
      url: "/Inside/18.jpg",
      ano: "2023",
      title: "Summer",
      description: "mix media on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/26.jpg",
      ano: "2023",
      title: "Back to Black, Untitled",
      description: "oil on canvas",
      size: "70x50",
    },
    {
      url: "/Inside/27.jpg",
      ano: "2023",
      title: "Titanium",
      description: "oil on canvas",
      size: "70x50",
    },
    {
      url: "/Inside/24.jpg",
      ano: "2023",
      title: "Untitled",
      description: "acrylic on canvas",
      size: "120x70",
    },
    {
      url: "/Inside/22.jpg",
      ano: "2023",
      title: "Untitled",
      description: "oil on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/40.jpg",
      ano: "2023",
      title: "3333 malas",
      description: "mix media on canvas",
      size: "220x80",
    },
    {
      url: "/Inside/41.jpg",
      ano: "2023",
      title: "Alma Mala",
      description: "acrylic on canvas",
      size: "60x60",
    },
    {
      url: "/Inside/Cogumalas/33.jpg",
      ano: "2023",
      title: "Coguoxum",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/Cogumalas/34.jpg",
      ano: "2023",
      title: "Coguiansã",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/Cogumalas/35.jpg",
      ano: "2023",
      title: "Coguiêmanja",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/Cogumalas/36.jpg",
      ano: "2023",
      title: "Coguexu",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/Cogumalas/37.jpg",
      ano: "2023",
      title: "Coguangô",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/Cogumalas/38.jpg",
      ano: "2023",
      title: "Coguxóssi",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/Cogumalas/39.jpg",
      ano: "2023",
      title: "Cogum",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/Cogumalas/40.jpg",
      ano: "2023",
      title: "Coguobatalá",
      description: "spray and acrylic on raw fabric",
      size: "120x70",
    },
    {
      url: "/Inside/45.jpg",
      ano: "2023",
      title: "Visceral",
      description: "spray, acrylic, oil, and plastic eyes sticker on canvas",
      size: "100x40",
    },
    {
      url: "/Inside/47.jpg",
      ano: "2023",
      title: "Ready for the Fight",
      description: "spray and acrylic on wood",
      size: "90x60",
    },
    {
      url: "/Inside/42.jpg",
      ano: "2023",
      title: "Untitled",
      description: "acrylic, spray, oil on canvas",
      size: "100x75",
    },
    {
      url: "/Inside/38.jpg",
      ano: "2023",
      title: "Amanhã Vai Ser Outro Dia",
      description: "pastels and wax on canvas",
      size: "160x90",
    },
    {
      url: "/Inside/24.jpg",
      ano: "2023",
      title: "Málaga",
      description: "dry and oil pastel chalk, ballpoint pen, markers on linen",
      size: "100x100",
    },
    {
      url: "/Inside/17.jpg",
      ano: "2023",
      title: "Untitled #2",
      description: "dry and oil pastel chalk, ballpoint pen, markers on linen",
      size: "200x100",
    },
    {
      url: "/Inside/15.jpg",
      ano: "2023",
      title: "Untitled #4",
      description: "dry and oil pastel chalk, ballpoint pen, markers on linen",
      size: "120x180",
    },
    {
      url: "/Inside/16.jpg",
      ano: "2023",
      title: "Untitled",
      description: "dry and oil pastel chalk, ballpoint pen, markers on linen",
      size: "180x120",
    },
    {
      url: "/Inside/37.jpg",
      ano: "2023",
      title: "Untitled 1",
      description:
        "acrylic, oil, enamel, china ink, pastel chalk, varnish on canvas",
      size: "60x60",
    },
    {
      url: "/Inside/35.jpg",
      ano: "2023",
      title: "Untitled 3",
      description:
        "acrylic, oil, enamel, china ink, pastel chalk, varnish on canvas",
      size: "90x70",
    },
    {
      url: "/Inside/36.jpg",
      ano: "2023",
      title: "Untitled 3",
      description:
        "acrylic, oil, enamel, china ink, pastel chalk, varnish on canvas",
      size: "90x70",
    },
    {
      url: "/Inside/34.jpg",
      ano: "2023",
      title: "Untitled 4",
      description:
        "acrylic, oil, enamel, china ink, pastel chalk, varnish on canvas",
      size: "90x70",
    },
    {
      url: "/Inside/33.jpg",
      ano: "2023",
      title: "Untitled 5",
      description:
        "acrylic, oil, enamel, china ink, pastel chalk, varnish, plaster, cement on canvas",
      size: "150x10",
    },
    {
      url: "/Inside/32.jpg",
      ano: "2023",
      title: "Untitled 6",
      description: "acrylic, oil, spray, lime, gold leaves on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/31.jpg",
      ano: "2023",
      title: "Untitled 7",
      description:
        "acrylic, oil, enamel, china ink, pastel chalk, varnish on canvas",
      size: "80x35",
    },
    {
      url: "/Inside/30.jpg",
      ano: "2023",
      title: "Untitled 8",
      description:
        "acrylic, oil, enamel, china ink, pastel chalk, varnish on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/29.jpg",
      ano: "2023",
      title: "Untitled 9",
      description: "acrylic on canvas",
      size: "60x40",
    },
    {
      url: "/Inside/28.jpg",
      ano: "2023",
      title: "Untitled 10",
      description: "acrylic on canvas",
      size: "60x40",
    },
    {
      url: "/Inside/43A.jpg",
      ano: "2023",
      title: "Soul Vitruviane",
      description: "acrylic on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/39.jpg",
      ano: "2023",
      title: "YOSOY",
      description: "oil, acrylic, glitter on canvas",
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
