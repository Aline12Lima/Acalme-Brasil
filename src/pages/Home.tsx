import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import laboratoryImg from "@/assets/laboratory.jpg";
import plantSeedlingImg from "@/assets/plant-seedling.jpg";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section with Video */}
      <section className="relative min-h-[70vh] bg-gradient-hero flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Medicina Natural
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubra o poder da natureza para sua saúde e bem-estar
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Saiba Mais
          </Button>
        </div>
        
        {/* Video placeholder - you can replace with actual video */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={laboratoryImg} 
                alt="Laboratório de remédios manipulados" 
                className="rounded-lg shadow-natural w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Remédios Naturais
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nosso laboratório especializado desenvolve remédios manipulados 
                com ingredientes naturais de alta qualidade. Combinamos tradição 
                e ciência para oferecer tratamentos eficazes que respeitam seu corpo 
                e o meio ambiente.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Cada formulação é cuidadosamente preparada por farmacêuticos 
                especializados, garantindo segurança e eficácia em todos os nossos produtos.
              </p>
              <Button className="px-6 py-3">
                Conheça Nossos Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Cultivation Section */}
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Faça parte de uma comunidade que valoriza a saúde natural e sustentável
          </p>
          <Button variant="secondary" size="lg" className="px-8 py-3">
            Associe-se Agora
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;