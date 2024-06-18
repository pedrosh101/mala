import Navbar from "@/app/components/navbar";

function About() {
  return (
    <>
      <Navbar isProjetosPage={true}/>
      <div className="flex w-full justify-center space-x-8 font-courier bg-slate-50">
        <div className="mt-10 sm:mt-20 md:w-2/6 md:px-0 px-2 mb-20 text-black">
          A jornada de Mala na pintura reflete as múltiplas experiências e
          influências que ele colecionou ao longo do tempo.
          <br />
          <br />
          Sua obra é uma sinfonia de técnicas variadas, materiais diversos e uma
          paleta de cores que transcende o convencional. Cada pincelada é uma
          fusão de referências de lugares onde viveu e visitou, resultando em um
          estilo próprio e único que ele chama de Malaismo.
          <br />
          <br />
          O Malaismo é a essência do fazer artístico de Mala. Ele nasce do
          grafiti mas faz interseção com os estilos distintos de pixação do
          Brasil, principalmente de Sao Paulo e Rio de Janeiro, com a arte
          expressionista abstrata.
          <br />
          <br />
          É uma homenagem ao movimento vibrante e caótico das ruas, mesclado com
          a profundidade e a complexidade do expressionismo abstrato. Seu
          processo criativo é muitas vezes um ato de abstração, onde o gesto e a
          automatização desempenham papéis centrais
          <br />
          Através desse método, Mala busca capturar a energia bruta e a
          espontaneidade do momento. Suas pinturas são narrativas visuais que
          convidam o espectador a uma imersão profunda, revelando camadas de
          significado que variam de acordo com a perspectiva individual.
          <br />
          <br />
          Sua prática/pesquisa artística vai muito além da pintura, Mala navega
          entre as Artes Cênicas, Performance, Cinema, Música e outros campos
          das artes visuais.
          <br />
          <br />
          Atualmente mora e trabalha entre Europa e Brasil. <br />
          CV 2021_2024 - Universidade do Algarve (UALG)
          <br /> LICENCIATURA EM ARTES VISUAIS
          <br /> 2023 - Universidade Bellas Artes Málaga (UMA) - ERASMUS
          <br /> 2022 - Università degli studi di Bari Aldo Moro
          <br /> (Uniba) - ERASMUS
          <br /> 2018 - Escuela Internacional de Cine y Televisión (EICTV)
          <br /> 2016_17 - Academia internacional de Cinema (AIC), Rio de
          Janeiro
          <br /> 2013_15 - Escola de Atores WolfMaya, Rio de Janeiro
          
        </div>
      </div>
    </>
  );
}

export default About;
