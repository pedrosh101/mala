import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Work({ imageUrls }: any) {
  const [modalOpen, setModalOpen] = useState(false);

  const [swiperImages, setSwiperImages] = useState<string[]>([]);

  const openModal = (imageUrl: string) => {
    if (imageUrl === "/paintings/abstract/8.jpg") {
      setSwiperImages([
        "/paintings/abstract/macro/A/1.jpg",
        "/paintings/abstract/macro/A/2.jpg",
      ]);

    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-no-repeat bg-top text-white bg-black">
      <div className="grid md:grid-cols-3 gap-4 p-4 w-full">
        {imageUrls.map((imageUrl: any, index: any) => (
          <div key={index} className="relative min-h-[500px] w-full">
            <Image
              src={imageUrl}
              alt={`Imagem ${index + 1}`}
              fill
              className="object-cover"
              onClick={() => openModal(imageUrl)} // Adicionando evento de clique na imagem
            />
          </div>
        ))}
      </div>
      {modalOpen && ( // Renderiza o modal somente se estiver aberto
        <div className="fixed inset-0 flex items-center justify-center bg-black text-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
     
            {swiperImages.length > 0 && (
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {swiperImages.map((image, index) => (
                  <SwiperSlide key={index} className="relative h-96 w-96 overflow-hidden">
                    <div className="relative h-96 w-96 overflow-hidden">

                    <Image
                      src={image}
                      fill
                      className="w-full h-full object-cover"
                      alt={`Imagem ${index + 1}`}
                    />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <button onClick={closeModal}>Fechar</button>{" "}
            {/* Botão para fechar o modal */}
          </div>
        </div>
      )}
    </main>
  );
}

export default Work;
