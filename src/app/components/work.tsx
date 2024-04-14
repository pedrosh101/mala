import React from "react";

function Work({ imageUrls }: any) {
  return (
    <main className="flex flex-col items-center min-h-screen bg-no-repeat bg-top text-white">
      <div className="grid sm:grid-cols-3 gap-4 p-4">
        {imageUrls.map((imageUrl:any, index:any) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Imagem ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Work;
