"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import { imageUrls } from "@/app/data/outside";
import dynamic from 'next/dynamic';
import Image from "next/image";

// Use dynamic import to load ReactPlayer only on the client
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function Outside() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component is rendered on the client
  }, []);

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
            {isClient && (
              <ReactPlayer
              url="https://www.youtube.com/watch?v=RDx1fHqZhps"
              width="100%"
              height="26rem"
              style={{ maxWidth: "42rem"}}
              controls
            />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Outside;
