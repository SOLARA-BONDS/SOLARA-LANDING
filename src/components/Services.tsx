import { motion, useReducedMotion } from 'motion/react';
import {
  Robot,
  Code,
  Database,
  Rocket,
  Globe,
  ShieldCheck,
  CurrencyEth,
} from '@phosphor-icons/react';

const services = [
  {
    icon: Robot,
    title: 'Automatizaciones n8n',
    desc: 'Flujos de trabajo que eliminan lo repetitivo y conectan tus herramientas sin friccion.',
    accent: '#FC9E4F',
    size: 'col-span-2 md:col-span-1 row-span-1',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    desc: 'React, Next.js, Node. Desde MVP hasta producto en produccion.',
    accent: '#FF521B',
    size: 'col-span-2 md:col-span-1 row-span-1',
  },
  {
    icon: Database,
    title: 'Backend as a Service',
    desc: 'Supabase y Firebase. Infraestructura lista, tu te enfocas en el producto.',
    accent: '#EDD382',
    size: 'col-span-2 row-span-1',
    wide: true,
  },
  {
    icon: Rocket,
    title: 'SaaS Development',
    desc: 'Arquitectura, auth, billing, multitenancy. Construimos el SaaS que quieres lanzar.',
    accent: '#FC9E4F',
    size: 'col-span-2 md:col-span-1 row-span-1',
  },
  {
    icon: Globe,
    title: 'Sitios Web',
    desc: 'Landing pages y sitios corporativos disenados para convertir.',
    accent: '#FF521B',
    size: 'col-span-2 md:col-span-1 row-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Ciberseguridad',
    desc: 'Pentesting, auditoria de seguridad y hardening para que nada falle en produccion.',
    accent: '#EDD382',
    size: 'col-span-2 md:col-span-1 row-span-1',
  },
  {
    icon: CurrencyEth,
    title: 'Web3 & DeFi',
    desc: 'Smart contracts en Solidity, integraciones Ethereum y protocolos DeFi.',
    accent: '#FC9E4F',
    size: 'col-span-2 md:col-span-1 row-span-1',
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, color: '#F2F3AE', marginBottom: '1rem' }}
          >
            Lo que construimos
          </h2>
          <p className="text-base max-w-md" style={{ color: 'rgba(242,243,174,0.5)' }}>
            Siete areas de especialidad. Un mismo objetivo: que tu tecnologia funcione y escale.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`${s.size} group relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden cursor-default transition-all duration-300`}
                style={{
                  background: i % 3 === 2
                    ? `linear-gradient(135deg, rgba(2,1,34,0.9), rgba(${s.accent === '#EDD382' ? '237,211,130' : s.accent === '#FF521B' ? '255,82,27' : '252,158,79'},0.08))`
                    : 'rgba(242,243,174,0.03)',
                  border: '1px solid rgba(242,243,174,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${s.accent}33`;
                  (e.currentTarget as HTMLElement).style.background = `rgba(${s.accent === '#EDD382' ? '237,211,130' : s.accent === '#FF521B' ? '255,82,27' : '252,158,79'},0.06)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(242,243,174,0.08)';
                  (e.currentTarget as HTMLElement).style.background = i % 3 === 2
                    ? `linear-gradient(135deg, rgba(2,1,34,0.9), rgba(${s.accent === '#EDD382' ? '237,211,130' : s.accent === '#FF521B' ? '255,82,27' : '252,158,79'},0.08))`
                    : 'rgba(242,243,174,0.03)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}28` }}
                >
                  <Icon size={20} color={s.accent} weight="duotone" />
                </div>

                <div>
                  <h3
                    className="font-semibold text-base mb-2 leading-snug"
                    style={{ color: '#F2F3AE' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,243,174,0.5)' }}>
                    {s.desc}
                  </p>
                </div>

                {/* Accent dot */}
                <div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-60"
                  style={{ background: s.accent }}
                />
              </motion.div>
            );
          })}

          {/* Stats cell */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2 md:col-span-1 rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, rgba(255,82,27,0.12), rgba(252,158,79,0.06))',
              border: '1px solid rgba(255,82,27,0.2)',
            }}
          >
            <span className="text-xs font-mono" style={{ color: 'rgba(252,158,79,0.6)' }}>
              desde Costa Rica
            </span>
            <div>
              <div
                className="font-bold mb-1"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FC9E4F', lineHeight: 1 }}
              >
                3
              </div>
              <p className="text-sm" style={{ color: 'rgba(242,243,174,0.5)' }}>
                founders. Un equipo dedicado a tu proyecto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
