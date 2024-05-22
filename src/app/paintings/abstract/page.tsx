"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Abstract() {
  const imageUrls = [
    {
      url: "/paintings/abstract/1.jpg",
      title: "2021 _untitled_ 220x90 mixmedia on canvas",
    },
    {
      url: "/paintings/abstract/2.jpg",
      title: "2022 _lado a_ 60x40 acrílics on canvas",
    },
    {
      url: "/paintings/abstract/3.jpg",
      title: "2022 _lado b_ 60x40 acrílics on canvas",
    },
    {
      url: "/paintings/abstract/4.jpg",
      title: "2022 _untitled_ 70x40 mixmedia on canvas",
    },
    {
      url: "/paintings/abstract/5.jpg",
      title: "2022 _untitled_ 90x60 mix media on canvas",
    },
    {
      url: "/paintings/abstract/6.jpg",
      title: "2022 _untitled_ 90x70 mixmedia on canvas(1)",
    },
    {
      url: "/paintings/abstract/7.jpg",
      title: "2022 _untitled_ 90x70 mixmedia on canvas(2)",
    },
    {
      url: "/paintings/abstract/8.jpg",
      title: "2022 _untitled_ 90x70 mixmedia on canvas",
    },
    {
      url: "/paintings/abstract/9.jpg",
      title: "2022 _untitled_ 110x110 mixmedia on canvas",
    },
    { url: "/paintings/abstract/10.jpg", title: "2022 _untitled_ 150x10_" },
    {
      url: "/paintings/abstract/11.jpg",
      title: "2022 da série SOUL,  _Untitled_, 100x75 mixmedia on canvas",
    },
    {
      url: "/paintings/abstract/12.jpg",
      title: "2022 da série SOUL, _untitled_ 120x50 mixmedia on canvas",
    },
    {
      url: "/paintings/abstract/13.jpg",
      title: "2024 _basic black_ 90x90 mix media on  canvas_",
    },
  ];

  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Abstract;
