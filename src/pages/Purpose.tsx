import { Card, CardContent } from "@/components/ui/card";
import childrenWellnessImg from "@/assets/children-wellness.jpg";
import React from "react";

const Purpose = () => {
  return (
    <div>
      {/* O que Fazemos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center mb-0">
          <h2 className="text-4xl font-bold text-grayPalette-gray-apple-3 mb-10">
            Nosso Propósito
          </h2>
          <p className="text-justify mb-6 px-20">
            A CannabiBrasil é uma associação sem fins lucrativos com o propósito
            de proporcionar qualidade de vida aos que necessitam. Nosso trabalho
            foca em: Apoio e Assessoria Jurídica: Prestamos suporte para a
            obtenção de licenças e acesso a tratamentos. Acesso a Medicamentos
            Naturais: Facilitamos a obtenção de produtos à base de Cannabis,
            como o Óleo de Cannabis, CBD, pomadas e extratos. Informação e
            Conhecimento: Levamos conhecimento sobre o uso medicinal da planta,
            seus efeitos fitoterápicos e benefícios comprovados.
          </p>

          <h3 className="text-2xl font-bold text-grayPalette-gray-apple-3 mb-4">
            Compromisso Social
          </h3>
          <p className="text-justify  px-20">
            Temos como objetivo amenizar a dor de milhares de brasileiros que
            precisam de tratamentos fitoterápicos e que não têm acesso a
            produtos importados de alto custo. Oferecemos uma alternativa
            acessível e de qualidade, focada no alívio e na melhora da qualidade
            de vida.
          </p>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-1 items-center justify-center text-center mt-0">
        <h2 className="text-4xl font-bold text-grayPalette-gray-apple-3 mb-10">
          Benefícios da Medicina Natural
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-4">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Tratamento Holístico
                    </h3>
                    <p className="text-muted-foreground">
                      Abordamos o corpo como um todo, tratando não apenas os
                      sintomas, mas as causas raiz dos problemas de saúde.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Sem Efeitos Colaterais
                    </h3>
                    <p className="text-muted-foreground">
                      Nossos tratamentos naturais minimizam os efeitos
                      colaterais, proporcionando cura suave e eficaz.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      Sustentabilidade
                    </h3>
                    <p className="text-muted-foreground">
                      Promovemos práticas sustentáveis que respeitam o meio
                      ambiente e preservam os recursos naturais.
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
        </div>
      </section>
    </div>
  );
};

export default Purpose;
