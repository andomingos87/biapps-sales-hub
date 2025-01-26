import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding relative">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/cc62fcbe-e999-4e33-9289-2b7924d426b7.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base-100/60 to-base-100/50 backdrop-blur-[1px]" />
        {/* Noise overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
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