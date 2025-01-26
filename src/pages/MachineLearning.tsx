import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MachineLearning = () => {
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
            <Brain size={48} className="text-primary" />
            <h1 className="heading text-4xl">Machine Learning</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-6">
              Potencialize seu negócio com soluções de Machine Learning personalizadas 
              que transformam dados em insights acionáveis.
            </p>

            <h2 className="text-2xl mb-4">Como podemos ajudar</h2>
            <ul className="space-y-4 mb-8">
              <li>Desenvolvimento de modelos preditivos customizados</li>
              <li>Análise de padrões e tendências em grandes volumes de dados</li>
              <li>Automação de processos decisórios</li>
              <li>Otimização de operações através de algoritmos inteligentes</li>
              <li>Implementação de sistemas de recomendação</li>
            </ul>

            <h2 className="text-2xl mb-4">Benefícios</h2>
            <ul className="space-y-4 mb-8">
              <li>Redução de custos operacionais</li>
              <li>Melhoria na tomada de decisões</li>
              <li>Aumento da eficiência operacional</li>
              <li>Vantagem competitiva no mercado</li>
              <li>Escalabilidade dos processos de negócio</li>
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

export default MachineLearning;