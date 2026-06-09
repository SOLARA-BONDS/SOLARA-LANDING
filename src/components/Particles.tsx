import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

export default function Particles({
  particleCount = 500,
  particleSpread = 10,
  speed = 0.1,
  particleColors = ['#FC9E4F'],
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = true,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  className = '',
}: ParticlesProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = cameraDistance;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Parse colors
    const threeColors = particleColors.map((hex) => new THREE.Color(hex));

    // Geometry
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * particleSpread * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * particleSpread * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * particleSpread * 2;

      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.005;

      const c = threeColors[Math.floor(Math.random() * threeColors.length)];
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      sizes[i] = particleBaseSize * (0.5 + Math.random() * sizeRandomness);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Sprite texture (circle)
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(alphaParticles ? 0.4 : 0.8, 'rgba(255,255,255,0.6)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      map: texture,
      vertexColors: true,
      transparent: true,
      alphaTest: 0.001,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Hover
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: -((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };
    if (moveParticlesOnHover) {
      container.addEventListener('mousemove', onMouseMove);
    }

    // Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let animId = 0;
    const posArr = geometry.attributes.position.array as Float32Array;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += speed * 0.01;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArr[i3] += velocities[i3] * speed;
        posArr[i3 + 1] += velocities[i3 + 1] * speed;
        posArr[i3 + 2] += velocities[i3 + 2] * speed;

        // Wrap around bounds
        const half = particleSpread;
        if (posArr[i3] > half) posArr[i3] -= half * 2;
        if (posArr[i3] < -half) posArr[i3] += half * 2;
        if (posArr[i3 + 1] > half) posArr[i3 + 1] -= half * 2;
        if (posArr[i3 + 1] < -half) posArr[i3 + 1] += half * 2;
        if (posArr[i3 + 2] > half) posArr[i3 + 2] -= half * 2;
        if (posArr[i3 + 2] < -half) posArr[i3 + 2] += half * 2;
      }
      geometry.attributes.position.needsUpdate = true;

      if (!disableRotation) {
        points.rotation.y = t * 0.05;
        points.rotation.x = t * 0.02;
      }

      if (moveParticlesOnHover) {
        points.position.x += (mouseRef.current.x * particleHoverFactor - points.position.x) * 0.05;
        points.position.y += (mouseRef.current.y * particleHoverFactor - points.position.y) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (moveParticlesOnHover) container.removeEventListener('mousemove', onMouseMove);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
}
