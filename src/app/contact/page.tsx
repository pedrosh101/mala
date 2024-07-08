import Navbar from "@/app/components/navbar";

function Contato() {
  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex flex-col bg-slate-50 md:min-h-screen py-10 font-realCourier px-4 text-black text-sm text-center min-h-screen">
        <h1>Contact</h1>
        <div className="space-y-6 mt-6">
          <div>
            <h1>Instagram:</h1>
            <a
              href="https://instagram.com/art.of.mala"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-800"
            >
              @art.of.mala
            </a>
          </div>
          <div>
            <h1>E-mail:</h1>

            <a
              href="mailto:arts.of.mala@gmail.com"
              className="hover:text-slate-800"
            >
              <p>arts.of.mala@gmail.com</p>
            </a>
          </div>
          <div>
            <h1>YouTube:</h1>
            <a
              href="https://instagram.com/art.of.mala"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-800"
            >
              @oficialmala
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
