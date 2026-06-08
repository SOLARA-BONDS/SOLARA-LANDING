'use client';
import { useReducedMotion, motion } from 'motion/react';

const orbits = [
  {
    radius: 125,
    duration: 32,
    color: '#FC9E4F',
    techs: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/ffffff' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/ffffff' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/FC9E4F' },
    ],
  },
  {
    radius: 210,
    duration: 56,
    color: '#EDD382',
    techs: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/ffffff' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/FC9E4F' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/ffffff' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/ffffff' },
      { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FC9E4F' },
    ],
  },
  {
    radius: 305,
    duration: 90,
    color: '#FF521B',
    techs: [
      { name: 'Ethereum', icon: 'https://cdn.simpleicons.org/ethereum/ffffff' },
      { name: 'Solidity', icon: 'https://cdn.simpleicons.org/solidity/ffffff' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/FC9E4F' },
      { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonwebservices/ffffff' },
      { name: 'Cloudflare', icon: 'https://cdn.simpleicons.org/cloudflare/FC9E4F' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/ffffff' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/ffffff' },
    ],
  },
];

const PLANET_SIZE = 56;
const SUN_SIZE = 88;

export function SolarSystem() {
  const reduce = useReducedMotion();
  const totalR = orbits[orbits.length - 1].radius;
  const containerSize = (totalR + PLANET_SIZE * 1.6) * 2;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(2,1,34,0.3) 50%, transparent 100%)',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4" style={{ color: '#F2F3AE' }}>
            Stack tecnologico
          </h2>
          <p className="text-lg max-w-[40ch] mx-auto" style={{ color: '#8a8db0' }}>
            Las herramientas que orbitan nuestro dia a dia.
          </p>
        </motion.div>

        <div className="hidden md:flex justify-center items-center">
          <div style={{ width: containerSize, height: containerSize, position: 'relative', flexShrink: 0 }}>
            {orbits.map((orbit, oi) => (
              <div key={oi} style={{
                position: 'absolute', top: '50%', left: '50%',
                width: orbit.radius * 2, height: orbit.radius * 2,
                marginLeft: -orbit.radius, marginTop: -orbit.radius,
                borderRadius: '50%', border: `1px dashed ${orbit.color}28`,
                pointerEvents: 'none',
              }} />
            ))}

            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              width: SUN_SIZE, height: SUN_SIZE,
              marginLeft: -SUN_SIZE / 2, marginTop: -SUN_SIZE / 2,
            }}>
              <MiniSun size={SUN_SIZE} />
            </div>

            {orbits.map((orbit, oi) =>
              orbit.techs.map((tech, ti) => {
                const initialAngle = (ti / orbit.techs.length) * 360;
                const delay = -(initialAngle / 360) * orbit.duration;

                return (
                  <div
                    key={`${oi}-${ti}`}
                    style={{
                      position: 'absolute', top: '50%', left: '50%',
                      width: 0, height: 0, transformOrigin: '0 0',
                      animationName: reduce ? 'none' : 'orbit-cw',
                      animationDuration: `${orbit.duration}s`,
                      animationTimingFunction: 'linear',
                      animationIterationCount: 'infinite',
                      animationDelay: `${delay}s`,
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: orbit.radius - PLANET_SIZE / 2,
                      top: -PLANET_SIZE / 2,
                      width: PLANET_SIZE, height: PLANET_SIZE,
                      transformOrigin: 'center center',
                      animationName: reduce ? 'none' : 'orbit-ccw',
                      animationDuration: `${orbit.duration}s`,
                      animationTimingFunction: 'linear',
                      animationIterationCount: 'infinite',
                      animationDelay: `${delay}s`,
                    }}>
                      <Planet tech={tech} orbitColor={orbit.color} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="md:hidden grid grid-cols-4 gap-3">
          {orbits.flatMap(o => o.techs).map(tech => (
            <div key={tech.name} className="flex flex-col items-center gap-2 p-3 rounded-xl border"
              style={{ backgroundColor: '#08072a', borderColor: '#1c1a45' }}>
              <img src={tech.icon} alt={tech.name} width={28} height={28} className="object-contain"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span className="text-xs text-center" style={{ color: '#8a8db0' }}>{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm"
            style={{ borderColor: 'rgba(252,158,79,0.25)', backgroundColor: 'rgba(252,158,79,0.06)', color: '#8a8db0' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Y mas: n8n &middot; Zapier &middot; Make &middot; Hardhat &middot; Prisma &middot; Redis &middot; Vercel
          </div>
        </div>
      </div>
    </section>
  );
}

function Planet({ tech, orbitColor }: { tech: { name: string; icon: string }; orbitColor: string }) {
  return (
    <div className="group relative flex flex-col items-center gap-1 cursor-default"
      style={{ width: PLANET_SIZE, height: PLANET_SIZE + 20 }}>
      <div className="flex items-center justify-center rounded-xl transition-all duration-200"
        style={{
          width: PLANET_SIZE, height: PLANET_SIZE,
          backgroundColor: '#08072a',
          border: `1px solid ${orbitColor}30`,
          boxShadow: `0 0 12px ${orbitColor}18`,
        }}>
        <img src={tech.icon} alt={tech.name} width={22} height={22} className="object-contain"
          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
      </div>
      <span className="text-[9px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4"
        style={{ color: orbitColor }}>
        {tech.name}
      </span>
    </div>
  );
}

function MiniSun({ size }: { size: number }) {
  const cx = size / 2;
  const coreR = size * 0.3;
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: '-60%',
        background: 'radial-gradient(circle, rgba(252,158,79,0.45) 0%, rgba(255,82,27,0.2) 35%, transparent 70%)',
        filter: 'blur(18px)', borderRadius: '50%',
      }} />
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'relative', zIndex: 1 }}>
        <defs>
          <radialGradient id="miniCore" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF5C0" />
            <stop offset="30%" stopColor="#EDD382" />
            <stop offset="70%" stopColor="#FC9E4F" />
            <stop offset="100%" stopColor="#FF521B" />
          </radialGradient>
          <filter id="miniBloom">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feComposite in="SourceGraphic" in2="b" operator="over" />
          </filter>
        </defs>
        <circle cx={cx} cy={cx} r={coreR + 10} fill="#FC9E4F" fillOpacity="0.1" />
        <circle cx={cx} cy={cx} r={coreR + 5} fill="#FC9E4F" fillOpacity="0.15" />
        <circle cx={cx} cy={cx} r={coreR} fill="url(#miniCore)" filter="url(#miniBloom)" />
        <ellipse cx={cx - coreR * 0.18} cy={cx - coreR * 0.22}
          rx={coreR * 0.4} ry={coreR * 0.26} fill="white" fillOpacity="0.2" />
      </svg>
    </div>
  );
}
