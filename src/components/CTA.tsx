import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Sparkles, Zap } from 'lucide-react';

interface CTAProps {
  onNavigate?: (screen: 'home' | 'pricing') => void;
}

export default function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Intense atmospheric back-glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl group border border-white/10 bg-brand-950/80 backdrop-blur-xl"
      >
        {/* Dynamic neon linear sweeps inside border */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 via-transparent to-brand-900/40 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Premium Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-accent-400" />
          <span className="text-xs font-black uppercase tracking-widest text-brand-300">Ready to scale?</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-3xl leading-tight relative z-10">
          Turn your complex software into <br className="hidden md:block" />
          <span className="text-gradient-accent">effortless sales.</span>
        </h2>
        
        <p className="text-base sm:text-lg text-brand-300 mb-12 max-w-2xl leading-relaxed relative z-10 font-medium">
          Don't let a confusing product experience kill your pipeline. Let's build a stunning, high-converting visual narrative that makes your customers immediately understand your value and want to buy.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-10">
          <a
            href="#contact"
            className="px-8 py-5 bg-accent-600 hover:bg-accent-500 text-white text-sm font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] inline-flex items-center justify-center gap-3 group/btn"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
          </a>
          
          <button
            onClick={() => {
              onNavigate?.('pricing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-black uppercase tracking-widest rounded-full transition-all duration-300 inline-flex items-center justify-center gap-3 backdrop-blur-sm cursor-pointer"
          >
            <span>View Pricing</span>
          </button>
        </div>

      </motion.div>
    </section>
  );
}


