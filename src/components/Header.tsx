import { useState, useEffect } from "react";
import { Calendar, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card py-2" : "py-4"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-heading font-bold">BiApps</a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#technologies" className="hover:text-primary transition-colors">Tecnologias</a>
          <a href="#clients" className="hover:text-primary transition-colors">Clientes</a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn btn-primary gap-2">
            Agendar Call <Calendar size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};