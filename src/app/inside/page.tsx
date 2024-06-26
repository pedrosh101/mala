"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { imageUrls } from "@/app/data/inside";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Inside() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const filteredImages = selectedYear
    ? imageUrls.filter((image) => image.ano === selectedYear)
    : [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMacros, setCurrentMacros] = useState<string[]>([]);

  const openModal = (macros: any) => {
    if (macros && macros.length > 0) {
      setCurrentMacros(macros);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMacros([]);
  };

  return (
    <>
      <Navbar isProjetosPage={true} />

      <div className="flex flex-col bg-slate-50 min-h-screen py-10 font-courier px-4 text-black text-sm">
        <div className="flex justify-center mb-10">
          {["2024", "23", "22", "21", "20"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className="mx-2 py-2 px-4 rounded"
            >
              {year}
            </button>
          ))}
        </div>

        {filteredImages.length > 0
          ? filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-96 md:min-h-screen mb-14 flex flex-col items-center"
              >
                <div
                  className={`relative w-full h-full ${
                    image.macros ? "cursor-pointer" : "cursor-default"
                  }`}
                  onClick={() =>
                    image.macros &&
                    image.macros.length > 0 &&
                    openModal(image.macros)
                  }
                >
                  <Image
                    src={image.url}
                    alt={image.title || `Image ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="pt-4 text-center">{image?.ano}</p>
                <a className="pt-1 text-center" href={image?.dl} download>
                  {image?.title}
                </a>
                <p className="pt-1 text-center">{image?.material}</p>
                <p className="pt-1 text-center">{image?.size}</p>
              </div>
            ))
          : ""}

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
            <div className="bg-white/20 p-2 rounded-lg h-[90%] w-[90%]">
              <button
                className="absolute top-2 right-2 text-xl text-white font-realCourier"
                onClick={closeModal}
              >
                x
              </button>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
              >
                {currentMacros.map((macroUrl, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full my-2 h-[80vh]">
                      <Image
                        src={macroUrl}
                        fill
                        className="object-contain"
                        alt={`Macro Image ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Inside;
