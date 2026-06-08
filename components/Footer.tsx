import { SolaraLogoMark } from './SolaraLogo';

const C = {
  border: '#1c1a45',
  text: '#F2F3AE',
  muted: '#8a8db0',
  dim: '#3a3860',
};

export function Footer() {
  return (
    <footer className="border-t px-6 py-10" style={{ borderColor: C.border }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <SolaraLogoMark size={26} />
          <span className="font-bold text-sm tracking-tight" style={{ color: C.text }}>Solara</span>
        </div>

        <p className="text-xs font-mono text-center" style={{ color: C.dim }}>
          Josue Azofeifa &middot; Fabiana Rojas &middot; Carlos Sanchez
        </p>

        <p className="text-xs" style={{ color: C.dim }}>
          &copy; {new Date().getFullYear()} Solara. Costa Rica.
        </p>
      </div>
    </footer>
  );
}
