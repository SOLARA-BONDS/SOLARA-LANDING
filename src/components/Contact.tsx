import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Proyecto - ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:fabianarojassanchez1504@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="py-28 px-6 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(242,243,174,0.06)' }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,82,27,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.05, color: '#F2F3AE', marginBottom: '1.5rem' }}
            >
              Hablemos de<br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #FC9E4F, #FF521B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                tu proyecto.
              </span>
            </h2>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: 'rgba(242,243,174,0.55)' }}>
              Contanos que quieres construir. Respondemos en menos de 24 horas.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div
                className="p-8 rounded-2xl text-center"
                style={{ background: 'rgba(252,158,79,0.08)', border: '1px solid rgba(252,158,79,0.2)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(252,158,79,0.15)' }}
                >
                  <PaperPlaneTilt size={24} color="#FC9E4F" weight="duotone" />
                </div>
                <p className="font-semibold text-base mb-2" style={{ color: '#F2F3AE' }}>
                  Mensaje enviado
                </p>
                <p className="text-sm" style={{ color: 'rgba(242,243,174,0.5)' }}>
                  Te contactamos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" style={{ color: 'rgba(242,243,174,0.65)' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(242,243,174,0.04)',
                      border: '1px solid rgba(242,243,174,0.12)',
                      color: '#F2F3AE',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(252,158,79,0.4)'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(242,243,174,0.12)'; }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" style={{ color: 'rgba(242,243,174,0.65)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(242,243,174,0.04)',
                      border: '1px solid rgba(242,243,174,0.12)',
                      color: '#F2F3AE',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(252,158,79,0.4)'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(242,243,174,0.12)'; }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" style={{ color: 'rgba(242,243,174,0.65)' }}>
                    Proyecto
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Contanos que quieres construir..."
                    rows={4}
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(242,243,174,0.04)',
                      border: '1px solid rgba(242,243,174,0.12)',
                      color: '#F2F3AE',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(252,158,79,0.4)'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(242,243,174,0.12)'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #FC9E4F, #FF521B)',
                    color: '#020122',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  <PaperPlaneTilt size={16} weight="bold" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
