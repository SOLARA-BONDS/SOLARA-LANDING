'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { Link, Lightning, ShieldCheck, Database, CreditCard } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

type Project = {
  name: string;
  tagline: string;
  tags: string[];
  accent: string;
  Icon: Icon;
};

const projects: Project[] = [
  {
    name: 'VelarBonds',
    tagline: 'Plataforma de bonos on-chain con USDC',
    tags: ['Solidity', 'React', 'Supabase', 'Web3'],
    accent: '#FC9E4F',
    Icon: Link,
  },
  {
    name: 'AutoFlow',
    tagline: 'Automatizaciones n8n para equipos de ventas',
    tags: ['n8n', 'Node.js', 'PostgreSQL'],
    accent: '#EDD382',
    Icon: Lightning,
  },
  {
    name: 'SecureAudit',
    tagline: 'Herramienta de auditoria y pentesting',
    tags: ['Python', 'Docker', 'React'],
    accent: '#FF521B',
    Icon: ShieldCheck,
  },
  {
    name: 'DataVault',
    tagline: 'BaaS con auth y storage listo para produccion',
    tags: ['Supabase', 'Next.js', 'TypeScript'],
    accent: '#34D399',
    Icon: Database,
  },
  {
    name: 'ChainPay',
    tagline: 'Pagos crypto con confirmacion al instante',
    tags: ['Ethereum', 'Solidity', 'React'],
    accent: '#A78BFA',
    Icon: CreditCard,
  },
];

export function Projects() {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ height: 1, width: 24, background: '#FC9E4F', opacity: 0.55 }} />
            <span style={{ color: '#FC9E4F', fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em' }}>
              PROYECTOS
            </span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter" style={{ color: '#F2F3AE' }}>
              Lo que construimos
            </h2>
            <p style={{ color: '#8a8db0', fontSize: '0.85rem' }}>
              &larr; arrastra para explorar &rarr;
            </p>
          </div>
        </motion.div>

        <div
          ref={constraintRef}
          style={{ overflow: 'hidden', cursor: 'grab', userSelect: 'none' }}
        >
          <motion.div
            drag="x"
            dragConstraints={constraintRef}
            dragElastic={0.08}
            whileDrag={{ cursor: 'grabbing' }}
            style={{ display: 'flex', gap: '1.25rem', width: 'max-content', paddingBottom: '1rem' }}
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ProjectIcon = project.Icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width: 320,
        flexShrink: 0,
        borderRadius: '16px',
        backgroundColor: '#08072a',
        border: `1px solid #1c1a45`,
        borderTop: `2px solid ${project.accent}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        height: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `radial-gradient(ellipse at center, ${project.accent}18 0%, transparent 70%)`,
        borderBottom: '1px solid #1c1a45',
      }}>
        <ProjectIcon size={56} weight="duotone" color={project.accent} />
      </div>

      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        <h3 style={{ color: '#F2F3AE', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          {project.name}
        </h3>
        <p style={{ color: '#8a8db0', fontSize: '0.875rem', lineHeight: 1.6, flex: 1 }}>
          {project.tagline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.7rem',
              fontFamily: 'JetBrains Mono, monospace',
              padding: '0.25rem 0.6rem',
              borderRadius: '6px',
              background: `${project.accent}14`,
              color: project.accent,
              border: `1px solid ${project.accent}28`,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
