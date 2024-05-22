"use client";

import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Pt() {
  const imageUrls = [
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
  ];

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center space-x-8 font-courier md:mt-0 mt-6"></div>
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Pt;
