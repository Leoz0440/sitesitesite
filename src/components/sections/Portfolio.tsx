import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const projects = [
  {
    title: 'Cozinha Moderna',
    category: 'Cozinhas',
    image: '/images/cozinha2.jpg',
    large: true,
  },
  {
    title: 'Banheiro Luxury',
    category: 'Banheiros',
    image: '/images/banheiro3.jpeg',
  },
  {
    title: 'Sala Corporativa',
    category: 'Corporativo',
    image: '/images/salareuniao1.jpg',
  },
  {
    title: 'Closet Premium',
    category: 'Closets',
    image: '/images/closet1.jpg',
  },
  {
    title: 'Home Office',
    category: 'Escritório',
    image: '/images/home1.jpg',
  },
  {
    title: 'Living Contemporâneo',
    category: 'Salas',
    image: '/images/living1.jpeg',
  },
];

export default function Portfolio() {
  const titleAnim = useScrollAnimation(0);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...titleAnim} className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Portfólio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Projetos em Destaque
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
          <p className="text-gray-500 mt-6 max-w-lg mx-auto leading-relaxed">
            Cada projeto é uma obra única, concebida com atenção meticulosa aos detalhes e às necessidades de cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[260px] lg:auto-rows-[280px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                project.large ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-xs font-semibold tracking-widest uppercase text-gold/90 mb-1 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-white">{project.title}</h3>
                <div className="w-8 h-0.5 bg-gold mt-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#contato"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#contato');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hidden"
          >
            Ver Portfólio Completo →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
