import { motion } from 'framer-motion';
import { Building2, Store, Home } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    icon: Building2,
    title: 'Móveis Corporativos',
    description: 'Ambientes profissionais que unem sofisticação e produtividade, projetados para valorizar a identidade da sua empresa.',
    detail: 'Projetos sob medida',
  },
  {
    icon: Store,
    title: 'Móveis Comerciais',
    description: 'Soluções funcionais e atrativas para lojas, restaurantes e espaços comerciais que encantam seus clientes.',
    detail: 'Design estratégico',
  },
  {
    icon: Home,
    title: 'Móveis Residenciais',
    description: 'Peças exclusivas que transformam cada cômodo da sua casa em um espaço de conforto e personalidade.',
    detail: 'Projeto 3D incluso',
    horizontalLayout: true,
  },
];

export default function Services() {
  const titleAnim = useScrollAnimation(0);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...titleAnim} className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Soluções completas em
            <br className="hidden md:block" /> móveis planejados
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-gold/30 transition-all duration-300 cursor-default ${
                  service.horizontalLayout ? 'md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto md:w-full' : ''
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon size={26} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-block text-xs font-semibold tracking-wider uppercase text-gold border border-gold/30 px-3 py-1 rounded-full bg-amber-50/50">
                      {service.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#contato"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#contato');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="shimmer-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hidden"
          >
            Ver Todos os Serviços →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
