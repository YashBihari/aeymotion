import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-brand-50/90 backdrop-blur-xl border-b border-black/[0.06]"
    >
      <div className="flex items-center gap-2">
        <span className="text-[22px] font-black tracking-tighter uppercase text-brand-950">Aeymotion.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-xs uppercase tracking-widest text-[#666] font-semibold hover:text-black transition-colors">Services</a>
        <a href="#work" className="text-xs uppercase tracking-widest text-[#666] font-semibold hover:text-black transition-colors">Work</a>
        <a href="#process" className="text-xs uppercase tracking-widest text-[#666] font-semibold hover:text-black transition-colors">Process</a>
      </nav>

      <a
        href="#contact"
        className="text-black border border-black px-4 py-2 rounded-[20px] text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition-colors"
      >
        Start Your Project
      </a>
    </motion.header>
  );
}
