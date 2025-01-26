import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Card } from "./ui/card";
import 'swiper/css';

export const Technologies = () => {
  const techs = [
    "Bubble", "Flutterflow", "Wappler", "Webflow", "Framer", "Figma",
    "Supabase", "Xano", "N8N", "OpenAI", "Python", "React", "Vue",
    "Angular", "Javascript", "Typescript", "AWS", "Google Cloud",
    "Docker", "PostgreSQL", "Redis", "APIs"
  ];

  return (
    <section id="technologies" className="w-full">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="heading text-4xl md:text-5xl mb-4">
            Tecnologias
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Utilizamos as melhores e mais modernas tecnologias para desenvolver soluções inovadoras e eficientes
          </p>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={2}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 16,
              },
            }}
            className="w-full"
          >
            {techs.map((tech, index) => (
              <SwiperSlide key={index}>
                <Card className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center min-h-[80px]">
                  <span className="text-sm font-semibold">{tech}</span>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};