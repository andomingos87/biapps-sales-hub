import { Card } from "./ui/card";

export const Technologies = () => {
  const techs = [
    "Bubble", "Flutterflow", "Wappler", "Webflow", "Framer", "Figma",
    "Supabase", "Xano", "N8N", "OpenAI", "Python", "React", "Vue",
    "Angular", "Javascript", "Typescript", "AWS", "Google Cloud",
    "Docker", "PostgreSQL", "Redis", "APIs"
  ];

  return (
    <section id="technologies" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-16">
          Tecnologias
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Image */}
          <div className="flex items-center justify-center">
            <Card className="w-full h-full overflow-hidden glass-card">
              <img
                src="photo-1488590528505-98d2b5aba04b"
                alt="Technology Illustration"
                className="w-full h-full object-cover aspect-square"
              />
            </Card>
          </div>
          
          {/* Right side - Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="glass-card p-3 text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                <span className="text-sm font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};