import { Users, Target, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-16">
          Sobre Nós
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <Users size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="heading text-xl mb-2">Experiência</h3>
            <p>Anos de experiência em soluções de IA para empresas</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Target size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="heading text-xl mb-2">Foco no Cliente</h3>
            <p>Soluções personalizadas para cada necessidade</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Rocket size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="heading text-xl mb-2">Inovação</h3>
            <p>Sempre na vanguarda das tecnologias de IA</p>
          </div>
        </div>
      </div>
    </section>
  );
};