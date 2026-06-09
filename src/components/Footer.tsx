export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: '1px solid rgba(242,243,174,0.06)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
            style={{ background: 'linear-gradient(135deg, #FC9E4F, #FF521B)', color: '#020122' }}
          >
            S
          </span>
          <span className="font-medium text-sm" style={{ color: 'rgba(242,243,174,0.6)' }}>
            Solara
          </span>
        </div>

        <p className="text-xs font-mono" style={{ color: 'rgba(242,243,174,0.3)' }}>
          Costa Rica · {new Date().getFullYear()}
        </p>

        <p className="text-xs" style={{ color: 'rgba(242,243,174,0.3)' }}>
          Construimos soluciones que escalan.
        </p>
      </div>
    </footer>
  );
}
