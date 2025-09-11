import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/Layout";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Os Benefícios da Fitoterapia no Tratamento de Ansiedade",
      excerpt: "Estudo científico demonstra a eficácia de plantas medicinais no controle da ansiedade e estresse.",
      author: "Dr. Maria Santos",
      date: "15 de Março, 2024",
      readTime: "5 min",
      category: "Pesquisa Científica"
    },
    {
      id: 2,
      title: "Medicina Integrativa: O Futuro dos Cuidados de Saúde",
      excerpt: "Como a combinação de medicina tradicional e natural está revolucionando os tratamentos de saúde.",
      author: "Dr. João Silva",
      date: "10 de Março, 2024",
      readTime: "8 min",
      category: "Medicina Integrativa"
    },
    {
      id: 3,
      title: "Plantas Medicinais e Sistema Imunológico: Uma Revisão Científica",
      excerpt: "Análise das propriedades imunomoduladoras de plantas medicinais brasileiras.",
      author: "Dra. Ana Costa",
      date: "5 de Março, 2024",
      readTime: "12 min",
      category: "Imunologia"
    },
    {
      id: 4,
      title: "Sustentabilidade na Produção de Fitoterápicos",
      excerpt: "Práticas sustentáveis na coleta e cultivo de plantas medicinais para preservação da biodiversidade.",
      author: "Prof. Carlos Lima",
      date: "28 de Fevereiro, 2024",
      readTime: "6 min",
      category: "Sustentabilidade"
    },
    {
      id: 5,
      title: "Aromaterapia Científica: Evidências e Aplicações Clínicas",
      excerpt: "Revisão dos estudos científicos sobre os efeitos terapêuticos dos óleos essenciais.",
      author: "Dra. Lucia Ferreira",
      date: "20 de Fevereiro, 2024",
      readTime: "7 min",
      category: "Aromaterapia"
    },
    {
      id: 6,
      title: "Nutrição Funcional e Medicina Preventiva",
      excerpt: "Como a alimentação baseada em plantas pode prevenir doenças crônicas.",
      author: "Dr. Pedro Oliveira",
      date: "15 de Fevereiro, 2024",
      readTime: "10 min",
      category: "Nutrição"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Artigos Científicos
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conteúdo baseado em evidências científicas sobre medicina natural e fitoterapia
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-natural transition-smooth cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <span className="bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-smooth">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Ler Artigo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Mantenha-se Atualizado
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receba as últimas pesquisas e artigos sobre medicina natural diretamente em seu email
          </p>
          <Button className="px-8 py-3">
            Assinar Newsletter
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;