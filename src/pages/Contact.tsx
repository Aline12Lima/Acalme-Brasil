import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-grayPalette-gray-apple-6 mb-0">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-grayPalette-gray-apple-2 mb-6">
            Contato
          </h1>
          <p className="text-xl text-grayPalette-gray-apple-1/90 max-w-3xl mx-auto">
            Entre em contato conosco para esclarecer dúvidas ou agendar uma
            consulta
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input placeholder="Assunto da sua mensagem" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Descreva sua dúvida ou como podemos ajudá-lo"
                    rows={6}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Telefone
                      </h3>
                      <p className="text-muted-foreground">(11) 3456-7890</p>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        contato@medicinanatural.com.br
                      </p>
                      <p className="text-muted-foreground">
                        consultas@medicinanatural.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Endereço
                      </h3>
                      <p className="text-muted-foreground">
                        Rua das Plantas Medicinais, 123
                        <br />
                        Jardim Natural - São Paulo, SP
                        <br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Horário de Funcionamento
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 14h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
