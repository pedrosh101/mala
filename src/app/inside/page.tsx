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
  const [selectedYear, setSelectedYear] = useState<string | null>("2024");
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

      <div className="flex flex-col bg-slate-50 min-h-screen py-10 font-RealCourier px-4 text-black text-sm">
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
                className="relative w-full h-[40em] min-h-screen mb-14 flex flex-col  leading-4"
              >
                <div
                  className={`relative w-full md:h-full h-96 ${
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
                    className="object-contain md:h-96"
                  />
                </div>
                <div>
                  <p className="pt-4 text-center">{image?.ano}</p>
                  <a className="pt-1 text-center" href={image?.dl} download>
                    <p className="pt-1">{image?.title}</p>
                    
                  </a>
                  <p className="pt-1 text-center">{image?.material}</p>
                  <p className="pt-1 text-center">{image?.size}</p>
                </div>
              </div>
            ))
          : ""}

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black">
            <div className=" p-2 h-[90%] w-[90%]">
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
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                loop={true}
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
