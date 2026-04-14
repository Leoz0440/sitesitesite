import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WA_LINK = 'https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const titleAnim = useScrollAnimation(0);

  return (
    <section id="contato-form" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...titleAnim} className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Solicite seu Orçamento
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
              Vamos conversar sobre seu projeto
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              Preencha o formulário ou entre em contato diretamente. Nossa equipe responde em até 48 horas.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: Phone, label: 'Telefone', value: '(44) 98823-5683', href: 'tel:+5544988235683' },
                { icon: Mail, label: 'Email', value: 'contato@livenni.com.br', href: 'mailto:contato@livenni.com.br' },
                { icon: MapPin, label: 'Endereço', value: 'Rua Pioneiro José Antônio Píres, 270 — Maringá, PR', href: '#' },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</div>
                      <div className="text-primary font-medium text-sm group-hover:text-gold transition-colors">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-whatsapp text-white font-semibold px-6 py-4 rounded-xl hover:bg-green-500 transition-all duration-300 w-fit shadow-lg"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-amber-50/50 border border-gold/20 rounded-2xl p-12"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Send size={28} className="text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Mensagem enviada!</h3>
                <p className="text-gray-500">Retornaremos em até 48 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name', label: 'Nome completo', type: 'text', placeholder: 'Seu nome' },
                  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                  { name: 'phone', label: 'Telefone', type: 'tel', placeholder: '(11) 99999-9999' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-primary mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                      required={field.name !== 'phone'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 text-primary placeholder-gray-400 bg-white text-sm"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Conte sobre seu projeto..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 text-primary placeholder-gray-400 bg-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="shimmer-btn w-full bg-gold text-primary font-bold py-4 rounded-xl hover:bg-gold-dark hover:text-white transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
