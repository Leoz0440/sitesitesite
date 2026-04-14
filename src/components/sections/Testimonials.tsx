import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'A Livenni transformou nossa cozinha em um espaço dos sonhos. Qualidade impecável, desde o primeiro contato até a entrega final. Superou todas as nossas expectativas!',
    name: 'Maria Santos',
    role: 'Arquiteta',
    avatar: 'MS',
    color: 'from-amber-400 to-orange-500',
  },
  {
    text: 'Profissionalismo e atenção aos detalhes que raramente se encontra. Nosso escritório ficou elegante e funcional. O projeto 3D foi fundamental para alinhar as expectativas.',
    name: 'Carlos Oliveira',
    role: 'Empresário',
    avatar: 'CO',
    color: 'from-blue-400 to-teal-500',
  },
  {
    text: 'Desde o projeto 3D até a instalação, tudo foi perfeito. A equipe é atenciosa, respeitou o prazo e o resultado ficou exatamente como imaginei. Recomendo de olhos fechados!',
    name: 'Ana Rodrigues',
    role: 'Designer de Interiores',
    avatar: 'AR',
    color: 'from-pink-400 to-rose-500',
  },
  {
    text: 'Este é o terceiro projeto que faço com a Livenni. Qualidade consistente, prazo sempre cumprido e um acabamento que não encontro em nenhum outro lugar. Parceiros para sempre!',
    name: 'Roberto Lima',
    role: 'Advogado',
    avatar: 'RL',
    color: 'from-emerald-400 to-cyan-500',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir * 80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -80, opacity: 0 }),
  };

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-4 -left-4 text-gold/10 pointer-events-none">
            <Quote size={120} />
          </div>

          <div className="relative overflow-hidden min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-8">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center shrink-0 shadow-md`}>
                    <span className="text-white font-bold text-sm">{testimonials[current].avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary font-serif text-lg">{testimonials[current].name}</div>
                    <div className="text-gold text-sm font-medium">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gold/30 hover:border-gold hover:bg-gold/5 flex items-center justify-center text-gold transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2.5 bg-gold' : 'w-2.5 h-2.5 bg-gold/30 hover:bg-gold/60'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gold/30 hover:border-gold hover:bg-gold/5 flex items-center justify-center text-gold transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
