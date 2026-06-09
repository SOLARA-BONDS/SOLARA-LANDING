'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  House,
  Wrench,
  Planet,
  FolderOpen,
  Users,
  Envelope,
  List,
  X,
} from '@phosphor-icons/react';
import { SolaraLogoMark } from './SolaraLogo';
import { TubelightNavBar } from './ui/tubelight-navbar';

const navItems = [
  { name: 'Inicio',    url: '#inicio',    icon: House },
  { name: 'Servicios', url: '#servicios', icon: Wrench },
  { name: 'Stack',     url: '#stack',     icon: Planet },
  { name: 'Proyectos', url: '#proyectos', icon: FolderOpen },
  { name: 'Founders',  url: '#founders',  icon: Users },
  { name: 'Contacto',  url: '#contacto',  icon: Envelope },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <>
      {/* Logo — fixed top-left */}
      <div
        className="fixed top-0 left-0 z-[60] flex items-center"
        style={{ padding: '0 1.5rem', height: '4rem' }}
      >
        <a href="#" className="flex items-center gap-3">
          <SolaraLogoMark size={34} />
          <span
            className="font-bold text-lg tracking-tight hidden sm:inline"
            style={{ color: '#F2F3AE' }}
          >
            Solara
          </span>
        </a>
      </div>

      {/* CTA — fixed top-right, desktop only */}
      <div
        className="fixed top-0 right-0 z-[60] hidden md:flex items-center"
        style={{ padding: '0 1.5rem', height: '4rem' }}
      >
        <a
          href="#contacto"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
          style={{
            background: 'linear-gradient(135deg, #FC9E4F 0%, #FF521B 100%)',
            color: '#020122',
          }}
        >
          Empezar proyecto
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="fixed top-0 right-0 z-[60] flex md:hidden items-center justify-center"
        style={{ width: '4rem', height: '4rem', color: '#8a8db0' }}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X size={22} /> : <List size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 left-0 right-0 z-50 md:hidden border-b px-6 py-6 flex flex-col gap-5"
          style={{ backgroundColor: '#08072a', borderColor: '#1c1a45' }}
        >
          {navItems.map((item) => (
            <a
              key={item.url}
              href={item.url}
              onClick={() => setOpen(false)}
              className="font-medium"
              style={{ color: '#F2F3AE' }}
            >
              {item.name}
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

      {/* Tubelight floating pill — desktop only */}
      <div className="hidden md:block">
        <TubelightNavBar items={navItems} />
      </div>
    </>
  );
}
