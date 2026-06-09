import { motion, useReducedMotion } from 'motion/react';

const founders = [
  {
    initials: 'JA',
    name: 'Josue Azofeifa',
    role: 'Co-founder',
    color: '#FC9E4F',
    focus: 'Full Stack & Web3',
  },
  {
    initials: 'FR',
    name: 'Fabiana Rojas',
    role: 'Co-founder',
    color: '#EDD382',
    focus: 'Automatizaciones & BaaS',
  },
  {
    initials: 'CS',
    name: 'Carlos Sanchez',
    role: 'Co-founder',
    color: '#FF521B',
    focus: 'Ciberseguridad & SaaS',
  },
];

export default function Founders() {
  const reduce = useReducedMotion();

  return (
    <section id="nosotros" className="py-28 px-6" style={{ borderTop: '1px solid rgba(242,243,174,0.06)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-bold tracking-tight leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#F2F3AE' }}
            >
              Un equipo pequeno.<br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #FC9E4F, #FF521B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Resultados reales.
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(242,243,174,0.55)' }}>
              Somos tres founders costarricenses que combinan desarrollo, seguridad y automatizacion para construir tecnologia que dura.
            </p>
            <p className="text-base leading-relaxed max-w-md" style={{ color: 'rgba(242,243,174,0.55)' }}>
              Trabajamos directamente contigo. Sin intermediarios, sin agencias. El equipo que cotiza tu proyecto es el que lo construye.
            </p>
          </motion.div>

          {/* Right: founder cards */}
          <div className="flex flex-col gap-4">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-200"
                style={{
                  background: 'rgba(242,243,174,0.03)',
                  border: '1px solid rgba(242,243,174,0.07)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${f.color}28`;
                  (e.currentTarget as HTMLElement).style.background = `${f.color}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(242,243,174,0.07)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(242,243,174,0.03)';
                }}
              >
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}40`, color: f.color }}
                >
                  {f.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-[15px]" style={{ color: '#F2F3AE' }}>
                      {f.name}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-mono"
                      style={{ background: `${f.color}14`, color: f.color }}
                    >
                      {f.role}
                    </span>
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(242,243,174,0.45)' }}>
                    {f.focus}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
