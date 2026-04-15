import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useScrollAnimationX } from '../../hooks/useScrollAnimation';

const differentials = [
  '30+ anos de experiência moveleira',
  'Projeto 3D antes da execução',
  'Garantia de 5 anos',
  'Entrega e instalação inclusa',
  'Atendimento personalizado do início ao fim',
];

export default function About() {
  const leftAnim = useScrollAnimationX('left', 0);
  const rightAnim = useScrollAnimationX('right', 0.15);

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...leftAnim} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565793298710-cf528f02e14c?w=800&q=80"
                alt="Marceneiro artesanal Livenni Movelaria"
                loading="lazy"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-2xl border border-gold/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/5 rounded-2xl border border-gold/10 -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-gold/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <span className="font-serif font-bold text-gold text-xl">30</span>
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">Anos de</div>
                  <div className="text-gold font-semibold text-sm">Excelência Moveleira</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...rightAnim} className="flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Por que escolher a Livenni?
            </h2>
            <div className="w-20 h-0.5 bg-gold mb-8" />
            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              Há mais de 30 anos, a Livenni Movelaria transforma ambientes com a arte da marcenaria planejada.
              Nossa filosofia une tradição, inovação e materiais de primeira qualidade para criar móveis
              que são verdadeiras obras de arte funcionais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {differentials.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="shrink-0 w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-gold" />
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contato"
              onClick={e => {
                e.preventDefault();
                const el = document.querySelector('#contato');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="shimmer-btn mt-10 inline-flex items-center gap-2 bg-gold text-white font-semibold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/20 w-fit hidden"
            >
              Conheça Nossa História →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
