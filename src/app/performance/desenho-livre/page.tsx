"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Work from "@/app/components/work";


function Desenho() {

  const imageUrls = [
    "/performance/desenholivre/1.jpg",
    "/performance/desenholivre/2.jpg",
    "/performance/desenholivre/3.jpg",
    "/performance/desenholivre/4.jpg",
    "/performance/desenholivre/5.jpg",
    "/performance/desenholivre/6.jpg",
    "/performance/desenholivre/7.jpg",
    "/performance/desenholivre/8.jpg",
    "/performance/desenholivre/9.jpg",
    "/performance/desenholivre/10.jpg",
    "/performance/desenholivre/11.jpg",
    "/performance/desenholivre/12.jpg",
    "/performance/desenholivre/13.jpg",
    "/performance/desenholivre/14.jpg",
    "/performance/desenholivre/15.jpg",

  ];

  return (
    <>
      <Navbar />
      <Work imageUrls={imageUrls} />
    </>
  );
}

export default Desenho;
