import Navbar from "@/app/components/navbar";
import Image from "next/image";

function Inside() {
  const imageUrls = [
    {
      url: "/Inside/1.jpg",
      title: "2024. Série Algarve, _the bridge_, acrílico, spray, esmalte, folhas de ouro on canvas, 120x120",
    },
    {
      url: "/Inside/2.jpg",
      title: "2024. De _black and white_ series, _Bright Darkness_, acrílico, spray, esmalte, oil on canvas, 120x120",
    },
    {
      url: "/Inside/3.jpg",
      title: "2024. _untitled_ spray, esmalte acrílico on canvas, 120x120",
    },
    {
      url: "/Inside/4.jpg",
      title: "2024. _Summer is coming_ oil  on linen, 120x100",
    },
    {
      url: "/Inside/5.jpg",
      title: "2024, untitled, Spray acrilic and Grafiti on canvas_",
    },
    {
      url: "/Inside/6.jpg",
      title: "2024, _Untitled_, spray on canvas, 100x100",
    },
    {
      url: "/Inside/7.jpg",
      title: "2024, _untitled_, folha de ouro e tinta esmalte, 9 canvas 35x25",
    },
    {
      url: "/Inside/8.jpg",
      title: "2024 _basic black_ acrílico, spray, grafite, carvão, oil and oil stickers on canvas  on  canvas_",
    },
  ];

  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex flex-col bg-slate-50 min-h-screen py-10 font-courier md:px-0 px-4 text-black text-sm">
        {imageUrls.map((image, index) => (
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
            <p className="pt-4 text-center">{image.title || "No Title"}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inside;
