import Particles from './Particles';

export default function ParticlesSection() {
  return (
    <section
      className="relative w-full"
      style={{ height: '420px', background: '#020122', overflow: 'hidden' }}
    >
      <Particles
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleColors={['#FC9E4F']}
        moveParticlesOnHover={false}
        particleHoverFactor={1}
        alphaParticles
        particleBaseSize={100}
        sizeRandomness={1}
        cameraDistance={20}
        disableRotation
        className="absolute inset-0"
      />
      {/* Fade edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #020122 0%, transparent 18%, transparent 82%, #020122 100%)',
        }}
      />
    </section>
  );
}
