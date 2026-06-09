import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { SolarSystem } from '@/components/SolarSystem';
import { Projects } from '@/components/Projects';
import { Founders } from '@/components/Founders';
import { Social } from '@/components/Social';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <GalaxyBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main>
          <section id="inicio"><Hero /></section>
          <section id="servicios"><Services /></section>
          <section id="stack"><SolarSystem /></section>
          <section id="proyectos"><Projects /></section>
          <section id="founders"><Founders /></section>
          <Social />
          <section id="contacto"><CTA /></section>
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
