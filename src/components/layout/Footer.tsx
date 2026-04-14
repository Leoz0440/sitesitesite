import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const navLinks = ['Home', 'Portfólio', 'Serviços', 'Sobre'];
const services = ['Móveis Planejados', 'Cozinhas Completas', 'Corporativos'];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const navTargets: Record<string, string> = {
  'Home': 'home',
  'Portfólio': 'portfolio',
  'Serviços': 'servicos',
  'Sobre': 'sobre',
};

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="font-serif font-bold text-primary text-xl">L</span>
              </div>
              <span className="font-serif font-semibold text-xl text-white">Livenni</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-[220px]">
              Móveis planejados. Mais de 30 anos transformando espaços em sonhos.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/livenni.movelaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-gold/10 rounded-lg flex items-center justify-center text-gray-500 hover:text-gold transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                
              >
                
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link}>
                  <a
                    href={`#${navTargets[link]}`}
                    onClick={e => { e.preventDefault(); scrollToSection(navTargets[link]); }}
                    className="text-sm text-gray-500 hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Serviços</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <a
                    href="#servicos"
                    onClick={e => { e.preventDefault(); scrollToSection('servicos'); }}
                    className="text-sm text-gray-500 hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5511987654321"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-gold transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Phone size={14} className="text-gold" />
                  </div>
                  (44) 98823-5683
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@livenni.com.br"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-gold transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Mail size={14} className="text-gold" />
                  </div>
                  contato@livenni.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-gold" />
                </div>
                <span>Rua Pioneiro José Antônio Píres, 270<br />Maringá, PR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gold/15 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © 2026 Livenni Movelaria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-700">
            Móveis Planejados · Maringpa, PR
          </p>
        </div>
      </div>
    </footer>
  );
}
