'use client';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type Star = {
      x: number; y: number; r: number; opacity: number;
      vx: number; vy: number; twinkle: number; twinkleSpeed: number; color: string;
    };

    const mkStars = (count: number, minR: number, maxR: number, speed: number, angle: number): Star[] =>
      Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: minR + Math.random() * (maxR - minR),
        opacity: Math.random() * 0.6 + 0.15,
        vx: Math.cos(angle) * speed * (0.5 + Math.random()),
        vy: Math.sin(angle) * speed * (0.5 + Math.random()),
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.004 + Math.random() * 0.008,
        color: Math.random() > 0.88 ? '#EDD382' : Math.random() > 0.8 ? '#FC9E4F' : '#ffffff',
      }));

    const deg = (d: number) => d * Math.PI / 180;
    const layers = [
      mkStars(180, 0.3, 0.9, 0.06, deg(200)),
      mkStars(80, 0.8, 1.6, 0.12, deg(185)),
      mkStars(35, 1.5, 2.8, 0.2, deg(190)),
    ];

    const nebulas = [
      { x: 0.15, y: 0.25, r: 280, color: 'rgba(255,82,27,', base: 0.025 },
      { x: 0.82, y: 0.7, r: 200, color: 'rgba(237,211,130,', base: 0.018 },
      { x: 0.5, y: 0.1, r: 350, color: 'rgba(252,158,79,', base: 0.035 },
    ];

    let t = 0;
    let animId: number;

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      t += 0.5;

      ctx!.fillStyle = '#020122';
      ctx!.fillRect(0, 0, W, H);

      nebulas.forEach(n => {
        const pulse = n.base + Math.sin(t * 0.006 + n.x * 10) * 0.008;
        const grd = ctx!.createRadialGradient(n.x * W, n.y * H, 0, n.x * W, n.y * H, n.r);
        grd.addColorStop(0, n.color + pulse + ')');
        grd.addColorStop(0.4, n.color + pulse * 0.4 + ')');
        grd.addColorStop(1, n.color + '0)');
        ctx!.fillStyle = grd;
        ctx!.fillRect(0, 0, W, H);
      });

      layers.forEach(layer => {
        layer.forEach(star => {
          star.x += star.vx;
          star.y += star.vy;
          if (star.x < 0) star.x += W;
          if (star.x > W) star.x -= W;
          if (star.y < 0) star.y += H;
          if (star.y > H) star.y -= H;

          const twinkle = 0.65 + 0.35 * Math.sin(t * star.twinkleSpeed + star.twinkle);
          const alpha = star.opacity * twinkle;

          if (star.r > 1.5) {
            ctx!.save();
            ctx!.globalAlpha = alpha * 0.35;
            ctx!.strokeStyle = star.color;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(star.x - star.r * 3, star.y);
            ctx!.lineTo(star.x + star.r * 3, star.y);
            ctx!.moveTo(star.x, star.y - star.r * 3);
            ctx!.lineTo(star.x, star.y + star.r * 3);
            ctx!.stroke();
            ctx!.restore();
          }

          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx!.fillStyle = star.color;
          ctx!.globalAlpha = alpha;
          ctx!.fill();
          ctx!.globalAlpha = 1;
        });
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [reduce]);

  if (reduce) {
    return <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundColor: '#020122' }} />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, width: '100%', height: '100%' }}
    />
  );
}
