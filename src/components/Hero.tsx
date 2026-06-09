import { motion, useReducedMotion } from 'motion/react';
import Aurora from './Aurora';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={['#FC9E4F', '#FF521B', '#020122']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      {/* Overlay gradients */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,82,27,0.08) 0%, transparent 70%), linear-gradient(to bottom, rgba(2,1,34,0.25) 0%, rgba(2,1,34,0.1) 40%, rgba(2,1,34,0.75) 100%)',
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-[1.05] tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
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
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent, #020122)' }}
      />
    </section>
  );
}
