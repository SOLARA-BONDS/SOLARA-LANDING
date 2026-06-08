'use client';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, EnvelopeSimple } from '@phosphor-icons/react';
import { useState } from 'react';
import { Sun } from './Sun';

const C = {
  bg: '#020122',
  surface: '#08072a',
  border: '#1c1a45',
  text: '#F2F3AE',
  muted: '#8a8db0',
};

export function CTA() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contacto" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #1c1a45, transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 55% at 50% 110%, rgba(255,82,27,0.07) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-8">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[1.05]" style={{ color: C.text }}>
                Tu proyecto,<br />
                <span className="gradient-text-h">nuestro sistema.</span>
              </h2>
              <p className="text-lg leading-relaxed max-w-[40ch]" style={{ color: C.muted }}>
                Cuentanos que estas construyendo. Respondemos en menos de 24 horas con un plan concreto.
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="mailto:hola@solara.dev" className="flex items-center gap-3 group w-fit"
                style={{ color: C.muted }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = C.text)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = C.muted)}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                  style={{ backgroundColor: C.surface, borderColor: C.border }}>
                  <EnvelopeSimple size={17} />
                </div>
                <span className="text-sm font-mono">hola@solara.dev</span>
              </a>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex"
            >
              <Sun size={190} />
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border p-8"
            style={{ backgroundColor: C.surface, borderColor: C.border }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border"
                  style={{ backgroundColor: 'rgba(252,158,79,0.1)', borderColor: 'rgba(252,158,79,0.3)' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5.5 5.5L22 9" stroke="#FC9E4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2" style={{ color: C.text }}>Mensaje recibido</h3>
                  <p className="text-sm" style={{ color: C.muted }}>Te contactamos antes de 24 horas.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-5">
                {[
                  { id: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre', key: 'name' as const },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com', key: 'email' as const },
                ].map(({ id, label, type, placeholder, key }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="text-sm font-medium" style={{ color: C.text }}>{label}</label>
                    <input
                      id={id} type={type} required
                      value={form[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none"
                      style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, color: C.text }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(252,158,79,0.5)')}
                      onBlur={e => (e.target.style.borderColor = C.border)}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium" style={{ color: C.text }}>
                    Cuentanos tu proyecto
                  </label>
                  <textarea
                    id="message" required rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Que quieres construir? Automatizacion, app, sitio web..."
                    className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none resize-none"
                    style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, color: C.text }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(252,158,79,0.5)')}
                    onBlur={e => (e.target.style.borderColor = C.border)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] group"
                  style={{ background: 'linear-gradient(135deg, #FC9E4F 0%, #FF521B 100%)', color: '#020122' }}
                >
                  Enviar mensaje
                  <ArrowRight size={16} weight="bold" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
