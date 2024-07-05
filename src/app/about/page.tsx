"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";

function About() {
  const [language, setLanguage] = useState("pt");

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <>
      <Navbar isProjetosPage={true} />
      <div className="flex w-full justify-center space-x-8 font-realCourier bg-slate-50">
        <div className="mt-10 sm:mt-20 md:w-1/2 md:px-0 px-6 mb-20 text-black indent-8 space-y-8">
          <button
            onClick={toggleLanguage}
            className="flex justify-end w-full "
          >
            {language === "pt" ? "Switch to English" : "Mudar para Português"}
          </button>
          {language === "pt" ? (
            <>
              <h1>
                Matheus Malavazi, 1993, aka Mala, multiartista nascido no
                interior de São Paulo, mudou-se ainda jovem para o Rio de
                Janeiro, onde se dedicou principalmente às artes cênicas e ao
                cinema até a pandemia em 2020, quando a pintura passou a ser sua
                principal expressão artística. Mudou-se pra Europa para estudar
                Arte Contemporânea, onde se licenciou em Artes Visuais pela
                Universidade do Algarve (UALG) com grandes mestres como Rui
                Sanches, Alexandre Barata (Xana), Pedro Cabral, Susana Medeiros
                e Sara Navarro. Nesse período também realizou Erasmus em Málaga
                (ESP), na Faculdade de Belas Artes (UMA) e na Università degli
                Studi di Bari Aldo Moro (UNIBA), em Bari (ITA). Atualmente vive
                e trabalha entre seu estúdio em Faro, no Algarve, e o Brasil.
              </h1>
              <h1>
                A jornada de Mala na pintura reflete as múltiplas experiências e
                influências que ele colecionou ao longo do tempo. Suas obras são
                uma sinfonia de técnicas variadas, materiais diversos e uma
                paleta de cores que transcende o convencional. Cada pincelada é
                uma fusão de referências de lugares onde viveu e visitou. É uma
                excêntrica fusão do movimento vibrante e caótico das ruas, com a
                profundidade e a complexidade do expressionismo abstrato,
                misturando o clássico com o contemporâneo, e esses dois mundos
                distintos: as telas das galerias e os muros das ruas.
              </h1>
              <h1>
                Suas pinturas abstratas são atmosferas visuais complexas que
                convidam o espectador a uma imersão profunda, revelando camadas
                de significado que variam de acordo com a perspectiva
                individual. Seu processo criativo é muitas vezes um ato de
                abstração total, onde o gesto e a automatização desempenham
                papéis centrais. &quot;Pintar sem pensar&quot; onde a repetição e a
                automação formam uma espécie de mantra, em seu estúdio canaliza
                a energia da rua e deposita nas telas, através dos caps e
                pincéis, criando uma linguagem particular e um estilo próprio.
              </h1>
              <h1>
                Os &quot;Cogumelos babilônicos&quot; (ou &quot;Cogumalas&quot; em português e
                &quot;Mushuroomala&quot; em inglês), que são seu trabalho figurativo, são
                personagens que nasceram em paredes das ruas brasileiras e, com
                o confinamento da pandemia, passaram também para as telas. Assim
                como em seus trabalhos abstratos, usa uma vasta paleta de cores,
                diferentes materiais em superfícies variadas. Os &quot;Cogumalas&quot; se
                relacionam bastante com a estética da Pop-Art através das formas
                e das cores. Esses seres, apesar da aparência amigável, carregam
                sempre consigo uma mensagem filosófica, existencial, psicológica
                e quase sempre uma crítica social em seu conteúdo.
              </h1>
              <h1 className="py-6">
                Sua prática/pesquisa artística vai muito além da Pintura.
                Matheus Malavazi atuou nos palcos e nos sets de filmagem nos 10
                anos que antecederam a Pandemia. Fez teatro nos palcos e nas
                ruas Cariocas, integrando o grupo &quot;TáNaRua&quot;, do mestre Amir
                Hadad.
              </h1>
              <h1>
                No Cinema, sua janela de entrada na sétima arte foi a atuação.
                Formou-se em Direção Cinematográfica pela Academia Internacional
                de Cinema (AIC) no Rio de Janeiro onde realizou seu primeiro
                filme, Sonho de Fumaça, em que além de produzir e co-dirigir com
                Nayara Costa, atuou, editou, montou e fez o desenho de som.
                Posteriormente estudou Montagem na EICTV, em Cuba e, depois de
                esculpir a Imagem (parafraseando Tarkovski), também quis
                esculpir o Som, estudando produção musical na Academia
                Internacional de Música Eletrônica (AIMEC), em Campinas/SP, onde
                nasceu.
              </h1>
              <h1>
                Explora e pesquisa também as possibilidades da Performance como
                em &quot;COVID 19&quot;, realizada no final da Pandemia em Faro, Algarve,
                Portugal e &quot;Mans don&rsquo;t cry?&quot;, no sul da Andaluzia, em Málaga na
                Espanha.
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
                  Curadoria: Guilherme Gonçalves
                </h1>
              </div>
            </>
          ) : (
            <>
              <h1>
                Matheus Malavazi, 1993, aka Mala, a multi-artist born in the
                interior of São Paulo, moved to Rio de Janeiro at a young age,
                where he dedicated himself primarily to the performing arts and
                cinema until the pandemic in 2020, when painting became his main
                artistic expression.
              </h1>
              <h1 className="pb-6">
                He moved to Europe to study Contemporary Art, earning a degree
                in Visual Arts from the University of Algarve (UALG) with
                prominent mentors like Rui Sanches, Alexandre Barata (Xana),
                Pedro Cabral, Susana Medeiros, and Sara Navarro. During this
                period, he also participated in Erasmus programs in Málaga (ESP)
                at the Faculty of Fine Arts (UMA) and at the Università degli
                Studi di Bari Aldo Moro (UNIBA) in Bari (ITA). He currently
                lives and works between his studio in Faro, Algarve, and Brazil.
              </h1>
              <h1>
                Mala's journey in painting reflects the multiple experiences and
                influences he has collected over time. His works are a symphony
                of varied techniques, diverse materials, and a color palette
                that transcends the conventional.
              </h1>
              <h1>
                Each brushstroke is a fusion of references from places he has
                lived and visited: the graffiti from São Paulo, the street art
                from Rio de Janeiro, and the graffiti culture from various
                places around the world, as well as European contemporary art.
              </h1>
              <h1>
                His work is an eccentric fusion of the vibrant and chaotic
                movement of the streets with the depth and complexity of
                abstract expressionism.
              </h1>
              <h1>
                His creative process is often an act of total abstraction, where
                gesture and automatism play central roles.
              </h1>
              <h1>
                “Painting without thinking,” where repetition and automatic
                writing form a kind of mantra, in which all the energy of the
                street is deposited onto the canvas in his studio. The artist
                creates a unique language and a personal style that merges these
                two distinct worlds: graffiti and abstract expressionism. Spray
                paint with oil paint, but not only that...
              </h1>
              <h1>
                Each canvas, linen, or any other surface is like a test tube,
                where experimenting with various colors, materials, and surfaces
                is part of his process and artistic research, always seeking new
                combinations of colors, materials, and surfaces.
              </h1>
              <h1>
                His abstract paintings are complex visual narratives that invite
                the viewer to a deep immersion, revealing layers of meaning that
                vary according to individual perspective.
              </h1>
              <h1 className="py-6">
                This is his main visual research within painting - but not only
                that.
              </h1>
              <h1>
                The &quot;Babylonian Mushrooms&quot; (or &quot;Cogumalas&quot; in Portuguese and
                &quot;Mushuroomala&quot; in English) are his most figurative work. They
                are characters that were born on the walls of Brazilian streets
                and, with the confinement of the pandemic, moved to canvases.
              </h1>
              <h1>
                Just like in his abstract canvases, he heavily uses a wide
                palette of colors, a mix of materials, and surfaces. The
                mushrooms, which at first glance seem naive and even childlike,
                relate closely to the aesthetics of Pop Art, but they always
                carry a philosophical, existential, psychological message and
                almost always a social critique... After all, they were born on
                the walls of Babylon and, as the artist himself says, &quot;the
                magical beings of the forest invaded Babylon.&quot;
              </h1>
              <h1 className="py-6">
                His artistic practice/research goes far beyond Painting.
              </h1>
              <h1>
                Matheus Malavazi worked on stages and film sets in the 10 years
                leading up to the pandemic. He performed in theaters and mainly
                on the streets of Rio de Janeiro, integrating the group
                &quot;TáNaRua,&quot; led by the great master Amir Haddad. He participated
                in short and feature films, web series, television appearances,
                and commercials.
              </h1>
              <h1>
                He explores and researches the possibilities of Performance,
                having performed some in Europe, such as &quot;COVID 19&quot; at the end
                of the pandemic in Faro, PT, and &quot;Mans don&rsquo;t cry&quot; in Málaga,
                southern Spain.
              </h1>
              <h1>
                In Cinema, his gateway to the seventh art was acting, and after
                making his first feature film, he fell in love with cinema and
                wanted to work behind the camera as well. He graduated in Film
                Directing from the International Academy of Cinema (AIC) in Rio
                de Janeiro.
              </h1>
              <h1>
                Music and Sound have always fascinated him since childhood. They
                ceased to be just hobbies; he began studying and researching
                sound possibilities while making films in Rio de Janeiro, where
                he studied with the sound and film editing master Waldir Xavier.
                Shortly after, he specialized in Editing at EICTV in Cuba.
                Later, he studied music production at AIMEC in Campinas, São
                Paulo.
              </h1>
              <div className="indent-0 space-y-8 pt-16">
                <h1>CV</h1>
                <h1>
                  2021_2024 - Bachelor in Visual Arts - University of Algarve
                  (UALG)
                </h1>
                <h1>2023 - Fine Arts University Málaga (UMA) - Erasmus</h1>
                <h1>
                  2022 - Università degli Studi di Bari Aldo Moro (UNIBA) -
                  Erasmus
                </h1>
                <h1>
                  2020 - Cinema Workshop with Lucrecia Martel - International
                  Academy of Cinema (AIC)
                </h1>
                <h1>2020 - Music Production - AIMEC</h1>
                <h1>
                  2018 - Editing Workshop - International Film and Television
                  School (EICTV)
                </h1>
                <h1>
                  2016_17 - Film Directing - International Academy of Cinema
                  (AIC), Rio de Janeiro
                </h1>
                <h1>
                  2016 - Fátima Toledo Method - Fátima Toledo Studio, São Paulo
                </h1>
                <h1>
                  2013_15 - Acting for Theater, TV, and Cinema - WolfMaya Actors
                  School, Rio de Janeiro/São Paulo
                </h1>
                <h1 className="pt-16">Exhibitions</h1>
                <h1>
                  2024 - Collective Exhibition AMALGAMA <br />
                  Convento de Santo Antônio, Loulé, PT. <br />
                  Curation: Xana, Pedro Cabral, and Susana Medeiros
                </h1>
                <h1>
                  2023 - Collective Exhibition OURO AZUL <br />
                  IPDJ, Faro, PT.
                  <br />
                  Curation: Luís Marques and Ruben Gonçalves
                </h1>
                <h1>
                  2022 - Collective Exhibition LOUD
                  <br />
                  Arquente Gallery, Faro, PT.
                  <br />
                  Curation: Guilherme Gonçalves
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default About;
