import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-primary/10 to-base-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="heading text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-base-content bg-clip-text text-transparent">
          Transforme seu Negócio com IA
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Soluções personalizadas de Inteligência Artificial para impulsionar sua empresa ao próximo nível
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary btn-lg gap-2">
            Agende uma Consulta <ArrowRight size={20} />
          </button>
          <button className="btn btn-outline btn-lg">Conheça Nossos Cases</button>
        </div>
      </div>
    </div>
  );
};