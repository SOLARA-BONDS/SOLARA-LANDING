'use client';
import { motion, useReducedMotion } from 'motion/react';
import type { Transition } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import { Sun } from './Sun';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce ? {} : {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay, ease } as Transition,
    };

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">

      {/* Half-sun emerging from top, half-clipped by nav */}
      <div style={{
        position: 'relative', width: '100%', display: 'flex',
        justifyContent: 'center', height: '340px', flexShrink: 0, zIndex: 10,
        overflow: 'hidden',
      }}>
        <motion.div
          {...(reduce ? {} : {
            initial: { opacity: 0, scale: 0.82, y: -20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
          })}
          style={{ position: 'absolute', top: '-230px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <Sun size={600} />
        </motion.div>

        {/* Fade-out toward content */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '240px', pointerEvents: 'none', zIndex: 20,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(2,1,34,0.5) 45%, rgba(2,1,34,0.9) 78%, #020122 100%)',
        }} />
      </div>

      {/* Content — left-aligned 2-col grid */}
      <div
        className="max-w-7xl mx-auto px-6 w-full pb-20 relative"
        style={{ marginTop: '-50px', zIndex: 20 }}
      >
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left col — text */}
          <div className="lg:col-span-3 flex flex-col items-start gap-8">

            <motion.div {...fadeUp(0.2)} className="flex items-center gap-3">
              <div style={{ height: 1, width: 24, background: '#FC9E4F', opacity: 0.55 }} />
              <span style={{ color: '#FC9E4F', fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em' }}>
                COSTA RICA &middot; GLOBAL
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.3)}
              style={{ fontSize: 'clamp(2.6rem, 7vw, 4.5rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.03em', maxWidth: '16ch' }}
            >
              <span style={{ color: '#F2F3AE' }}>Construimos<br />soluciones</span>
              <br />
              <span className="gradient-text-h">que escalan.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.4)}
              style={{ fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '44ch', color: '#8a8db0' }}
            >
              Automatizaciones, desarrollo full stack, Web3 y ciberseguridad.
              Tecnologia que trabaja mientras duermes.
            </motion.p>

            <motion.div {...fadeUp(0.5)} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#contacto"
                style={{ background: 'linear-gradient(135deg,#FC9E4F,#FF521B)', color: '#020122', fontWeight: 700, fontSize: '0.875rem', padding: '0.9rem 2rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'filter .2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = 'brightness(1)')}
              >
                Empezar proyecto <ArrowRight size={16} weight="bold" />
              </a>
              <a href="#servicios"
                style={{ border: '1px solid #1c1a45', color: '#F2F3AE', fontSize: '0.875rem', fontWeight: 500, padding: '0.9rem 2rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', transition: 'border-color .2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(252,158,79,.45)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = '#1c1a45')}
              >
                Ver servicios
              </a>
            </motion.div>

            {/* Founders row */}
            <motion.div {...fadeUp(0.6)} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ display: 'flex' }}>
                {[
                  { i: 'JA', c: '#FC9E4F' },
                  { i: 'FR', c: '#EDD382' },
                  { i: 'CS', c: '#FF521B' },
                ].map(({ i, c }, idx) => (
                  <div key={idx} style={{
                    marginLeft: idx > 0 ? '-10px' : 0,
                    width: 36, height: 36, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.68rem', fontWeight: 700,
                    background: `${c}18`, border: '2px solid #020122', color: c,
                  }}>{i}</div>
                ))}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#8a8db0' }}>3 founders, 1 vision, resultados reales</p>
            </motion.div>
          </div>

          {/* Right col — floating badges */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-end justify-end gap-4 pt-16">
            <motion.div
              {...(reduce ? {} : {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
              })}
              style={{
                background: 'rgba(8,7,42,0.7)',
                border: '1px solid #1c1a45',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                backdropFilter: 'blur(12px)',
                maxWidth: '240px',
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#FC9E4F', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>ESTADO ACTUAL</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399', boxShadow: '0 0 6px #34D399' }} />
                <span style={{ color: '#F2F3AE', fontWeight: 600, fontSize: '0.875rem' }}>Aceptando proyectos</span>
              </div>
              <p style={{ color: '#8a8db0', fontSize: '0.8rem', lineHeight: 1.5 }}>Disponibles para nuevos clientes en Q3 2025.</p>
            </motion.div>

            <motion.div
              {...(reduce ? {} : {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
              })}
              style={{
                background: 'rgba(252,158,79,0.06)',
                border: '1px solid rgba(252,158,79,0.2)',
                borderRadius: '12px',
                padding: '0.9rem 1.25rem',
                maxWidth: '200px',
              }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#EDD382' }}>10+</div>
              <div style={{ fontSize: '0.78rem', color: '#8a8db0', marginTop: '2px' }}>proyectos entregados</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
