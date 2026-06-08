'use client';
import { motion, useReducedMotion } from 'motion/react';
import {
  Robot,
  Code,
  Database,
  CloudArrowUp,
  Globe,
  ShieldCheck,
  CurrencyEth,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const C = {
  bg: '#020122',
  surface: '#08072a',
  border: '#1c1a45',
  text: '#F2F3AE',
  muted: '#8a8db0',
};

type Service = {
  icon: Icon;
  title: string;
  desc: string;
  tag: string;
  accent: string;
  featured?: boolean;
  wide?: boolean;
};

const services: Service[] = [
  {
    icon: Robot,
    title: 'Automatizaciones n8n',
    desc: 'Workflows inteligentes que conectan tus herramientas y eliminan el trabajo repetitivo. CRMs, pipelines y notificaciones en autopiloto.',
    tag: 'No-code / Low-code',
    accent: '#FC9E4F',
    featured: true,
  },
  {
    icon: Code,
    title: 'Full Stack Dev',
    desc: 'Apps web modernas con React, Next.js, Node y bases de datos escalables. Del prototipo al producto.',
    tag: 'React · Node · Postgres',
    accent: '#EDD382',
  },
  {
    icon: Database,
    title: 'Backend as a Service',
    desc: 'APIs, auth y storage robustos sin la complejidad. Listos para produccion desde el dia uno.',
    tag: 'Supabase · Firebase',
    accent: '#F2F3AE',
  },
  {
    icon: CloudArrowUp,
    title: 'SaaS Development',
    desc: 'Construimos tu producto SaaS desde la arquitectura hasta el primer cliente pagante.',
    tag: 'MVP · Scale',
    accent: '#FC9E4F',
    wide: true,
  },
  {
    icon: Globe,
    title: 'Sitios Web',
    desc: 'Landing pages y sitios corporativos con diseno premium y SEO desde el dia uno.',
    tag: 'Design · SEO',
    accent: '#EDD382',
  },
  {
    icon: ShieldCheck,
    title: 'Ciberseguridad',
    desc: 'Auditorias, pentesting y hardening. Protege tu producto antes de que alguien mas lo haga.',
    tag: 'Audit · Pentest',
    accent: '#FF521B',
    featured: true,
  },
  {
    icon: CurrencyEth,
    title: 'Web3 & DeFi',
    desc: 'Smart contracts, integraciones blockchain y DApps. El futuro descentralizado, hoy.',
    tag: 'Ethereum · Solana',
    accent: '#FC9E4F',
    wide: true,
  },
];

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className="py-28 px-6" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4" style={{ color: C.text }}>
            Lo que construimos
          </h2>
          <p className="text-lg max-w-[42ch]" style={{ color: C.muted }}>
            Cada servicio, disenado para resolver un problema real con tecnologia de primer nivel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard service={services[0]} index={0} className="lg:col-span-2" />
          <ServiceCard service={services[1]} index={1} />
          <ServiceCard service={services[2]} index={2} />
          <ServiceCard service={services[3]} index={3} className="lg:col-span-2" />
          <ServiceCard service={services[4]} index={4} />
          <ServiceCard service={services[5]} index={5} />
          <ServiceCard service={services[6]} index={6} className="md:col-span-2 lg:col-span-1" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, className = '' }: { service: Service; index: number; className?: string }) {
  const reduce = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? {} : { y: -4, transition: { duration: 0.22 } }}
      className={`group relative rounded-2xl border p-7 flex flex-col gap-5 overflow-hidden cursor-default ${className}`}
      style={{ backgroundColor: C.surface, borderColor: C.border }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse 55% 55% at 15% 15%, ${service.accent}14, transparent 70%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}80, transparent)` }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${service.accent}15`, border: `1px solid ${service.accent}28` }}
      >
        <Icon size={22} weight="duotone" color={service.accent} />
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        <h3 className="font-semibold text-lg leading-snug" style={{ color: C.text }}>{service.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{service.desc}</p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span
          className="text-xs font-mono px-2.5 py-1 rounded-full"
          style={{ color: service.accent, backgroundColor: `${service.accent}12`, border: `1px solid ${service.accent}22` }}
        >
          {service.tag}
        </span>
        <div
          className="w-6 h-6 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ borderColor: `${service.accent}45` }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 8L8 2M8 2H4M8 2V6" stroke={service.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
