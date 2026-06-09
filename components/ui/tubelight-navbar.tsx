'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  url: string;
  icon: PhosphorIcon;
}

interface TubelightNavBarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavBar({ items, className }: TubelightNavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync active tab with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => ({
        name: item.name,
        el: item.url.startsWith('#')
          ? document.querySelector(item.url)
          : null,
      }));

      let current = items[0].name;
      for (const { name, el } of sections) {
        if (!el) continue;
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top <= 120) current = name;
      }
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <div
      className={cn(
        'fixed bottom-6 sm:bottom-auto sm:top-6 left-1/2 -translate-x-1/2 z-50',
        className,
      )}
    >
      <div
        className="flex items-center gap-1 py-1.5 px-2 rounded-full shadow-2xl backdrop-blur-xl"
        style={{
          background: 'rgba(2,1,34,0.85)',
          border: '1px solid rgba(28,26,69,0.8)',
          boxShadow: '0 0 40px rgba(252,158,79,0.08), 0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                'relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200',
                isActive ? 'text-[#020122]' : 'hover:text-[#F2F3AE]',
              )}
              style={{
                color: isActive ? '#020122' : '#8a8db0',
              }}
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  layoutId="tubelight-lamp"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background: 'linear-gradient(135deg, #FC9E4F 0%, #FF521B 100%)',
                  }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                >
                  {/* Tubelight glow above */}
                  <div
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-t-full"
                    style={{
                      width: 32,
                      height: 4,
                      background: '#FC9E4F',
                      boxShadow: '0 0 16px 4px rgba(252,158,79,0.6)',
                    }}
                  />
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full blur-md"
                    style={{
                      width: 48,
                      height: 20,
                      background: 'rgba(252,158,79,0.3)',
                    }}
                  />
                </motion.div>
              )}

              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} weight={isActive ? 'fill' : 'regular'} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
