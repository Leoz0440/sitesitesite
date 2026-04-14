import { motion } from 'framer-motion';
import { MessageSquare, Layers, Hammer, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultoria',
    description: 'Entendemos suas necessidades, estilo de vida e preferências para criar o projeto ideal.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Projeto 3D',
    description: 'Design personalizado em 3D para sua aprovação antes de qualquer produção.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Fabricação',
    description: 'Produção artesanal premium com madeiras selecionadas e acabamentos de alto padrão.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Entrega',
    description: 'Instalação profissional com equipe especializada e zelar pelo seu ambiente.',
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Nosso Processo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Como Trabalhamos
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-lg mx-auto leading-relaxed">
            Um processo transparente e colaborativo do conceito à entrega final.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gold/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full border-2 border-gold/30 bg-white/5 flex items-center justify-center relative">
                      <Icon size={36} className="text-gold" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <span className="font-serif text-5xl font-bold text-gold/15 absolute top-0 leading-none select-none">
                    {step.number}
                  </span>

                  <h3 className="font-serif text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">{step.description}</p>

                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-8 w-px h-10 bg-gold/30 mx-auto" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contato"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#contato');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="shimmer-btn inline-flex items-center gap-2 bg-gold text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20"
          >
            Iniciar Meu Projeto →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
