import { motion, useReducedMotion } from 'motion/react';
import Aurora from './Aurora';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={['#FC9E4F', '#FF521B', '#020122']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,82,27,0.08) 0%, transparent 70%), linear-gradient(to bottom, rgba(2,1,34,0.25) 0%, rgba(2,1,34,0.1) 40%, rgba(2,1,34,0.75) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto gap-10">
        {/* Headline */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3.2rem, 8.5vw, 7rem)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: '#F2F3AE',
          }}
        >
          Construimos{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #FC9E4F 0%, #FF521B 60%, #EDD382 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            soluciones
          </span>
          <br />
          que escalan.
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              background: 'linear-gradient(135deg, #FC9E4F, #FF521B)',
              color: '#020122',
              boxShadow: '0 0 32px rgba(255,82,27,0.35)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 52px rgba(255,82,27,0.55)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(255,82,27,0.35)'; }}
          >
            Iniciar proyecto
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              border: '1px solid rgba(242,243,174,0.22)',
              color: '#F2F3AE',
              background: 'rgba(242,243,174,0.05)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(252,158,79,0.45)';
              (e.currentTarget as HTMLElement).style.color = '#FC9E4F';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(242,243,174,0.22)';
              (e.currentTarget as HTMLElement).style.color = '#F2F3AE';
            }}
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent, #020122)' }}
      />
    </section>
  );
}
