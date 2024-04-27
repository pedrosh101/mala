"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";


function ManDontCry() {

  const imageUrls = [
    "/performance/man/1.jpg",
    "/performance/man/2.jpg",
    "/performance/man/3.jpg",
    "/performance/man/4.jpg",
    "/performance/man/5.jpg",
    "/performance/man/6.jpg",
    "/performance/man/7.jpg",
    "/performance/man/8.jpg",
    "/performance/man/9.jpg",
    "/performance/man/10.jpg",
    "/performance/man/11.jpg",
    "/performance/man/12.jpg",
    "/performance/man/13.jpg",
    "/performance/man/14.jpg",
    "/performance/man/15.jpg",
    "/performance/man/16.jpg",
    "/performance/man/17.jpg",
    "/performance/man/18.jpg",
    "/performance/man/19.jpg",
    "/performance/man/20.jpg",
    "/performance/man/21.jpg",
    "/performance/man/22.jpg",
    "/performance/man/23.jpg",
  ];

  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default ManDontCry;
