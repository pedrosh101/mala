"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Work({ imageUrls }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState<number>(0);

  const openModal = (index: number) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-no-repeat bg-top text-black bg-white">
      <div className="grid md:grid-cols-3 gap-4 p-4 w-full">
        {imageUrls.map((image: { url: string; title: string }, index: number) => (
          <div key={index} className="relative min-h-[500px] w-full">
            <Image
              src={image.url}
              alt={image.title}
              fill
              sizes=""
              className="object-cover cursor-pointer"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-white/80 p-2 rounded-lg h-[100%] w-[90%]">
            <div className="flex w-full justify-end">
              <svg
                onClick={closeModal}
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1.6em"
                width="1.6em"
                className="rounded cursor-pointer"
              >
                <path
                  fill="red-200"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </div>
            <Swiper
              initialSlide={initialSlide}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {imageUrls.map((image: { url: string; title: string, description: string, size: string }, index: number) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full my-2 h-[80vh]">
                    <Image
                      src={image.url}
                      fill
                      className="object-contain"
                      alt={image.title}
                    />
                  </div>
                  <div className="flex flex-col w-full justify-center mb-8">
                    <h1>{image.title}</h1>
                    <h1>{image.description}</h1>
                    <h1>{image.size}</h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </main>
  );
}

export default Work;
