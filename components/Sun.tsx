'use client';

export function Sun({ size = 560 }: { size?: number }) {
  const cx = size / 2;
  const coreR   = size * 0.11;
  const ring1R  = size * 0.195;
  const ring2R  = size * 0.285;
  const ring3R  = size * 0.385;
  const rayLen  = size * 0.46;
  const rays = Array.from({ length: 14 }, (_, i) => i * (360 / 14));

  return (
    <div style={{ width: size, height: size }} className="relative flex-shrink-0">
      {/* Multi-layer deep atmospheric glow */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: `radial-gradient(circle at 50% 52%,
          rgba(255,200,80,0.55) 0%,
          rgba(255,100,20,0.40) 14%,
          rgba(220,60,10,0.22) 30%,
          rgba(150,30,5,0.10) 50%,
          transparent 68%)`,
        filter: 'blur(38px)',
        transform: 'scale(1.8)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: `radial-gradient(circle at 50% 50%,
          rgba(253,210,90,0.28) 0%,
          rgba(252,130,45,0.14) 28%,
          transparent 58%)`,
        filter: 'blur(18px)',
        transform: 'scale(1.35)',
        pointerEvents: 'none',
      }} />

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ position: 'relative', zIndex: 1 }}>
        <defs>
          <radialGradient id="sunCore" cx="36%" cy="29%" r="72%">
            <stop offset="0%"   stopColor="#FFFDE0" />
            <stop offset="10%"  stopColor="#F2F3AE" />
            <stop offset="35%"  stopColor="#EDD382" />
            <stop offset="65%"  stopColor="#FC9E4F" />
            <stop offset="100%" stopColor="#FF521B" />
          </radialGradient>
          <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FC9E4F" stopOpacity="0.28" />
            <stop offset="55%"  stopColor="#FF521B" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#FF521B" stopOpacity="0" />
          </radialGradient>
          <filter id="sunBloom" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feComposite in="SourceGraphic" in2="b" operator="over" />
          </filter>
          <filter id="ringBlur">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>

        {/* Outer ambient disc */}
        <circle cx={cx} cy={cx} r={ring3R + size * 0.11} fill="url(#outerGlow)" />

        {/* Rays — 14 rays, alternating length */}
        {rays.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const inner = coreR + 6;
          const outer = i % 7 === 0 ? rayLen
                       : i % 3 === 0 ? rayLen * 0.80
                       : i % 2 === 0 ? rayLen * 0.62
                       : rayLen * 0.48;
          const w = i % 7 === 0 ? 2.2 : 1;
          const op = i % 7 === 0 ? 0.65 : i % 3 === 0 ? 0.38 : 0.22;
          return (
            <line key={i}
              x1={cx + Math.cos(rad) * inner} y1={cx + Math.sin(rad) * inner}
              x2={cx + Math.cos(rad) * outer} y2={cx + Math.sin(rad) * outer}
              stroke={i % 7 === 0 ? '#F2F3AE' : '#FC9E4F'}
              strokeWidth={w} strokeOpacity={op} strokeLinecap="round"
              style={{ animationName: 'ray-pulse', animationDuration: '4s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: `${i * 0.28}s` }}
            />
          );
        })}

        {/* Solar flares */}
        {[30, 155, 270].map((a, i) => {
          const r = (a * Math.PI) / 180;
          const x1 = cx + Math.cos(r) * coreR;
          const y1 = cx + Math.sin(r) * coreR;
          const x2 = cx + Math.cos(r) * (coreR + size * 0.09);
          const y2 = cx + Math.sin(r) * (coreR + size * 0.09);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#FFF5C0" strokeWidth="3" strokeLinecap="round"
              style={{ animationName: 'flare', animationDuration: `${6 + i * 2.5}s`, animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: `${i * 3}s` }}
            />
          );
        })}

        {/* Ring 3 — outermost, very slow */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animationName: 'ring-cw', animationDuration: '50s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
          <circle cx={cx} cy={cx} r={ring3R} stroke="#EDD382" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 18" />
          {[0, 72, 144, 216, 288].map((a, i) => {
            const r = (a * Math.PI) / 180;
            return <circle key={i} cx={cx + Math.cos(r) * ring3R} cy={cx + Math.sin(r) * ring3R} r="3.5" fill="#FC9E4F" fillOpacity="0.55" />;
          })}
        </g>

        {/* Ring 2 — counter-clockwise, medium */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animationName: 'ring-ccw', animationDuration: '28s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
          <circle cx={cx} cy={cx} r={ring2R} stroke="#FC9E4F" strokeWidth="1.5" strokeOpacity="0.26" strokeDasharray="7 9" />
          {[45, 135, 225, 315].map((a, i) => {
            const r = (a * Math.PI) / 180;
            return <circle key={i} cx={cx + Math.cos(r) * ring2R} cy={cx + Math.sin(r) * ring2R} r="2.5" fill="#EDD382" fillOpacity="0.75" />;
          })}
        </g>

        {/* Ring 1 — innermost, slow forward */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animationName: 'ring-cw', animationDuration: '38s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
          <circle cx={cx} cy={cx} r={ring1R} stroke="#FF521B" strokeWidth="1" strokeOpacity="0.28" />
          {[0, 120, 240].map((a, i) => {
            const r = (a * Math.PI) / 180;
            return <circle key={i} cx={cx + Math.cos(r) * ring1R} cy={cx + Math.sin(r) * ring1R} r="3.8" fill="#FF521B" fillOpacity="0.78" />;
          })}
        </g>

        {/* Core halos */}
        <circle cx={cx} cy={cx} r={coreR + 18} fill="#FF521B" fillOpacity="0.06" />
        <circle cx={cx} cy={cx} r={coreR + 10} fill="#FC9E4F" fillOpacity="0.10" />
        <circle cx={cx} cy={cx} r={coreR + 4}  fill="#EDD382" fillOpacity="0.16" />

        {/* Core sphere */}
        <circle cx={cx} cy={cx} r={coreR} fill="url(#sunCore)" filter="url(#sunBloom)"
          style={{ animationName: 'core-pulse', animationDuration: '5s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }} />

        {/* Specular highlight */}
        <ellipse
          cx={cx - coreR * 0.19} cy={cx - coreR * 0.23}
          rx={coreR * 0.42} ry={coreR * 0.27}
          fill="white" fillOpacity="0.22"
        />
        <circle cx={cx + coreR * 0.28} cy={cx + coreR * 0.25} r={coreR * 0.09} fill="white" fillOpacity="0.08" />
      </svg>
    </div>
  );
}
