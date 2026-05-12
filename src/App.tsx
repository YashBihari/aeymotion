import { motion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FlashOfferSticky from './components/FlashOfferSticky';
import ServicesScreen from './components/ServicesScreen';
import PortfolioScreen from './components/PortfolioScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'pricing' | 'services' | 'portfolio'>('home');

  return (
    <div className="relative min-h-screen selection:bg-accent-500 selection:text-white bg-brand-950 text-white">
      <Navbar onNavigate={setCurrentScreen} currentScreen={currentScreen} />
      <FlashOfferSticky onNavigate={setCurrentScreen} />
      
      <main>
        {currentScreen === 'home' && (
          <>
            <Hero onNavigate={setCurrentScreen} />
            <Clients />
            <Industries />
            <WhyUs />
            <Services />
            <Testimonials />
            <FAQ />
            <CTA onNavigate={setCurrentScreen} />
          </>
        )}
        {currentScreen === 'pricing' && (
          <Pricing onNavigate={setCurrentScreen} />
        )}
        {currentScreen === 'services' && (
          <ServicesScreen onNavigate={setCurrentScreen} />
        )}
        {currentScreen === 'portfolio' && (
          <PortfolioScreen onNavigate={setCurrentScreen} />
        )}

        {/* Global Lead Conversion Section Accessible from all Pages */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer onNavigate={setCurrentScreen} />
    </div>
  );
}



