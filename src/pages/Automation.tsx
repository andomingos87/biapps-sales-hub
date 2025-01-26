import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Automation = () => {
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
            <Bot size={48} className="text-primary" />
            <h1 className="heading text-4xl">Automação</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-6">
              Automatize processos repetitivos e libere sua equipe para focar 
              em atividades estratégicas que agregam mais valor ao negócio.
            </p>

            <h2 className="text-2xl mb-4">Como podemos ajudar</h2>
            <ul className="space-y-4 mb-8">
              <li>Desenvolvimento de RPA (Robotic Process Automation)</li>
              <li>Integração de sistemas e APIs</li>
              <li>Automação de processos de negócio (BPA)</li>
              <li>Workflows automatizados</li>
              <li>Chatbots e assistentes virtuais</li>
            </ul>

            <h2 className="text-2xl mb-4">Benefícios</h2>
            <ul className="space-y-4 mb-8">
              <li>Redução de erros humanos</li>
              <li>Aumento da produtividade</li>
              <li>Economia de tempo e recursos</li>
              <li>Padronização de processos</li>
              <li>Melhor experiência do cliente</li>
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

export default Automation;