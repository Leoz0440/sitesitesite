import { motion } from 'framer-motion';
import { MessageCircle, Gift, Clock, UserCheck } from 'lucide-react';

const WA_LINK = 'https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

const badges = [
  { icon: Gift, label: 'Orçamento Gratuito' },
  { icon: Clock, label: 'Resposta em 48h' },
  { icon: UserCheck, label: 'Consultoria Personalizada' },
];

export default function CTA() {
  return (
    <section
      id="contato"
      className="py-24 lg:py-36 bg-primary relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,169,110,0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(201,169,110,0.06) 0%, transparent 50%),
          radial-gradient(#c9a96e 1px, transparent 1px)`,
        backgroundSize: '100% 100%, 100% 100%, 32px 32px',
        backgroundPosition: '0 0, 0 0, 0 0',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6 block">
            Pronto para Transformar?
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu espaço em{' '}
            <span className="text-gold italic">algo extraordinário</span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Orçamento gratuito e consultoria personalizada. Nossa equipe está pronta para
            criar o ambiente dos seus sonhos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#contato"
              onClick={e => {
                e.preventDefault();
                const el = document.querySelector('#contato-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shimmer-btn bg-gold text-primary font-bold px-10 py-5 rounded-xl hover:bg-gold-light transition-all duration-300 shadow-2xl shadow-gold/30 text-base"
            >
              Solicitar Orçamento →
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-10 py-5 rounded-xl hover:bg-green-500 transition-all duration-300 shadow-2xl shadow-green-900/20 text-base"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.4 }}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <Icon size={16} className="text-gold" />
                  <span className="font-medium">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
