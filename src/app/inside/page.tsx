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
    {
      url: "/Inside/9.jpg",
      title: "2024 - Série Algarve, _Untitled_, acrílico, oil, pastel, gesso on canvas.  45x35",
    },
    {
      url: "/Inside/10.jpg",
      title: "2024 - Série Algarve, _Untitled_ #5, spray, acrílico, gesso, pastel, oil on Canvas, 100x100",
    },
    {
      url: "/Inside/11.jpg",
      title: "2024 - Série Algarve, _Untitled_ #3, mix media - 120x120",
    },
    {
      url: "/Inside/12.jpg",
      title: "2024 - Série Algarve, _Untitled_ #2, mix media - 100x100",
    },
    {
      url: "/Inside/13.jpg",
      title: "2024 - Série Algarve, _Untitled_ #1, mix media - 100x100",
    },
    {
      url: "/Inside/14.jpg",
      title: "2023. da serie Andalucía _Málaga_, mix media on linen. 100x100 ",
    },
    {
      url: "/Inside/15.jpg",
      title: "2023, da série Andalucía, Untitled #4 120x180 mixmedia on linen",
    },
    {
      url: "/Inside/16.jpg",
      title: "2023, da série Andalucía, Untitled #2 250x90 mixmedia on linen",
    },
    {
      url: "/Inside/17.jpg",
      title: "2023, da série Andalucía,  Untitled 120x180 mixmedia on linen",
    },
    {
      url: "/Inside/18.jpg",
      title: "2023, _Summer_ mix media on canvas, 90x60_",
    },
    {
      url: "/Inside/19.jpg",
      title: "2023, _Rehab_ , oil on canvas,  90x60_",
    },
    {
      url: "/Inside/20.jpg",
      title: "2023, _Caterpillar_, oil on canvas, 90x60_",
    },
    {
      url: "/Inside/21.jpg",
      title: "2023, _Carnaval_ ,oil on canvas, 90x60_",
    },
    {
      url: "/Inside/22.jpg",
      title: "2022, de Black and white series, untitled, oil on canvas, 90x60_",
    },
    {
      url: "/Inside/23.jpg",
      title: "2022, de _black and white_ series, Untitled, spray on canvas, 100x100",
    },
    {
      url: "/Inside/24.jpg",
      title: "2022, de _black and white_ series, _Untitled_ acrilic on canvas 120x70_",
    },
    {
      url: "/Inside/25.jpg",
      title: "2022, de _black and white_ series Untitled 100x100 spray on canvas",
    },
    {
      url: "/Inside/26.jpg",
      title: "2022, de _black and white_ series _Back to Black_, Untitled oil on canvas 70x50_",
    },
    {
      url: "/Inside/27.jpg",
      title: "2022, de _black and white_ series , _Titanium_, oil on canvas 70x50_",
    },
    {
      url: "/Inside/28.jpg",
      title: "2022, da série _abstrai minha depressão_, Untitled #10, acrílics on canvas, 60x40",
    },
    {
      url: "/Inside/29.jpg",
      title: "2022, da série _abstrai minha depressão_, Untitled #9, acrílics on canvas 60x40",
    },
    {
      url: "/Inside/30.jpg",
      title: "2022, da serie _abstrai minha depressão_, untitled #8, mixmedia on canvas, 140x60",
    },
    {
      url: "/Inside/31.jpg",
      title: "2022, da série _abstrai minha depressão_, Untitled #7 ,mixmedia on canvas, 70x40",
    },
    {
      url: "/Inside/32.jpg",
      title: "2022, da série _abstrai minha depressão_, Untitled #6, mixmedia on canvas, 110x110",
    },
    {
      url: "/Inside/33.jpg",
      title: "2022, da série _abstrai minha depressão_, Untitled #5, mix media on canvas, 150x10_",
    },
    {
      url: "/Inside/34.jpg",
      title: "2022, da série _abstrai minha depressão_, untitled #4 90x60 mix media on canvas",
    },
    {
      url: "/Inside/35.jpg",
      title: "2022, da série _abstrai minha depressão_, Untitled #3, mixmedia on canvas, 90x70",
    },
    {
      url: "/Inside/36.jpg",
      title: "2022, da série _abstrai minha depressão_, Untitled #3, mixmedia on canvas, 90x70(1)",
    },
    {
      url: "/Inside/37.jpg",
      title: "2022, da série _abstrai minha depressão_, untitled #1, mixmedia on canvas, 90x70",
    },
    {
      url: "/Inside/38.jpg",
      title: "2022 untitled 160x90 mix media on canvas_",
    },
    {
      url: "/Inside/39.jpg",
      title: "2021. 100x100 mix media _untitled_",
    },
    {
      url: "/Inside/40.jpg",
      title: "2021, de SOUL series, _3333 malas_ mix media on canvas 220x80_",
    },
    {
      url: "/Inside/41.jpg",
      title: "2021, de _Soul Series_, _alma mala_, acrílics on canvas, 60x60",
    },
    {
      url: "/Inside/42.jpg",
      title: "2021, da série SOUL,  _Untitled_, 100x75 mixmedia on canvas",
    },
    {
      url: "/Inside/43.jpg",
      title: "2021 _untitled_ 220x90 mixmedia on canvas",
    },
    {
      url: "/Inside/44.jpg",
      title: "2021  _Retirantes_, interpretação de Portinari, mix media on canvas 150 x 90_",
    },
    {
      url: "/Inside/45.jpg",
      title: "2020, _Visceral_ mixmedia on canvas 100x40",
    },
    {
      url: "/Inside/46.jpg",
      title: "2020,  _Retirantes_ re-interpretação de Portinari,  mix media on canvas 200x120",
    },
    {
      url: "/Inside/47.jpg",
      title: "2020 _Ready for the fight_ mix media on wood  90x60",
    },
  ];

  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex flex-col bg-slate-50 min-h-screen py-10 font-courier px-4 text-black text-sm">
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
