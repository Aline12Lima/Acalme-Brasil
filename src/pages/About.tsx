// src/pages/About.tsx

import { Card, CardContent } from "@/components/ui/card";
import childrenWellnessImg from "@/assets/children-wellness.jpg";
import imgBackground from "@/assets/Video_analise_da_planta.mp4";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div>
     

      <section className="py-10 relative">
        {/* Mission Statement */}
        <div className="bg-gradient-section rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nossa Missão
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Amar, Cuidar, Acolher e Curar.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Temos como missão amar, cuidar e acolher, promovendo qualidade de
            vida por meio do acesso a medicamentos naturais à base de cannabis.
            Além de oferecer suporte jurídico e orientação para obtenção de
            licenças, busca levar informação, consciência e alternativas
            terapêuticas acessíveis para quem necessita, com foco em aliviar
            dores, complementar tratamentos e transformar vidas.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Política e Termos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Termo de Consentimento */}
            <Card>
              <CardContent className="p-8 text-center bg-gradient-hero rounded-lg h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl text-grayPalette-gray-apple-3 font-bold font-semibold mb-4 text-primary">
                    Termo de consentimento
                  </h3>
                  <p className="text-muted-foreground text-white">
                    Este Termo de Consentimento Livre e Esclarecido tem como
                    finalidade registrar a ciência e a concordância do(a)
                    paciente em integrar-se a uma associação canábica que atua
                    no apoio ao tratamento médico com produtos derivados da
                    Cannabis sativa.
                  </p>
                </div>
                <Link to="/termo-consentimento" className="mt-4">
                  <Button className="w-full px-4 py-3 text-grayPalette-gray-apple-2 bg-grayPalette-gray-apple-5 hover:bg-grayPalette-gray-apple-4">
                    Ler mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Card 2: Política de Privacidade */}
            <Card>
              <CardContent className="p-8 text-center bg-gradient-hero rounded-lg h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl text-grayPalette-gray-apple-3 font-bold font-semibold mb-4 text-primary">
                    Política de Privacidade e Segurança
                  </h3>
                  <p className="text-muted-foreground text-white">
                    A Política de Privacidade e Segurança descrita abaixo
                    constitui um compromisso da CannabiBrasil em proteger a
                    privacidade e a segurança dos dados pessoais dos usuários.
                  </p>
                </div>
                <Link to="/politica-privacidade" className="mt-4">
                  <Button className="w-full px-4 py-3 text-grayPalette-gray-apple-2 bg-grayPalette-gray-apple-5 hover:bg-grayPalette-gray-apple-4">
                    Ler mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Card 3: Redes Sociais */}
            <Card>
              <CardContent className="p-8 text-center bg-gradient-hero rounded-lg h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl text-grayPalette-gray-apple-3 font-bold font-semibold mb-4 text-primary">
                    Redes Sociais
                  </h3>
                  <div className="flex justify-center items-center">
                    <p className="text-white"> Nos siga nas redes sociais:</p>
                  </div>
                </div>
                <div className="flex justify-center flex-col gap-4 mt-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-grayPalette-gray-apple-2 hover:text-gray-100 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-grayPalette-gray-apple-2 hover:text-gray-100 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                    <span>YouTube</span>
                  </a>
                  <Button className="w-full px-4 py-3 text-grayPalette-gray-apple-2 bg-grayPalette-gray-apple-5 hover:bg-grayPalette-gray-apple-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      Seguir
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
