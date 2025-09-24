import { Button } from "@/components/ui/button";
import laboratoryImg from "@/assets/oleo.jpeg";
import plantSeedlingImg from "@/assets/oleo_eplanta.jpeg";
import imgBackground from "@/assets/Video_analise_da_planta.mp4";
import React from "react";
import HeroCarousel from "@/components/common/HeroCarousel";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4 text-center h-[400px] ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full  object-cover z-0 "
          >
            <source src={imgBackground} type="video/mp4" />
          </video>

          <div className="absolute inset-0 flex flex-col items-left justify-left">
            <h1 className="text-4xl font-bold text-white py-12  ml-8 text-left">
              Sobre Nós
            </h1>
            <p className="text-xl text-pretty text-white text-left auto px-12 max-w-4xl">
              A CannabiBrasil é uma associação sem fins lucrativos que visa dar
              apoios, conhecimento, transmissão de informações e acessibilidade
              a quem pacientes que fazem uso medicinal da planta cannabis
              sativa, popularmente conhecida como maconha, com a finalidade
              exclusivamente medicinal.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 1: Hero com Carrossel */}
      <section className="min-h-[40vh] mb-0">
        <div className="relative w-full min-h-[40vh] overflow-hidden">
          <HeroCarousel />
        </div>
      </section>

      {/* Seção 2: Laboratório de Remédios Naturais */}
      <section className="py-20 bg-gradient-section  ">
        <div className="container mx-auto px-4 ml-4">
          <div className="grid md:grid-cols-2  items-center">
            <div>
              <img
                src={laboratoryImg}
                alt="Laboratório de remédios manipulados"
                className="rounded-lg shadow-natural w-full h-auto"
                style={{
                  height: "300px",
                  width: "80%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 ">
                Remédios Naturais
              </h2>
              <p className="text-lg text-muted-foreground mb-6 mr-10">
                Nosso laboratório especializado desenvolve remédios manipulados
                com ingredientes naturais de alta qualidade. Combinamos tradição
                e ciência para oferecer tratamentos eficazes que respeitam seu
                corpo e o meio ambiente.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Cada formulação é cuidadosamente preparada por farmacêuticos
                especializados, garantindo segurança e eficácia em todos os
                nossos produtos.
              </p>
              <Button className="px-6 py-3 hover:bg-grayPalette-gray-apple-2 ">
                Mais informações
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*  Seção 3 : Orientação Profissional e Prescrição Médica */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 ml-4">
              <h2 className="text-4xl font-bold text-foreground mb-6 ">
                Orientação Profissional e Prescrição Médica
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Se você ainda não passou por uma consulta médica e precisa de
                orientação, nossa equipe de profissionais de saúde está pronta
                para ajudar. Podemos indicar especialistas que farão o
                acompanhamento necessário. Lembre-se: por segurança e
                conformidade legal, nenhum medicamento é fornecido sem a devida
                prescrição médica.
              </p>

              <Button className=" px-6 py-3 hover:bg-grayPalette-gray-apple-2">
                Mais informações
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={plantSeedlingImg}
                alt="Muda de planta sendo cuidada"
                className="rounded-lg shadow-natural w-full h-auto"
                style={{
                  height: "300px", // Reduced height
                  width: "80%", // Reduced width
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Cultivo e Cuidado com a Natureza */}
      <section className="py-20 bg-grayPalette-gray-apple-6">
        <div className="container mx-auto px-4 ml-4">
          <div className="grid md:grid-cols-2  items-center mr-8">
            <div>
              <img
                src={laboratoryImg}
                alt="Laboratório de remédios manipulados"
                className="rounded-lg shadow-natural w-full h-auto"
                style={{
                  height: "300px", // Reduced height
                  width: "80%", // Reduced width
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Cultivo e Cuidado com a Natureza
              </h2>
              <p className="text-lg text-muted-foreground mb-6 mr-4">
                Acreditamos que a verdadeira medicina começa na terra. Nossos
                jardins e estufas cultivam plantas medicinais com técnicas
                sustentáveis, preservando a biodiversidade e respeitando os
                ciclos naturais.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Cada planta é cuidadosamente selecionada e cultivada sem
                pesticidas ou produtos químicos nocivos, mantendo todas as
                propriedades terapêuticas naturais.
              </p>
              <Button className="px-6 py-3 hover:bg-grayPalette-gray-apple-2 ">
                Mais informações
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Chamada para Ação (Call to Action) */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl  text-primary-foreground mb-6">
            Junte-se à Nossa Comunidade
          </h2>
          <h3 className="text-6xl font-bold text-primary-foreground mb-6">
            Associe-se Agora!
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Faça parte de uma comunidade que valoriza a saúde natural e
            sustentável
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="px-8 py-3 hover:bg-grayPalette-gray-apple-2 "
          >
            Fazer Inscrição
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
