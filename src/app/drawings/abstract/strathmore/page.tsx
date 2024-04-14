"use client";

import React from "react";
import Navbar from "../../../components/navbar";
import Work from "@/app/components/work";


function Performance() {

  const imageUrls = [
    "/drawings/strathmore/1.jpg",
    "/drawings/strathmore/2.jpg",
    "/drawings/strathmore/3.jpg",
    "/drawings/strathmore/4.jpg",
    "/drawings/strathmore/5.jpg",
    "/drawings/strathmore/6.jpg",
    "/drawings/strathmore/7.jpg",
    "/drawings/strathmore/8.jpg",
  ];

  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Performance;
