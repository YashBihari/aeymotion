import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, UserCheck, Coins, Sparkles, Layers } from 'lucide-react';

const pathways = [
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-400" />,
    solution: "Accelerate Sales",
    subtitle: "High-Converting Visual Demos",
    description: "Stop relying on dense documentation. We create stunning, cinematic video narratives that instantly show prospects exactly how your software solves their most expensive problems.",
    outcome: "Shorten sales cycles & increase demo win rates.",
    badge: "Pipeline Growth",
    color: "from-accent-500/10 to-transparent",
    borderGlow: "group-hover:via-accent-500"
  },
  {
    icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
    solution: "Boost Retention",
    subtitle: "Frictionless Onboarding",
    description: "Keep new users engaged from day one. Our immersive product visualizations intuitively guide users, entirely eliminating the frustration of learning a complex new interface.",
    outcome: "Reduce trial drop-offs & platform churn.",
    badge: "User Engagement",
    color: "from-emerald-500/10 to-transparent",
    borderGlow: "group-hover:via-emerald-500"
  },
  {
    icon: <Coins className="w-6 h-6 text-amber-400" />,
    solution: "Drive Conviction",
    subtitle: "Institutional Validation",
    description: "Build immediate trust with enterprise decision-makers. High-fidelity motion graphics visually position your product as the undeniable, premium standard in your industry.",
    outcome: "Secure enterprise buy-in & justify premium pricing.",
    badge: "Brand Authority",
    color: "from-amber-500/10 to-transparent",
    borderGlow: "group-hover:via-amber-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Immersive background aura highlights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Redesigned Clean Header */}
      <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight"
        >
          Turn complex software into <br className="hidden sm:block" />
          <span className="text-gradient-accent">undeniable visual proof.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-brand-300 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          We translate dense technical architecture into frictionless, cinematic experiences that your customers instantly understand, trust, and buy.
        </motion.p>
      </div>

      {/* Clean & Attractive Pathways Array */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {pathways.map((path, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-panel rounded-3xl p-8 sm:p-10 relative group border border-brand-800/60 hover:border-brand-700 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-500/10 hover:bg-brand-900/40"
          >
            {/* Absolute ambient ceiling light */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${path.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            <div className="relative z-10 flex flex-col h-full">
              {/* Premium Icon Container */}
              <div className="p-4 bg-brand-950/80 rounded-2xl w-fit mb-8 border border-white/5 shadow-md group-hover:scale-110 group-hover:border-white/10 transition-all duration-500">
                {path.icon}
              </div>

              <div>
                <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-2 block font-mono">
                  {path.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-accent-300 transition-colors">
                  {path.solution}
                </h3>
                
                <p className="text-sm text-brand-300 leading-relaxed mb-8 font-medium">
                  {path.description}
                </p>
              </div>

              <div className="mt-auto border-t border-brand-900/60 pt-6">
                <div className="flex items-start gap-3 mb-6">
                  <div className="mt-1 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  </div>
                  <p className="text-[13px] font-bold text-brand-200">
                    {path.outcome}
                  </p>
                </div>

                <a 
                  href="#pricing" 
                  className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-brand-400 group-hover:text-white transition-colors group/btn cursor-pointer"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Dynamic ultra border spark base line */}
            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-transparent to-transparent ${path.borderGlow} transition-all duration-700 opacity-50 group-hover:opacity-100`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

