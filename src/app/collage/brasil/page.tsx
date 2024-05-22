"use client";

import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Brasil() {
  const imageUrls = [
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
  ];

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center space-x-8 font-courier md:mt-0 mt-6"></div>
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Brasil;
