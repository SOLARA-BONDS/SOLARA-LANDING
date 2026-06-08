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
          <Hero />
          <Services />
          <SolarSystem />
          <Projects />
          <Founders />
          <Social />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
