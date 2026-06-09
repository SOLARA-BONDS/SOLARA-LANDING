import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Logo from './Logo';

const LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

function Tab({
  children,
  href,
  setPosition,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
}) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer"
    >
      <a
        href={href}
        className="block px-4 py-2 text-sm font-medium uppercase tracking-wide"
        style={{
          color: '#F2F3AE',
          mixBlendMode: 'difference',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {children}
      </a>
    </li>
  );
}

function SlidingCursor({ position }: { position: { left: number; width: number; opacity: number } }) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      animate={position}
      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 30 }}
      className="absolute z-0 top-1 bottom-1 rounded-full pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #FC9E4F, #FF521B)',
      }}
    />
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(2,1,34,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(252,158,79,0.1)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <Logo size={34} />
          <span
            className="font-semibold text-[15px] tracking-wide"
            style={{ color: '#F2F3AE', fontFamily: "'Outfit', sans-serif" }}
          >
            Solara
          </span>
        </a>

        {/* Desktop sliding nav */}
        <ul
          className="relative hidden md:flex items-center rounded-full p-1"
          style={{ border: '1.5px solid rgba(252,158,79,0.25)', background: 'rgba(2,1,34,0.5)' }}
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          {LINKS.map((l) => (
            <Tab key={l.label} href={l.href} setPosition={setPosition}>
              {l.label}
            </Tab>
          ))}
          <SlidingCursor position={position} />
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #FC9E4F, #FF521B)',
            color: '#020122',
            fontFamily: "'Outfit', sans-serif",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
        >
          Trabajemos juntos
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: '#FC9E4F',
                transform:
                  i === 0 && mobileOpen ? 'translateY(6.5px) rotate(45deg)' :
                  i === 2 && mobileOpen ? 'translateY(-6.5px) rotate(-45deg)' : '',
                opacity: i === 1 && mobileOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden overflow-hidden"
        style={{ background: 'rgba(2,1,34,0.97)', borderTop: '1px solid rgba(252,158,79,0.1)' }}
      >
        <ul className="px-6 py-4 flex flex-col gap-3">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="block py-1.5 text-sm font-medium"
                style={{ color: 'rgba(242,243,174,0.8)', fontFamily: "'Outfit', sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <a
              href="#contacto"
              className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, #FC9E4F, #FF521B)',
                color: '#020122',
                fontFamily: "'Outfit', sans-serif",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Trabajemos juntos
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
