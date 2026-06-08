'use client';
import { motion } from 'motion/react';
import { InstagramLogo, TwitterLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const socials = [
  { Icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com/solara.dev' },
  { Icon: TwitterLogo, label: 'Twitter', href: 'https://x.com/solaradev' },
  { Icon: LinkedinLogo, label: 'LinkedIn', href: 'https://linkedin.com/company/solaradev' },
  { Icon: GithubLogo, label: 'GitHub', href: 'https://github.com/SOLARA-BONDS' },
];

export function Social() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{
            color: '#FC9E4F', fontSize: '0.72rem',
            fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em',
            marginBottom: '1.25rem',
          }}>
            SIGUENOS
          </p>

          <div className="flex items-center justify-center gap-4">
            {socials.map(({ Icon, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-center rounded-full border transition-all duration-200"
                style={{
                  width: 56, height: 56,
                  backgroundColor: '#08072a',
                  borderColor: '#1c1a45',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#FC9E4F')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = '#1c1a45')}
              >
                <Icon size={22} color="#ffffff" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
