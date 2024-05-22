"use client";

import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Berlim() {
  const imageUrls = [
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
  ];

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center space-x-8 font-courier md:mt-0 mt-6"></div>
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Berlim;
