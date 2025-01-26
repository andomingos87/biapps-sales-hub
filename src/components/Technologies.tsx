import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
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
        <div className="text-center mb-16">
          <h2 className="heading text-4xl md:text-5xl mb-4">
            Tecnologias
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Utilizamos as melhores e mais modernas tecnologias para desenvolver soluções inovadoras e eficientes
          </p>
        </div>

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {techs.map((tech, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center min-h-[120px]">
                      <span className="text-base font-semibold">{tech}</span>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};