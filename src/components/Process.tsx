import { motion } from 'motion/react';
import { Timer, ArrowRight, Flame, Sparkles } from 'lucide-react';

const sprintPhases = [
  {
    hour: "Phase 01: Audit Synthesis",
    title: "Cognitive Friction Extraction",
    action: "Immediate parsing of your active interface layers. We map specific conversion deadlocks and extract pure visual messaging anchors."
  },
  {
    hour: "Phase 02: Motion Architecture",
    title: "Pre-Verbal Fluency Injection",
    action: "High-fidelity spatial layout, motion physics loops, and UI acceleration models built directly to override enterprise hesitation."
  },
  {
    hour: "Phase 03: Live Asset Multiplier",
    title: "Production Framework Handoff",
    action: "Master webGL sequences and hyper-optimized display assets deployed directly to scale your baseline conversion run-rate."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-brand-950 text-white relative overflow-hidden border-t border-brand-900/80">
      {/* Ambient premium lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Headline Core */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-accent-400">High-Velocity Execution</span>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              Pre-Verbal Conviction. <br />
              <span className="text-gradient-accent">Engineered in 72h.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm text-brand-300 leading-relaxed mb-8"
            >
              Our automated intake framework converts complex product modules into seamless visual assets, unlocking immediate pipeline acceleration.
            </motion.p>

            {/* Scarcity Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 glass-panel rounded-2xl border border-amber-500/30 bg-amber-500/5 relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-wider mb-2">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>Strict Operational Bandwidth</span>
              </div>
              <p className="text-xs text-brand-300 leading-relaxed mb-4">
                To guarantee absolute delivery precision, we enforce a hard deployment limit of <strong className="text-white font-black">2 Sprint allocations per week</strong>.
              </p>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <span>Secure Sprint Bandwidth</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Staggered Sequence Array */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6 lg:pl-8">
            {sprintPhases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-panel rounded-2xl p-6 border border-brand-800/80 relative group hover:border-accent-500/50 transition-all duration-300 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md bg-brand-900/80 border border-brand-800 text-[10px] font-black text-accent-400 tracking-widest uppercase w-fit">
                    {phase.hour}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                    {phase.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-brand-300 leading-relaxed">
                  {phase.action}
                </p>

                {/* Vertical accent strip */}
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-brand-800 rounded-r group-hover:bg-accent-500 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

