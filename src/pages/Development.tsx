import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Development = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-primary hover:text-primary/80"
        >
          ← Voltar
        </button>

        <div className="glass-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <Code size={48} className="text-primary" />
            <h1 className="heading text-4xl">Desenvolvimento</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-6">
              Desenvolvimento de soluções tecnológicas sob medida para 
              atender às necessidades específicas do seu negócio.
            </p>

            <h2 className="text-2xl mb-4">Como podemos ajudar</h2>
            <ul className="space-y-4 mb-8">
              <li>Desenvolvimento de aplicações web e mobile</li>
              <li>APIs e microsserviços</li>
              <li>Sistemas corporativos</li>
              <li>Integrações de sistemas</li>
              <li>Manutenção e suporte</li>
            </ul>

            <h2 className="text-2xl mb-4">Benefícios</h2>
            <ul className="space-y-4 mb-8">
              <li>Soluções personalizadas</li>
              <li>Tecnologias modernas</li>
              <li>Escalabilidade</li>
              <li>Segurança e confiabilidade</li>
              <li>Suporte contínuo</li>
            </ul>

            <div className="mt-8">
              <Button size="lg" className="w-full md:w-auto">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;