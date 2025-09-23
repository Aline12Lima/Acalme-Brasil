import { Button } from "@/components/ui/button";
import laboratoryImg from "@/assets/oleo_eplanta.jpeg";
import plantSeedlingImg from "@/assets/plant-seedling.jpg";
import React from "react";
import HeroCarousel from "@/components/common/HeroCarousel";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Seção 1: Hero com Carrossel */}
      <section className="min-h-[40vh]">
        <div className="relative w-full min-h-[40vh] overflow-hidden">
          <HeroCarousel />
        </div>
      </section>

      {/* Seção 2: Laboratório de Remédios Naturais */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                Remédios Naturais
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
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
              <Button className="px-6 py-3">Conheça Nossos Produtos</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Cultivo e Cuidado com a Natureza */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Cultivo e Cuidado com a Natureza
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
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
              <Button className="px-6 py-3">
                Saiba Mais Sobre Nosso Cultivo
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

      {/* Seção 4: Chamada para Ação (Call to Action) */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Faça parte de uma comunidade que valoriza a saúde natural e
            sustentável
          </p>
          <Button variant="secondary" size="lg" className="px-8 py-3">
            Associe-se Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
