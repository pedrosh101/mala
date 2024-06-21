"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

function Outside() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const imageUrls = [
    {
      url: "/Outside/wall/1.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/2.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/3.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/4.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/5.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/6.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/7.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/8.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/9.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/10.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/wall/11.jpg",
      title: "",
      project: "wall",
    },
    {
      url: "/Outside/lifeh/1.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/2.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/3.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/4.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/5.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/6.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/7.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/8.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/lifeh/9.jpg",
      title: "",
      project: "lifeh",
    },
    {
      url: "/Outside/man/1.jpg",
      title: "",
      project: "man",
    },
    {
      url: "/Outside/man/2.jpg",
      title: "",
      project: "man",
    },
    {
      url: "/Outside/man/3.jpg",
      title: "",
      project: "man",
    },
    {
      "url": "/Outside/man/4.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/5.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/6.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/7.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/8.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/9.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/10.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/11.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/12.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/13.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/14.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/15.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/16.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/17.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/18.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/19.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/20.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/21.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/22.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/man/23.jpg",
      "title": "",
      "project": "man"
    },
    {
      "url": "/Outside/futAn/1.jpg",
      "title": "",
      "project": "futAn"
    },
    {
      "url": "/Outside/futAn/2.jpg",
      "title": "",
      "project": "futAn"
    },
    {
      "url": "/Outside/futAn/3.jpg",
      "title": "",
      "project": "futAn"
    },
    {
      "url": "/Outside/futAn/4.jpg",
      "title": "",
      "project": "futAn"
    },
    {
      "url": "/Outside/futEs/1.jpg",
      "title": "",
      "project": "futEs"
    },
    {
      "url": "/Outside/covid/1.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/2.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/3.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/4.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/5.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/6.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/7.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/8.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/9.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/10.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/11.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/12.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/13.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/14.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/15.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/covid/16.jpg",
      "title": "",
      "project": "covid"
    },
    {
      "url": "/Outside/lilas/1.jpg",
      "title": "",
      "project": "lilas"
    },
    {
      "url": "/Outside/lilas/2.jpg",
      "title": "",
      "project": "lilas"
    },
    {
      "url": "/Outside/lilas/3.jpg",
      "title": "",
      "project": "lilas"
    },
    {
      "url": "/Outside/lilas/4.jpg",
      "title": "",
      "project": "lilas"
    },
    {
      "url": "/Outside/lilas/5.jpg",
      "title": "",
      "project": "lilas"
    },
    {
      "url": "/Outside/lilas/6.jpg",
      "title": "",
      "project": "lilas"
    },
    {
      "url": "/Outside/lilas/7.jpg",
      "title": "",
      "project": "lilas"
    },
    {
      "url": "/Outside/sergipe/1.jpg",
      "title": "",
      "project": "sergipe"
    },
    {
      "url": "/Outside/sergipe/2.jpg",
      "title": "",
      "project": "sergipe"
    },
    {
      "url": "/Outside/vida/1.jpg",
      "title": "",
      "project": "vida"
    },
    {
      "url": "/Outside/vida/2.jpg",
      "title": "",
      "project": "vida"
    },
    {
      "url": "/Outside/vida/3.jpg",
      "title": "",
      "project": "vida"
    },
    {
      "url": "/Outside/vida/4.jpg",
      "title": "",
      "project": "vida"
    },
    {
      "url": "/Outside/vida/5.jpg",
      "title": "",
      "project": "vida"
    },
    {
      "url": "/Outside/vida/6.jpg",
      "title": "",
      "project": "vida"
    },
    
    
  ];

  const filteredImages = selectedProject
    ? imageUrls.filter((image) => image.project === selectedProject)
    : [];

  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex flex-col bg-slate-50 min-h-screen py-10 font-courier px-4 text-black text-sm">
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
            2024. Performance Man don_t cry_ , Malaga
          </button>
          <button
            onClick={() => setSelectedProject("futAn")}
            className="mx-2 py-2 px-4 rounded"
          >
            2024. _Futuro Ancestral_
          </button>
          <button
            onClick={() => setSelectedProject("futEs")}
            className="mx-2 py-2 px-4 rounded"
          >
            2023. _El futuro es ancestral_
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

        {filteredImages.length > 0
          ? filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-96 md:h-[90vh] mb-14 flex flex-col items-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.url}
                    alt={image.title || `Image ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="pt-4 text-center">{image.title || ""}</p>
              </div>
            ))
          : ""}
      </div>
    </>
  );
}

export default Outside;
