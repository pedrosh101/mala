"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Inside() {
  const imageUrls = [
    {
      url: "/Inside/48.jpg",
      ano: "2024",
      title: "Série Algarve, Olive",
      material: "spray, esmalte, acrílico.",
      size: "100x40",
    },
    {
      url: "/Inside/49.jpg",
      ano: "2024",
      title: "Série Algarve",
      material: "spray, esmalte, acrílico.",
      size: "100x100",
    },
    {
      url: "/Inside/1.jpg",
      ano: "2024",
      title: "Série Algarve, the bridge",
      material: "acrílico, spray, esmalte, folhas de ouro on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/2.jpg",
      ano: "2024",
      title: "De black and white series, Bright Darkness",
      material: "acrílico, spray, esmalte, óleo on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/3.jpg",
      ano: "2024",
      title: "untitled",
      material: "spray, esmalte, acrílico on canvas",
      size: "120x120",
    },
    {
      url: "/Inside/4.jpg",
      ano: "2024",
      title: "Summer is coming",
      material: "óleo on linen",
      size: "120x100",
    },
    {
      url: "/Inside/5.jpg",
      ano: "2024",
      title: "untitled",
      material: "spray acrílico e grafite on canvas",
      size: "",
    },
    {
      url: "/Inside/6.jpg",
      ano: "2024",
      title: "Untitled",
      material: "spray on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/7.jpg",
      ano: "2024",
      title: "untitled",
      material: "folha de ouro e tinta esmalte on 9 canvases",
      size: "35x25 cada",
    },
    {
      url: "/Inside/8.jpg",
      ano: "2024",
      title: "basic black",
      material:
        "acrílico, spray, grafite, carvão, óleo e adesivos de óleo on canvas",
      size: "",
    },
    {
      url: "/Inside/9.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled",
      material: "acrílico, óleo, pastel, gesso on canvas",
      size: "45x35",
    },
    {
      url: "/Inside/10.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #5",
      material: "spray, acrílico, gesso, pastel, óleo on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/11.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #3",
      material: "mix media",
      size: "120x120",
    },
    {
      url: "/Inside/12.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #2",
      material: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/13.jpg",
      ano: "2024",
      title: "Série Algarve, Untitled #1",
      material: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/14.jpg",
      ano: "2023",
      title: "da série Andalucía, Málaga",
      material: "mix media on linen",
      size: "100x100",
    },
    {
      url: "/Inside/15.jpg",
      ano: "2023",
      title: "da série Andalucía, Untitled #4",
      material: "mix media on linen",
      size: "120x180",
    },
    {
      url: "/Inside/16.jpg",
      ano: "2023",
      title: "da série Andalucía, Untitled #2",
      material: "mix media on linen",
      size: "250x90",
    },
    {
      url: "/Inside/17.jpg",
      ano: "2023",
      title: "da série Andalucía, Untitled",
      material: "mix media on linen",
      size: "120x180",
    },
    {
      url: "/Inside/18.jpg",
      ano: "2023",
      title: "Summer",
      material: "mix media on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/19.jpg",
      ano: "2023",
      title: "Rehab",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/20.jpg",
      ano: "2023",
      title: "Caterpillar",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/21.jpg",
      ano: "2023",
      title: "Carnaval",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/22.jpg",
      ano: "2022",
      title: "de Black and white series, untitled",
      material: "óleo on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/23.jpg",
      ano: "2022",
      title: "de black and white series, Untitled",
      material: "spray on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/24.jpg",
      ano: "2022",
      title: "de black and white series, Untitled",
      material: "acrílico on canvas",
      size: "120x70",
    },
    {
      url: "/Inside/25.jpg",
      ano: "2022",
      title: "de black and white series, Untitled",
      material: "spray on canvas",
      size: "100x100",
    },
    {
      url: "/Inside/26.jpg",
      ano: "2022",
      title: "de black and white series, Back to Black, Untitled",
      material: "óleo on canvas",
      size: "70x50",
    },
    {
      url: "/Inside/27.jpg",
      ano: "2022",
      title: "de black and white series, Titanium",
      material: "óleo on canvas",
      size: "70x50",
    },
    {
      url: "/Inside/28.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #10",
      material: "acrílico on canvas",
      size: "60x40",
    },
    {
      url: "/Inside/29.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #9",
      material: "acrílico on canvas",
      size: "60x40",
    },
    {
      url: "/Inside/30.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #8",
      material: "mix media on canvas",
      size: "140x60",
      macros: [
        "/Inside/macros/15.jpg",
        "/Inside/macros/16.jpg",
        "/Inside/macros/17.jpg",
        "/Inside/macros/18.jpg",
        "/Inside/macros/19.jpg",
        "/Inside/macros/20.JPG",
        "/Inside/macros/21.JPG",
        "/Inside/macros/22.JPG",
        "/Inside/macros/23.JPG",
        "/Inside/macros/24.JPG",
        "/Inside/macros/25.JPG",
        "/Inside/macros/26.JPG",
        "/Inside/macros/27.JPG",
        "/Inside/macros/28.JPG",
        "/Inside/macros/29.JPG",
        "/Inside/macros/30.JPG",
        "/Inside/macros/31.JPG",
        "/Inside/macros/32.JPG",
        "/Inside/macros/33.JPG",
        "/Inside/macros/34.JPG",
        "/Inside/macros/35.JPG",
        "/Inside/macros/36.JPG",
        "/Inside/macros/37.JPG",
        "/Inside/macros/38.JPG",
        "/Inside/macros/39.JPG",
        "/Inside/macros/40.JPG",
        "/Inside/macros/41.JPG",
        "/Inside/macros/42.JPG",
        "/Inside/macros/43.JPG",
        "/Inside/macros/44.JPG",
        "/Inside/macros/45.JPG",
        "/Inside/macros/46.JPG",
        "/Inside/macros/47.JPG",
        "/Inside/macros/48.JPG",
        "/Inside/macros/49.JPG",
      ],
    },
    {
      url: "/Inside/31.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #7",
      material: "mix media on canvas",
      size: "70x40",
    },
    {
      url: "/Inside/32.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #6",
      material: "mix media on canvas",
      size: "110x110",
      macros: [
        "/Inside/macros/4.jpg",
        "/Inside/macros/5.jpg",
        "/Inside/macros/6.jpg",
        "/Inside/macros/7.jpg",
        "/Inside/macros/8.jpg",
        "/Inside/macros/9.jpg",
        "/Inside/macros/10.jpg",
        "/Inside/macros/11.jpg",
      ],
    },
    {
      url: "/Inside/33.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #5",
      material: "mix media on canvas",
      size: "150x100",
    },
    {
      url: "/Inside/34.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #4",
      material: "mix media on canvas",
      size: "90x60",
    },
    {
      url: "/Inside/35.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #2",
      material: "mix media on canvas",
      size: "90x70",
      macros: [
        "/Inside/macros/1.jpg",
        "/Inside/macros/2.jpg",
        "/Inside/macros/3.jpg",
      ],
    },
    {
      url: "/Inside/36.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #3",
      material: "mix media on canvas",
      size: "90x70",
      macros: [
        "/Inside/macros/12.jpg",
        "/Inside/macros/13.jpg",
        "/Inside/macros/14.jpg",
      ],
    },
    {
      url: "/Inside/37.jpg",
      ano: "2022",
      title: "da série abstrai minha depressão, Untitled #1",
      material: "mix media on canvas",
      size: "90x70",
      macros: [
        "/Inside/macros/50.JPG",
        "/Inside/macros/51.JPG",
        "/Inside/macros/52.JPG",
        "/Inside/macros/53.JPG",
        "/Inside/macros/54.JPG",
        "/Inside/macros/55.JPG",
        "/Inside/macros/56.JPG",
        "/Inside/macros/57.JPG",
        "/Inside/macros/58.JPG",
        "/Inside/macros/59.JPG",
      ],
    },
    {
      url: "/Inside/38.jpg",
      ano: "2022",
      title: "Untitled",
      material: "mix media on canvas",
      size: "160x90",
    },
    {
      url: "/Inside/39.jpg",
      ano: "2021",
      title: "Untitled",
      material: "mix media",
      size: "100x100",
    },
    {
      url: "/Inside/40.jpg",
      ano: "2021",
      title: "de SOUL series, 3333 malas",
      material: "mix media on canvas",
      size: "220x80",
    },
    {
      url: "/Inside/41.jpg",
      ano: "2021",
      title: "de SOUL series, alma mala",
      material: "acrílico on canvas",
      size: "60x60",
    },
    {
      url: "/Inside/42.jpg",
      ano: "2021",
      title: "da série SOUL, Untitled",
      material: "mix media on canvas",
      size: "100x75",
    },
    {
      url: "/Inside/43.jpg",
      ano: "2021",
      title: "Untitled",
      material: "mix media on canvas",
      size: "220x90",
    },
    {
      url: "/Inside/44.jpg",
      ano: "2021",
      title: "Retirantes, interpretação de Portinari",
      material: "mix media on canvas",
      size: "150x90",
    },
    {
      url: "/Inside/45.jpg",
      ano: "2020",
      title: "Visceral",
      material: "mix media on canvas",
      size: "100x40",
    },
    {
      url: "/Inside/46.jpg",
      ano: "2020",
      title: "Retirantes, re-interpretação de Portinari",
      material: "mix media on canvas",
      size: "200x120",
    },
    {
      url: "/Inside/47.jpg",
      ano: "2020",
      title: "Ready for the fight",
      material: "mix media on wood",
      size: "90x60",
    },
    {
      url: "/Inside/50.jpg",
      dl: "/Inside/TERRA INDIGENA, Areia de Uma escavação feita em San Francisco CA.pdf",
      ano: "2022",
      title:
        "Download PDF - TERRA INDIGENA, Areia de Uma escavação feita em San Francisco CA, sobre impressão em tela, 70x50",
    },
  ];

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
          {["2020", "2021", "2022", "2023", "2024"].map((year) => (
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
