"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import { imageUrls } from "@/app/data/outside";
import Video from "next-video";
import Image from "next/image";


import video1 from "/videos/video1.mp4";

function Outside() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredImages = selectedProject
    ? imageUrls.filter((image) => image.project === selectedProject)
    : [];

  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex flex-col bg-slate-50 md:min-h-screen min-h-[80vh] py-10 font-realCourier px-4 text-black text-sm">
        <div className="flex flex-col mb-10">
          <button
            onClick={() => setSelectedProject("wall")}
            className="mx-2 py-2 px-4  rounded"
          >
            2024. Wall, fábrica algarvia, olhão
          </button>
          <button
            onClick={() => setSelectedProject("lifeh")}
            className="mx-2 py-2 px-4   rounded"
          >
            2024. Wall - Life house
          </button>
          <button
            onClick={() => setSelectedProject("man")}
            className="mx-2 py-2 px-4 rounded"
          >
            2024. Performance Man don&rsquo;t cry?, Malaga
          </button>
          <button
            onClick={() => setSelectedProject("futAn")}
            className="mx-2 py-2 px-4 rounded"
          >
            2024. Futuro Ancestral
          </button>

          <button
            onClick={() => setSelectedProject("covid")}
            className="mx-2 py-2 px-4 rounded"
          >
            2021, performance COVID19, Faro
          </button>
          <button
            onClick={() => setSelectedProject("lilas")}
            className="mx-2 py-2 px-4 rounded"
          >
            2020, Hospedaria lilás, Chapada Diamantina
          </button>
          <button
            onClick={() => setSelectedProject("sergipe")}
            className="mx-2 py-2 px-4 rounded"
          >
            2020 - Somewhere in Sergipe
          </button>
          <button
            onClick={() => setSelectedProject("vida")}
            className="mx-2 py-2 px-4 rounded"
          >
            2020, Pousada Vidavibra, Itamambuca
          </button>
        </div>

        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[40em] min-h-screen mb-14 flex flex-col items-center"
            >
              <div className="relative w-full md:h-full h-96">
                <Image
                  src={image.url}
                  alt={image.title || `Image ${index + 1}`}
                  fill
                  className="object-contain md:h-96"
                />
              </div>
              <a className="pt-1 text-center" href={image?.dl} download>
                {image?.title}
              </a>
            </div>
          ))
        ) : (
          <div className="flex justify-center text-4xl">
            <Video
              src={video1}
              style={{ maxWidth: "42rem" }}
              accentColor="black"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Outside;
