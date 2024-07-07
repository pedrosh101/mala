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
    <main className="flex flex-col items-center min-h-screen bg-no-repeat bg-top text-black bg-slate-50">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
          <div className=" p-2 rounded-lg h-[100%] w-[90%]">
            <div className="flex w-full justify-end">
            <button
                className="absolute top-8 right-8 text-4xl text-white"
                onClick={closeModal}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                </svg>
              </button>
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
