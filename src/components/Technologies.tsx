export const Technologies = () => {
  const techs = [
    "Python", "TensorFlow", "PyTorch", "OpenAI", "AWS", "Google Cloud",
    "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis"
  ];

  return (
    <section id="technologies" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-16">
          Tecnologias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((tech, index) => (
            <div key={index} className="glass-card p-4 text-center hover:scale-105 transition-transform">
              <span className="text-lg font-semibold">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};