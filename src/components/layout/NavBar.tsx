import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const offset = -80;
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-md bg-white/90 shadow-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a
              href="#home"
              onClick={e => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-2 group"
            >
              <img
                src={scrolled ? '/images/logo-preto.png' : '/images/logo-branca.png'}
                alt="Livenni Logo"
                className="w-40 h-40 object-contain transition-all duration-500"
              />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold ${
                    scrolled ? 'text-primary/80' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={e => { e.preventDefault(); scrollToSection('#contato'); }}
                className="shimmer-btn bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-dark transition-colors duration-300 shadow-md"
              >
                Solicitar Orçamento
              </a>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img
                  src="/images/logo-preto.png"
                  alt="Livenni Logo"
                  className="w-16 h-16 object-contain"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-primary rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-6 flex-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    onClick={e => {
                      e.preventDefault();
                      setMenuOpen(false);
                      setTimeout(() => scrollToSection(link.href), 300);
                    }}
                    className="text-primary/80 hover:text-gold font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-all duration-200 text-lg"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-6 border-t border-gray-100">
                <a
                  href="#contato"
                  onClick={e => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setTimeout(() => scrollToSection('#contato'), 300);
                  }}
                  className="shimmer-btn block w-full text-center bg-gold text-white font-semibold py-3 px-6 rounded-xl hover:bg-gold-dark transition-colors duration-300"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
