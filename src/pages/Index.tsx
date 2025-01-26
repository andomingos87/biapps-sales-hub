import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Clients } from "@/components/Clients";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Clients />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;