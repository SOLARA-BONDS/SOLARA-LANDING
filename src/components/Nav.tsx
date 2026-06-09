import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Logo from './Logo';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(2,1,34,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(252,158,79,0.12)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Logo size={34} />
          <span className="font-semibold text-[15px] tracking-wide" style={{ color: '#F2F3AE' }}>
            Solara
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(242,243,174,0.65)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#FC9E4F')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(242,243,174,0.65)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #FC9E4F, #FF521B)',
            color: '#020122',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
        >
          Trabajemos juntos
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: '#FC9E4F',
              transform: open ? 'translateY(6.5px) rotate(45deg)' : '',
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: '#FC9E4F',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: '#FC9E4F',
              transform: open ? 'translateY(-6.5px) rotate(-45deg)' : '',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden overflow-hidden"
        style={{ background: 'rgba(2,1,34,0.97)', borderTop: '1px solid rgba(252,158,79,0.1)' }}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="block text-sm font-medium py-1"
                style={{ color: 'rgba(242,243,174,0.8)' }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #FC9E4F, #FF521B)', color: '#020122' }}
              onClick={() => setOpen(false)}
            >
              Trabajemos juntos
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
