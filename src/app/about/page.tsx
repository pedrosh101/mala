"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Image1 from "../../../public/About/1.jpg";
import Image2 from "../../../public/About/2.jpg";
import Image3 from "../../../public/About/3.jpg";

function About() {
  const [language, setLanguage] = useState("pt");

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex w-full justify-center space-x-8 font-realCourier bg-slate-50">
        <div className="mt-10 sm:mt-20 md:w-4/5 md:px-0 px-6 mb-20 text-black indent-8 space-y-8">
          <div className="flex justify-end w-full">
            <button onClick={toggleLanguage} className="w-fit">
              {language === "pt" ? "Pt/En" : "En/Pt"}
            </button>
          </div>
          {language === "pt" ? (
            <>
              <div className="relative w-full h-[35rem]">
                <Image
                  src={Image1}
                  alt="image1"
                  fill
                  className="object-contain md:h-96"
                />
              </div>
              <h1>
                Mala, 1993, artista multidisciplinar nascido no interior de São
                Paulo, mudou-se ainda jovem para o Rio de Janeiro, onde se
                dedicou principalmente às artes cênicas e ao cinema até a
                pandemia em 2020, quando a pintura passou a ser sua principal
                expressão artística. Mudou-se pra Europa para estudar Artes,
                onde se licenciou em Artes Visuais pela Universidade do Algarve
                (UALG) com mestres como Rui Sanches, Alexandre Barata (Xana),
                Pedro Cabral, Susana Medeiros e Sara Navarro. Nesse período
                também realizou Erasmus em Málaga (ESP), na Faculdade de Belas
                Artes (UMA) e na Università degli Studi di Bari Aldo Moro
                (UNIBA), em Bari (ITA). Atualmente vive e trabalha entre seu
                estúdio em Faro, no Algarve, e o Brasil.
              </h1>
              <h1>
                A jornada de Mala na pintura reflete as múltiplas experiências e
                influências que ele colecionou ao longo do tempo. Suas obras são
                uma sinfonia de técnicas variadas, materiais diversos e uma
                paleta de cores que transcende o convencional. Cada pincelada é
                uma fusão de referências de lugares onde viveu e visitou. É uma
                excêntrica fusão do movimento vibrante e caótico das ruas, com a
                profundidade e a complexidade do expressionismo abstrato.
              </h1>
              <h1>
                Suas pinturas abstratas são atmosferas visuais complexas que
                convidam o espectador a uma imersão profunda, revelando camadas
                de significado que variam de acordo com a perspectiva
                individual. Seu processo criativo é muitas vezes um ato de
                abstração total, onde o gesto e a automatização desempenham
                papéis centrais, seja nas ruas ou no seu estúdio.
              </h1>
              <div className="relative w-full h-[35rem]">
                <Image
                  src={Image3}
                  alt="image3"
                  fill
                  className="object-contain md:h-96"
                />
              </div>
              <h1>
                Os{" "}
                <a
                  href="https://www.instagram.com/cogumala?igsh=MWJqb29pcDNrZjM3Mg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  @cogumala
                </a>{" "}
                são personagens que nasceram em paredes das ruas brasileiras e,
                com o confinamento da pandemia, passaram também para as telas.
                Assim como em seus trabalhos abstratos, usa uma vasta paleta de
                cores e uma mistura diferentes materiais. Se relacionam bastante
                com a estética da Pop-Art através das formas e das cores e
                carregam quase sempre uma mensagem filosófica, existencial,
                psicológica ou/e uma crítica social em seu conteúdo.
              </h1>
              <h1 className="py-6">
                Sua prática/pesquisa artística vai muito além da Pintura e do
                Grafitti,{" "}
                <a
                  href="https://www.instagram.com/arts.of.mala?igsh=MWJqb29pcDNrZjM3Mg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  @arts.of.mala
                </a>{" "}
                atuou nos palcos e sets de filmagem nos 10 anos que antecederam
                a Pandemia. Fez teatro nos palcos e nas ruas Cariocas,
                integrando o grupo{" "}
                <a
                  href="https://www.instagram.com/grupotanarua?igsh=OXdqMmpjM3JkYzNu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  &quot;TáNaRua&quot;
                </a>
                , do mestre Amir Hadad.
              </h1>
              <h1>
                Explora e pesquisa também as possibilidades da Performance como
                em{" "}
                <a
                  href="https://www.youtube.com/watch?v=cMKIiT-bfI0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  &quot;COVID 19&quot;
                </a>
                , realizada no final da Pandemia em Faro, Algarve, Portugal e{" "}
                <a
                  href="https://www.youtube.com/watch?v=pA5Z8Jld9Gk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  &quot;Mans don&rsquo;t cry?&quot;
                </a>
                , no sul da Andaluzia, em Málaga na Espanha.
              </h1>
              <h1>
                No Cinema, sua janela de entrada na sétima arte foi a atuação.
                Formou-se em Direção Cinematográfica pela Academia Internacional
                de Cinema (AIC) no Rio de Janeiro onde realizou{" "}
                <a
                  href="https://vimeo.com/215559046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  Sonho de Fumaça
                </a>{" "}
                entre outros filmes. Posteriormente estudou Montagem
                Cinematográfica na EICTV, em Cuba e depois produção musical na
                Academia Internacional de Música Eletrônica (AIMEC), em
                Campinas/SP, cidade em que nasceu.
              </h1>
              <div className="indent-0 space-y-8 pt-16">
                <h1>CV</h1>
                <h1>
                  2021_2024 - LICENCIATURA EM ARTES VISUAIS - Universidade do
                  Algarve (UALG)
                </h1>
                <h1>2023 - Universidade Bellas Artes Málaga (UMA) - ERASMUS</h1>
                <h1>
                  2022 - Università degli Studi di Bari Aldo Moro (UNIBA) -
                  ERASMUS
                </h1>
                <h1>
                  2020 - Workshop de Cinema com Lucrecia Martel - Academia
                  Internacional de Cinema (AIC)
                </h1>
                <h1>2020 - Produção musical - AIMEC</h1>
                <h1>
                  2018 - Taller montagem - Escuela Internacional de Cine y
                  Televisión (EICTV)
                </h1>
                <h1>
                  2016_17 - Direção Cinematográfica - Academia Internacional de
                  Cinema (AIC), Rio de Janeiro
                </h1>
                <h1>
                  2016 - Método Fátima Toledo - Studio Fátima Toledo, São Paulo
                </h1>
                <h1>
                  2013_15 - Atuação para Teatro, TV e Cinema - Escola de Atores
                  Wolf Maya, Rio de Janeiro/São Paulo
                </h1>
                <h1 className="pt-16">Exposições</h1>
                <h1>
                  2024 - Exposição Coletiva AMALGAMA
                  <br />
                  Convento de Santo Antônio, Loulé, PT.
                  <br />
                  Curadoria: Xana, Pedro Cabral e Susana Medeiros
                </h1>
                <h1>
                  2023 - Exposição Coletiva OURO AZUL
                  <br />
                  IPDJ, Faro, PT.
                  <br />
                  Curadoria: Luís Marques e Ruben Gonçalves
                </h1>
                <h1>
                  2022 - Exposição Coletiva LOUD
                  <br />
                  Galeria Arquente, Faro, PT.
                  <br />
                  Curadoria: Guilherme Gon
                </h1>
              </div>
              <div className="relative w-full h-[35rem]">
                <Image
                  src={Image2}
                  alt="image2"
                  fill
                  className="object-contain md:h-96"
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative w-full h-[35rem]">
                <Image
                  src={Image1}
                  alt="image1"
                  fill
                  className="object-contain md:h-96"
                />
              </div>
              <h1>
                Mala, born in 1993, is a multidisciplinary artist from the
                interior of São Paulo. He moved to Rio de Janeiro at a young
                age, where he primarily dedicated himself to performing arts and
                cinema until the 2020 pandemic, when painting became his main
                artistic expression.
              </h1>
              <h1 className="pb-6">
                He relocated to Europe to study arts, earning a degree in Visual
                Arts from the University of Algarve (UALG), studying under
                masters such as Rui Sanches, Alexandre Barata (Xana), Pedro
                Cabral, Susana Medeiros, and Sara Navarro. During this period,
                he also participated in Erasmus programs in Málaga (ESP) at the
                Faculty of Fine Arts (UMA) and at the Università degli Studi di
                Bari Aldo Moro (UNIBA) in Bari (ITA). Currently, he lives and
                works between his studio in Faro, Algarve, and Brazil.
              </h1>
              <h1>
                Mala&rsquo;s journey in painting reflects the multiple
                experiences and influences he has gathered over time. His works
                are a symphony of varied techniques, diverse materials, and a
                color palette that transcends the conventional.
              </h1>
              <h1>
                Each brushstroke is a fusion of references from places he has
                lived and visited. It is an eccentric blend of the vibrant and
                chaotic movement of the streets with the depth and complexity of
                abstract expressionism.
              </h1>
              <h1>
                His abstract paintings are complex visual atmospheres that
                invite the viewer to deep immersion, revealing layers of meaning
                that vary according to individual perspective.
              </h1>
              <h1>
                His creative process is often an act of total abstraction, where
                gesture and automatization play central roles, whether on the
                streets or in his studio.
              </h1>
              <div className="relative w-full h-[35rem]">
                <Image
                  src={Image3}
                  alt="image3"
                  fill
                  className="object-contain md:h-96"
                />
              </div>
              <h1>
                The{" "}
                <a
                  href="https://www.instagram.com/cogumala?igsh=MWJqb29pcDNrZjM3Mg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  &quot;Babylonian Mushrooms&quot;
                </a>{" "}
                are characters that originated on the walls of Brazilian streets
                and, during the pandemic lockdown, also transitioned to
                canvases. Similar to his abstract works, he uses a vast color
                palette and a mix of different materials. They are closely
                related to Pop-Art aesthetics through their forms and colors and
                almost always carry a philosophical, existential, psychological,
                or social critique in their content.
              </h1>
              <h1 className="py-6">
                His artistic practice and research go far beyond Painting and
                Graffiti.
              </h1>
              <h1>
                <a
                  href="https://www.instagram.com/arts.of.mala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  @arts.of.mala
                </a>{" "}
                worked on stages and film sets for the 10 years preceding the
                pandemic. He performed in theater on the stages and streets of
                Rio de Janeiro, integrating the group{" "}
                <a
                  href="https://www.instagram.com/grupotanarua?igsh=OXdqMmpjM3JkYzNu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  &quot;TáNaRua&quot;
                </a>{" "}
                under the direction of master Amir Hadad.
              </h1>
              <h1>
                He also explores and researches the possibilities of
                Performance, as seen in{" "}
                <a
                  href="https://www.youtube.com/watch?v=cMKIiT-bfI0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  &quot;COVID 19&quot;
                </a>
                , held at the end of the pandemic in Faro, Algarve, Portugal,
                and{" "}
                <a
                  href="https://www.youtube.com/watch?v=pA5Z8Jld9Gk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-800 bg-stone-200"
                >
                  &quot;Mans don&rsquo;t cry?&quot;
                </a>{" "}
                in southern Andalusia, Málaga, Spain.
              </h1>
              <h1>
                In Cinema, his gateway to the seventh art was acting. He
                graduated in Film Directing from the International Academy of
                Cinema (AIC) in Rio de Janeiro, where he created &quot;Sonho de
                Fumaça&quot; among other films. Later, he studied Film Editing
                at EICTV in Cuba and then music production at the International
                Academy of Electronic Music (AIMEC) in Campinas/SP, the city
                where he was born.
              </h1>
              <div className="indent-0 space-y-8 pt-16">
                <h1>CV</h1>
                <h1>
                  2021_2024 - Bachelor&rsquo;s Degree in Visual Arts -
                  University of Algarve (UALG)
                </h1>
                <h1>2023 - University of Fine Arts Málaga (UMA) - ERASMUS</h1>
                <h1>
                  2022 - Università degli Studi di Bari Aldo Moro (UNIBA) -
                  ERASMUS
                </h1>
                <h1>
                  2020 - Cinema Workshop with Lucrecia Martel - International
                  Academy of Cinema (AIC)
                </h1>
                <h1>2020 - Music Production - AIMEC</h1>
                <h1>
                  2018 - Editing Workshop - International School of Film and
                  Television (EICTV)
                </h1>
                <h1>
                  2016_17 - Film Directing - International Academy of Cinema
                  (AIC), Rio de Janeiro
                </h1>
                <h1>
                  2016 - Fátima Toledo Method - Studio Fátima Toledo, São Paulo
                </h1>
                <h1>
                  2013_15 - Acting for Theater, TV, and Film - Wolf Maya Actors
                  School, Rio de Janeiro/São Paulo
                </h1>
                <h1 className="pt-16">Exhibitions</h1>
                <h1>
                  2024 - Group Exhibition AMALGAMA <br />
                  Convento de Santo Antônio, Loulé, PT. <br />
                  Curated by Xana, Pedro Cabral, and Susana Medeiros
                </h1>
                <h1>
                  2023 - Group Exhibition OURO AZUL <br />
                  IPDJ, Faro, PT.
                  <br />
                  Curated by Luís Marques and Ruben Gonçalves
                </h1>
                <h1>
                  2022 - Group Exhibition LOUD
                  <br />
                  Arquente Gallery, Faro, PT.
                  <br />
                  Curated by Guilherme Gon
                </h1>
              </div>

              <div className="relative w-full h-[35rem]">
                <Image
                  src={Image2}
                  alt="image2"
                  fill
                  className="object-contain md:h-96"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default About;
