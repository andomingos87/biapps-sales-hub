import { BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DataAnalysis = () => {
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
            <BarChart size={48} className="text-primary" />
            <h1 className="heading text-4xl">Análise de Dados</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-6">
              Transforme dados brutos em insights estratégicos para tomar 
              decisões mais assertivas e impulsionar o crescimento do seu negócio.
            </p>

            <h2 className="text-2xl mb-4">Como podemos ajudar</h2>
            <ul className="space-y-4 mb-8">
              <li>Análise exploratória de dados</li>
              <li>Dashboards interativos</li>
              <li>Business Intelligence</li>
              <li>ETL e preparação de dados</li>
              <li>Visualização de dados</li>
            </ul>

            <h2 className="text-2xl mb-4">Benefícios</h2>
            <ul className="space-y-4 mb-8">
              <li>Decisões baseadas em dados</li>
              <li>Identificação de oportunidades</li>
              <li>Otimização de processos</li>
              <li>Previsão de tendências</li>
              <li>Monitoramento de KPIs</li>
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

export default DataAnalysis;