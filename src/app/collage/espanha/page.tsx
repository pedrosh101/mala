"use client";

import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Espanha() {
  const imageUrls = [
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
  ];

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center space-x-8 font-courier md:mt-0 mt-6"></div>
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Espanha;
