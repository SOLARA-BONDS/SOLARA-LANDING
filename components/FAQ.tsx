'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from '@phosphor-icons/react';

const faqs = [
  {
    q: 'Que tipo de proyectos desarrollan?',
    a: 'Trabajamos en automatizaciones n8n, apps web full stack, productos SaaS, integraciones Web3, sitios web y auditorias de ciberseguridad. Si lo imaginas, lo construimos.',
  },
  {
    q: 'Cuanto tarda un proyecto tipico?',
    a: 'Depende del alcance. Una landing page lista en 3-5 dias. Un MVP funcional entre 2-6 semanas. Proyectos mas complejos como smart contracts o plataformas SaaS pueden tomar 2-3 meses.',
  },
  {
    q: 'Trabajan con startups o empresas establecidas?',
    a: 'Con ambas. Tenemos experiencia ayudando a startups a lanzar su primer producto y a empresas a modernizar sus sistemas con automatizaciones y tecnologia Web3.',
  },
  {
    q: 'En que paises operan?',
    a: 'Somos de Costa Rica pero trabajamos de forma remota con clientes en toda Latinoamerica, Estados Unidos y Europa. Sin fronteras.',
  },
  {
    q: 'Como es el proceso para empezar?',
    a: 'Simple: nos mandas un mensaje describiendo tu proyecto, hacemos una llamada de 30 minutos sin costo, y te enviamos una propuesta concreta con tiempos y precio.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ height: 1, width: 24, background: '#FC9E4F', opacity: 0.55 }} />
            <span style={{ color: '#FC9E4F', fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em' }}>FAQ</span>
            <div style={{ height: 1, width: 24, background: '#FC9E4F', opacity: 0.55 }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter" style={{ color: '#F2F3AE' }}>
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: '14px',
                background: '#08072a',
                border: `1px solid ${open === i ? 'rgba(252,158,79,0.3)' : '#1c1a45'}`,
                overflow: 'hidden',
                transition: 'border-color 0.25s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  gap: '1rem',
                }}
              >
                <span style={{ color: '#F2F3AE', fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <div style={{
                  flexShrink: 0, width: 28, height: 28, borderRadius: '8px',
                  background: open === i ? 'rgba(252,158,79,0.15)' : 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}>
                  {open === i
                    ? <Minus size={14} style={{ color: '#FC9E4F' }} />
                    : <Plus size={14} style={{ color: '#8a8db0' }} />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 1.5rem 1.25rem', color: '#8a8db0', fontSize: '0.9rem', lineHeight: 1.75 }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
