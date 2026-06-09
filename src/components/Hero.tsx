import { motion, useReducedMotion } from 'motion/react';
import Aurora from './Aurora';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={['#FC9E4F', '#FF521B', '#020122']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      {/* Dark base gradient to keep text readable */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,82,27,0.08) 0%, transparent 70%), linear-gradient(to bottom, rgba(2,1,34,0.3) 0%, rgba(2,1,34,0.15) 40%, rgba(2,1,34,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Location badge */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-medium"
              style={{
                border: '1px solid rgba(252,158,79,0.3)',
                color: '#FC9E4F',
                background: 'rgba(252,158,79,0.08)',
              }}
            >
              Costa Rica · Global
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              color: '#F2F3AE',
            }}
          >
            Construimos<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #FC9E4F 0%, #FF521B 60%, #EDD382 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              soluciones
            </span>{' '}
            que escalan.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg leading-relaxed mb-10 max-w-[520px]"
            style={{ color: 'rgba(242,243,174,0.65)' }}
          >
            Startup costarricense de tecnologia. Automatizaciones, desarrollo full stack, SaaS, ciberseguridad y Web3.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #FC9E4F, #FF521B)',
                color: '#020122',
                boxShadow: '0 0 32px rgba(255,82,27,0.35)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 48px rgba(255,82,27,0.55)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(255,82,27,0.35)'; }}
            >
              Iniciar proyecto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95"
              style={{
                border: '1px solid rgba(242,243,174,0.2)',
                color: '#F2F3AE',
                background: 'rgba(242,243,174,0.04)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(252,158,79,0.4)'; (e.currentTarget as HTMLElement).style.color = '#FC9E4F'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(242,243,174,0.2)'; (e.currentTarget as HTMLElement).style.color = '#F2F3AE'; }}
            >
              Ver servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent, #020122)' }}
      />
    </section>
  );
}
