import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import StatsBar from './StatsBar';

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section id="home" ref={heroRef} className="relative h-screen min-h-[600px] flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/cozinha.jpg"
          alt="Cozinha de luxo Livenni Movelaria"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-gold/60 bg-black/30 backdrop-blur-sm text-gold-light text-sm font-medium"
        >
          <Sparkles size={14} className="text-gold" />
          Móveis que duram gerações
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-4 max-w-4xl"
        >
          Móveis{' '}
          <span className="block text-gold italic">Planejados</span>
          <span className="block"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Transformamos seus espaços em ambientes únicos com móveis personalizados.
          Qualidade premium, design exclusivo e atenção aos detalhes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#servicos"
            onClick={e => { e.preventDefault(); scrollToSection('#servicos'); }}
            className="shimmer-btn bg-gold text-white font-semibold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-300 shadow-xl shadow-gold/25 text-base"
          >
            Conhecer Serviços →
          </a>
          <a
            href="#portfolio"
            onClick={e => { e.preventDefault(); scrollToSection('#portfolio'); }}
            className="border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 text-base backdrop-blur-sm"
          >
            Ver Portfólio
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#servicos"
        onClick={e => { e.preventDefault(); scrollToSection('#servicos'); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 flex justify-center pb-8 cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>

      <div className="relative z-20 px-6 py-8 -mb-16">
        <StatsBar />
      </div>
    </section>
  );
}
