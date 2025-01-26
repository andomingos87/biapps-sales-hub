import { Calendar } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/20 to-base-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading text-4xl md:text-5xl mb-6">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-xl mb-8">
          Agende uma consulta gratuita e descubra como a IA pode revolucionar sua empresa
        </p>
        <button className="btn btn-primary btn-lg gap-2">
          Agendar Consultoria <Calendar size={20} />
        </button>
      </div>
    </section>
  );
};