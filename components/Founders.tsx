'use client';
import { motion, useReducedMotion } from 'motion/react';

const C = {
  bg: '#020122',
  surface: '#08072a',
  border: '#1c1a45',
  text: '#F2F3AE',
  muted: '#8a8db0',
};

const founders = [
  {
    name: 'Josue Azofeifa',
    role: 'Full Stack & Web3',
    initials: 'JA',
    accent: '#FC9E4F',
    accentB: '#FF521B',
    links: { github: 'https://dev-profile-self.vercel.app/', linkedin: '#', x: '#' },
  },
  {
    name: 'Fabiana Rojas',
    role: 'BaaS & Producto',
    initials: 'FR',
    accent: '#EDD382',
    accentB: '#FC9E4F',
    links: { github: '#', linkedin: '#', x: '#' },
  },
  {
    name: 'Carlos Sanchez',
    role: 'Ciberseguridad & DevOps',
    initials: 'CS',
    accent: '#FF521B',
    accentB: '#FC9E4F',
    links: { github: '#', linkedin: '#', x: '#' },
  },
];

export function Founders() {
  const reduce = useReducedMotion();

  return (
    <section id="founders" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,#1c1a45,transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4" style={{ color: C.text }}>
            El equipo
          </h2>
          <p className="text-lg max-w-[38ch] mx-auto" style={{ color: C.muted }}>
            Tres personas, un proposito. Construimos lo que prometemos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduce ? {} : { y: -6, transition: { duration: 0.22 } }}
              className="rounded-2xl overflow-hidden border flex flex-col"
              style={{ backgroundColor: C.surface, borderColor: C.border }}
            >
              <div className="relative h-64 overflow-hidden flex items-end justify-center">
                <div className="absolute inset-0" style={{
                  background: `radial-gradient(ellipse 80% 90% at 50% 110%, ${f.accentB}30 0%, ${f.accent}18 40%, transparent 70%), linear-gradient(180deg, #030218 0%, #0a0828 100%)`,
                }} />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                    <path d="M 66 20 C 74 20 80 28 80 37 C 80 50 65 55 50 57 C 35 59 20 65 20 78 C 20 88 30 92 42 90"
                      stroke={f.accent} strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="absolute rounded-full" style={{
                  width: '140px', height: '140px', bottom: '20px',
                  background: `radial-gradient(circle, ${f.accent}22 0%, transparent 70%)`,
                  filter: 'blur(12px)',
                }} />
                <div className="relative z-10 mb-6 flex flex-col items-center gap-2">
                  <div className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-black"
                    style={{
                      background: `linear-gradient(135deg, ${f.accent}30 0%, ${f.accentB}15 100%)`,
                      border: `2px solid ${f.accent}40`,
                      color: f.accent,
                      boxShadow: `0 0 40px ${f.accent}25, inset 0 1px 0 ${f.accent}20`,
                    }}>
                    {f.initials}
                  </div>
                </div>
              </div>

              <div className="px-6 pt-5 pb-5 flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg" style={{ color: C.text }}>{f.name}</h3>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill={f.accent} fillOpacity="0.2" />
                      <circle cx="10" cy="10" r="9" stroke={f.accent} strokeWidth="1.5" strokeOpacity="0.6" />
                      <path d="M6.5 10.5L9 13L13.5 8" stroke={f.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-mono" style={{ color: f.accent }}>{f.role}</p>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a href={f.links.x} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200"
                    style={{ borderColor: C.border, backgroundColor: `${C.bg}80` }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill={C.muted}>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href={f.links.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200"
                    style={{ borderColor: C.border, backgroundColor: `${C.bg}80` }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill={C.muted}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href={f.links.github} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200"
                    style={{ borderColor: C.border, backgroundColor: `${C.bg}80` }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
