"use client";

import React from "react";
import Navbar from "../../../components/navbar";
import Work from "@/app/components/work";


function Performance() {

  const imageUrls = [
    "/drawings/onlinen/1.jpg",
    "/drawings/onlinen/2.jpg",

  ];

  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Performance;
