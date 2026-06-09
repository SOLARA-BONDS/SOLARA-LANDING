import StaggeredMenu from './StaggeredMenu';
import Logo from './Logo';

const menuItems = [
  { label: 'Inicio', ariaLabel: 'Ir al inicio', link: '#' },
  { label: 'Servicios', ariaLabel: 'Ver servicios', link: '#servicios' },
  { label: 'Nosotros', ariaLabel: 'Conocer el equipo', link: '#nosotros' },
  { label: 'Contacto', ariaLabel: 'Contactar', link: '#contacto' },
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/SOLARA-BONDS' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Instagram', link: 'https://instagram.com' },
];

export default function Nav() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      colors={['#FC9E4F', '#FF521B']}
      accentColor="#FF521B"
      menuButtonColor="#F2F3AE"
      openMenuButtonColor="#F2F3AE"
      changeMenuColorOnOpen={false}
      isFixed
      logoContent={
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={34} />
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '15px', letterSpacing: '0.03em', color: '#F2F3AE' }}>
            Solara
          </span>
        </a>
      }
    />
  );
}
