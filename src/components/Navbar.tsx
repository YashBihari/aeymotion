import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Phone, Mail, Clock } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (screen: 'home' | 'pricing' | 'services' | 'portfolio') => void;
  currentScreen?: 'home' | 'pricing' | 'services' | 'portfolio';
}

export default function Navbar({ onNavigate, currentScreen = 'home' }: NavbarProps) {
  return (
    <>
      {/* Micro-Bar (Top Persistent Telemetry) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-950/95 border-b border-brand-900 px-4 py-1.5 text-[10px] font-mono text-brand-400 hidden sm:flex items-center justify-between max-w-full overflow-hidden backdrop-blur-md">
        <div className="flex items-center gap-6 mx-auto max-w-7xl w-full justify-between px-2">
          <div className="flex items-center gap-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.aeymotion@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer font-bold"
            >
              <Mail className="w-3 h-3 text-accent-400" />
              hello.aeymotion@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span className="text-brand-300 font-bold uppercase tracking-wider">Mon-Fri 9AM-10PM EST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 sm:top-[28px] left-0 right-0 z-40 flex items-center justify-between px-4 py-3 md:px-12 md:py-4 bg-brand-950/85 backdrop-blur-xl border-b border-brand-800/80 shadow-lg"
      >
        {/* Left: Minimalist Text Logo */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              onNavigate?.('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="text-lg md:text-[22px] font-black tracking-tighter uppercase text-white flex items-center gap-1 cursor-pointer"
          >
            Aeymotion<span className="text-accent-400">.</span>
          </button>
        </div>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => {
              onNavigate?.('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer ${
              currentScreen === 'portfolio' ? 'text-accent-400 underline decoration-2 underline-offset-4' : 'text-brand-400 hover:text-white'
            }`}
          >
            Portfolio
          </button>
          <a 
            href="#industries" 
            onClick={() => {
              onNavigate?.('home');
              const el = document.getElementById('industries');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs uppercase tracking-widest text-brand-400 font-bold hover:text-white transition-colors cursor-pointer"
          >
            Industries
          </a>
          <button 
            onClick={() => {
              onNavigate?.('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer ${
              currentScreen === 'services' ? 'text-accent-400 underline decoration-2 underline-offset-4' : 'text-brand-400 hover:text-white'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => {
              onNavigate?.('pricing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer ${
              currentScreen === 'pricing' ? 'text-accent-400 underline decoration-2 underline-offset-4' : 'text-brand-400 hover:text-white'
            }`}
          >
            Pricing
          </button>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              onNavigate?.('pricing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex px-4 py-2 bg-brand-900/60 hover:bg-brand-900 text-brand-300 hover:text-white border border-brand-800 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer"
          >
            See Pricing
          </button>
          <a
            href="#contact"
            onClick={() => {
              onNavigate?.('home');
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white bg-accent-600 hover:bg-accent-500 px-4 sm:px-5 py-2.5 rounded-lg text-[11px] uppercase tracking-widest font-black transition-all shadow-md shadow-accent-600/20 hover:scale-105 cursor-pointer flex items-center gap-1.5"
          >
            <span className="font-bold tracking-wider">BOOK STRATEGY CALL</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </motion.header>
    </>
  );
}


