import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-950 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Clients />
        <WhyUs />
        <Services />
        <Portfolio />
        <Process />
        <CTA />
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
