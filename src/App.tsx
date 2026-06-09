import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#020122', minHeight: '100dvh' }}>
      <Nav />
      <Hero />
      <Services />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
}
