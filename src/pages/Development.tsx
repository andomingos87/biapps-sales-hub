import { Code, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";

const Development = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-base-200 to-base-100">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 text-primary hover:text-primary/80"
          >
            ← Voltar
          </button>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Code size={48} className="text-primary" />
                <h1 className="heading text-4xl md:text-5xl">Desenvolvimento</h1>
              </div>
              <p className="text-xl mb-8">
                Desenvolvimento de soluções tecnológicas sob medida para 
                atender às necessidades específicas do seu negócio.
              </p>
              <Button size="lg" className="gap-2">
                Falar com especialista <ArrowRight size={20} />
              </Button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Desenvolvimento"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl md:text-4xl text-center mb-16">
            Como podemos ajudar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Desenvolvimento de aplicações web e mobile",
              "APIs e microsserviços",
              "Sistemas corporativos",
              "Integrações de sistemas",
              "Manutenção e suporte",
              "Arquitetura de software"
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all">
                <CheckCircle2 className="text-primary mb-4" size={24} />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl md:text-4xl text-center mb-16">
            Benefícios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Benefícios do Desenvolvimento"
              className="rounded-lg shadow-2xl"
            />
            <div className="space-y-6">
              {[
                "Soluções personalizadas",
                "Tecnologias modernas",
                "Escalabilidade",
                "Segurança e confiabilidade",
                "Suporte contínuo"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl md:text-4xl text-center mb-16">
            O que nossos clientes dizem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Paulo Rodrigues",
                role: "CTO, TechSolutions",
                text: "O sistema desenvolvido superou nossas expectativas em termos de performance e usabilidade."
              },
              {
                name: "Amanda Costa",
                role: "Product Owner, AppMaster",
                text: "A equipe entregou uma solução robusta e escalável, perfeitamente alinhada com nossas necessidades."
              },
              {
                name: "Marcelo Souza",
                role: "CEO, WebPro",
                text: "O suporte contínuo e a qualidade do desenvolvimento nos garantem tranquilidade na operação."
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-8">
                <p className="text-lg mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-base-content/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Development;