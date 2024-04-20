import React from "react";
import Image from "next/image";

function Work({ imageUrls }: any) {
  return (
    <main className="flex flex-col items-center min-h-screen bg-no-repeat bg-top text-white">
      <div
        className="grid grid-cols-3 gap-4 p-4 w-full"
      >
        {imageUrls.map((imageUrl: any, index: any) => (
          <div key={index} className="relative min-h-[500px] w-full">
            <Image
              src={imageUrl}
              alt={`Imagem ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Work;
