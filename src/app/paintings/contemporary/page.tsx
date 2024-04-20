"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";

function Contemporary() {
  const imageUrls = [
    "/paintings/abstract/1.jpg",
    "/paintings/abstract/2.jpg",
    "/paintings/abstract/3.jpg",
    "/paintings/abstract/4.jpg",
    "/paintings/abstract/5.jpg",
    "/paintings/abstract/6.jpg",
    "/paintings/abstract/7.jpg",
    "/paintings/abstract/8.jpg",
    "/paintings/abstract/9.jpg",
    "/paintings/abstract/10.jpg",
  ];

  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Contemporary;
