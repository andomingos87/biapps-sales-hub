import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre os serviços da BiApps.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 btn btn-primary btn-circle btn-lg animate-float shadow-lg"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};