import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Individual",
      price: "R$ 420,00",
      period: "/ano",
      popular: false,
      features: [
        "Titular tem direito a registrar um dependente menor de 18 anos, ou maior de 65 anos, ou Pet.",
        "Acolhimento",
        "Desconto em Consultas",
        "Acesso aos produtos para até 2 prescrições",
        "(Titular + 1 dependente menor de idade, maior de 65 anos ou Pet)",
      ],
    },
    {
      name: "Família",
      price: "R$ 630,00",
      period: "/ano",
      popular: true,
      features: [
        "Titular tem direito a registrar até dependentes com idade entre 18 e 65 anos",
        "Acolhimento",
        "Desconto em Consultas",
        "Acesso aos produtos para até 2 prescrições",
        "(Titular + 1 dependente menor de idade, maior de 65 anos ou Pet)",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-grayPalette-gray-apple-7 text-center mb-0">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-grayPalette-gray-apple-1 mb-6">
            Associe-se
          </h1>
          <p className="text-xl ext-grayPalette-gray-apple-1 max-w-3xl mx-auto">
            Escolha o plano ideal para você e sua família e tenha acesso
            completo aos nossos serviços
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-primary shadow-natural scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star size={16} />
                      Mais Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className="text-primary mt-1 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full mt-6"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.popular ? "Escolher Plano" : "Selecionar"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Por que se Associar?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Descontos
                </h3>
                <p className="text-muted-foreground">
                  Descontos exclusivos em produtos e consultas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Acesso Facilitado
                </h3>
                <p className="text-muted-foreground">
                  Muitos medicamentos à base de cannabis importados ou nacionais
                  são caros e de difícil obtenção, os associados têm acesso
                  facilitado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Segurança Jurídica
                </h3>
                <p className="text-muted-foreground">
                  Nossa associação opera com respaldo jurídico, para cultivar,
                  manipular e desistir produtos aos associados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Comunidade
                </h3>
                <p className="text-muted-foreground">
                  Faça parte de uma comunidade engajada em saúde natural
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Posso cancelar minha associação a qualquer momento?
                </h3>
                <p className="text-muted-foreground">
                  Sim, você pode cancelar sua associação a qualquer momento sem
                  multas ou taxas adicionais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Como funcionam as consultas online?
                </h3>
                <p className="text-muted-foreground">
                  Nós nao realizamos consultas, indicamos médicos ou você pode
                  solicitar sua medicação com prescrição de outro profissional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Os descontos se aplicam a todos os produtos?
                </h3>
                <p className="text-muted-foreground">
                  Os descontos se aplicam à maioria dos nossos produtos
                  naturais, exceto itens em promoção específica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
