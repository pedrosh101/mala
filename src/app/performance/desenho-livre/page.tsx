"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";


function Desenho() {

  const imageUrls = [
    {
      url: "/performance/desenho-livre/1.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/2.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/3.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/4.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/5.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/6.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/7.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/8.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/9.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/10.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/11.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/12.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/13.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/14.jpg",
      title: "",
    },
    {
      url: "/performance/desenho-livre/15.jpg",
      title: "",
    },

  ];


  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Desenho;
