"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";


function COVID() {

  const imageUrls = [
    "/performance/covid/1.jpg",
    "/performance/covid/2.jpg",
    "/performance/covid/3.jpg",
    "/performance/covid/4.jpg",
    "/performance/covid/5.jpg",
    "/performance/covid/6.jpg",
    "/performance/covid/7.jpg",
    "/performance/covid/8.jpg",
    "/performance/covid/9.jpg",
    "/performance/covid/10.jpg",
    "/performance/covid/11.jpg",
    "/performance/covid/12.jpg",
    "/performance/covid/13.jpg",
    "/performance/covid/14.jpg",
    "/performance/covid/15.jpg",
    "/performance/covid/16.jpg",
  ];

  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default COVID;
