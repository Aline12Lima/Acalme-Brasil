import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import childrenWellnessImg from "@/assets/children-wellness.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Sobre Nós
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Dedicados a promover a saúde e bem-estar através da medicina natural
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Benefícios da Medicina Natural
              </h2>
              <div className="space-y-4">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Tratamento Holístico
                    </h3>
                    <p className="text-muted-foreground">
                      Abordamos o corpo como um todo, tratando não apenas os sintomas, 
                      mas as causas raiz dos problemas de saúde.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Sem Efeitos Colaterais
                    </h3>
                    <p className="text-muted-foreground">
                      Nossos tratamentos naturais minimizam os efeitos colaterais, 
                      proporcionando cura suave e eficaz.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Sustentabilidade
                    </h3>
                    <p className="text-muted-foreground">
                      Promovemos práticas sustentáveis que respeitam o meio ambiente 
                      e preservam os recursos naturais.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <img 
                src={childrenWellnessImg} 
                alt="Crianças saudáveis brincando na natureza" 
                className="rounded-lg shadow-natural w-full h-auto"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-section rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nossa Missão
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Promover a saúde e bem-estar das famílias através de produtos e 
              tratamentos naturais de alta qualidade, educação em saúde preventiva 
              e práticas sustentáveis que respeitam o equilíbrio da natureza.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Acreditamos que cada pessoa merece acesso a cuidados de saúde que 
              honrem a sabedoria da natureza e promovam a cura verdadeira e duradoura.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Qualidade
                </h3>
                <p className="text-muted-foreground">
                  Compromisso com a excelência em todos os nossos produtos e serviços.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Transparência
                </h3>
                <p className="text-muted-foreground">
                  Informações claras sobre nossos processos, ingredientes e métodos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Responsabilidade
                </h3>
                <p className="text-muted-foreground">
                  Cuidado responsável com a saúde das pessoas e do planeta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;