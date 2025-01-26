export const Clients = () => {
  return (
    <section id="clients" className="section-padding bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-16">
          Nossos Clientes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="glass-card p-8 flex items-center justify-center">
              <div className="w-32 h-16 bg-base-300 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};