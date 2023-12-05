import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-amber-800 text-xl">
      <h1 className="font-harbour text-5xl">Mala</h1>

      <div className="relative h-96 w-96 mt-12 sm:mt-0">
        <Image
          src="https://i.imgur.com/vP9NLou.png"
          alt="Highlighted"
          fill
          className="object-contain transition-opacity duration-700"
        />
      </div>
      <div className="text-center cursor-pointer mt-8 sm:text-xl space-y-1">
        <h1>Artes Visuais</h1>
        <h1>Cinema</h1>
        <h1>Teatro</h1>
        <h1>Música</h1>
      </div>
    </main>
  );
}
