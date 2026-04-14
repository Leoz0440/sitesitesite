import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WA_LINK = 'https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <span className="bg-primary text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Fale Conosco
        </span>
      )}
      <div className="relative">
        <span className="whatsapp-ring absolute inset-0 rounded-full pointer-events-none" />
        <div className="relative bg-whatsapp text-white rounded-full p-4 shadow-2xl hover:bg-green-500 transition-colors duration-300">
          <MessageCircle size={24} fill="white" />
        </div>
      </div>
    </a>
  );
}
