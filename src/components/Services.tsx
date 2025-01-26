import { Brain, Bot, BarChart, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <Brain size={40} />,
    title: "Machine Learning",
    description: "Modelos personalizados para otimizar seus processos",
    path: "/machine-learning"
  },
  {
    icon: <Bot size={40} />,
    title: "Automação",
    description: "Automatize tarefas repetitivas e aumente a produtividade",
    path: "/automation"
  },
  {
    icon: <BarChart size={40} />,
    title: "Análise de Dados",
    description: "Insights valiosos para decisões estratégicas",
    path: "/data-analysis"
  },
  {
    icon: <Code size={40} />,
    title: "Desenvolvimento",
    description: "Soluções sob medida para seu negócio",
    path: "/development"
  }
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-16">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="heading text-xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};