'use client';
import { motion, useReducedMotion } from 'motion/react';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { SolaraLogoMark } from './SolaraLogo';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Founders', href: '#founders' },
  { label: 'Contacto', href: '#contacto' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <SolaraLogoMark size={34} />
          <span className="font-bold text-lg tracking-tight" style={{ color: '#F2F3AE' }}>
            Solara
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200"
              style={{ color: '#8a8db0' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = '#F2F3AE')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = '#8a8db0')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="#contacto"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
            style={{ background: 'linear-gradient(135deg, #FC9E4F 0%, #FF521B 100%)', color: '#020122' }}
          >
            Empezar proyecto
          </a>
        </div>

        <button
          className="md:hidden p-1 transition-colors"
          style={{ color: '#8a8db0' }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b px-6 py-6 flex flex-col gap-5"
          style={{ backgroundColor: '#08072a', borderColor: '#1c1a45' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-medium"
              style={{ color: '#F2F3AE' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-center"
            style={{ background: 'linear-gradient(135deg, #FC9E4F, #FF521B)', color: '#020122' }}
          >
            Empezar proyecto
          </a>
        </motion.div>
      )}

      <div
        className="absolute inset-0 -z-10 backdrop-blur-md border-b"
        style={{ backgroundColor: 'rgba(2,1,34,0.85)', borderColor: 'rgba(28,26,69,0.6)' }}
      />
    </header>
  );
}
