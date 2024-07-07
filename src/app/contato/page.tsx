import Navbar from "@/app/components/navbar";

function Contato() {
  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex flex-col bg-slate-50 md:min-h-screen py-10 font-realCourier px-4 text-black text-sm text-center">
        <h1>Info</h1>
        <h1>IG</h1>
        <h1>YT</h1>
      </div>
    </>
  );
}

export default Contato;
