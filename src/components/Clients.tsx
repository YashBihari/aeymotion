import { motion } from 'motion/react';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';

const trustMetrics = [
  {
    company: "FintechX Invoicing",
    outcome: "+22% Conversion",
    context: "SaaS Onboarding Flow Overhaul",
    gradient: "from-blue-400 to-indigo-500",
    pill: "ARR Velocity"
  },
  {
    company: "NeuroScale AI",
    outcome: "$5M Series A Locked",
    context: "Pre-Seed Visual Architecture",
    gradient: "from-accent-400 to-purple-500",
    pill: "Stakeholder Trust"
  },
  {
    company: "CloudSync ERP",
    outcome: "32% Churn Reduction",
    context: "Tactile Motion Logic Loops",
    gradient: "from-emerald-400 to-teal-500",
    pill: "Friction Bypass"
  },
  {
    company: "DataStream Matrix",
    outcome: "4.2x Demo Velocity",
    context: "Pre-Verbal Explainer Sequence",
    gradient: "from-amber-400 to-orange-500",
    pill: "Ingestion Rate"
  }
];

export default function Clients() {
  const tickerLogos = [
    "STEALTH AI", "VEGACODES", "TECHZEIN", "AURA", 
    "DRIVERONHIRE", "VACATIONBNA",
    "STEALTH AI", "VEGACODES", "TECHZEIN", "AURA", 
    "DRIVERONHIRE", "VACATIONBNA"
  ];

  return (
    <section className="py-20 border-y border-brand-900/80 bg-brand-950/60 relative overflow-hidden backdrop-blur-sm">
      {/* Dynamic ambient grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-accent-500/5 to-transparent blur-2xl pointer-events-none" />

      {/* Authority Halo Client Logo Ticker */}
      <div className="w-full relative z-20 mb-16 border-b border-brand-900/40 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-6">
          <h3 className="text-[10px] font-black text-brand-500 uppercase tracking-widest font-mono">
            Trusted by 60+ scaling tech companies
          </h3>
        </div>
        
        {/* Infinite scrolling viewport flex wrapper */}
        <div className="flex overflow-hidden select-none relative mask-gradient-x w-full">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 pr-16 shrink-0 text-brand-600 font-black tracking-tighter text-xl sm:text-2xl"
          >
            {tickerLogos.map((logo, lIdx) => (
              <span key={`ticker-1-${lIdx}`} className="hover:text-brand-400 transition-colors duration-300 cursor-default whitespace-nowrap">
                {logo}
              </span>
            ))}
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 pr-16 shrink-0 text-brand-600 font-black tracking-tighter text-xl sm:text-2xl"
          >
            {tickerLogos.map((logo, lIdx) => (
              <span key={`ticker-2-${lIdx}`} className="hover:text-brand-400 transition-colors duration-300 cursor-default whitespace-nowrap">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-brand-900/60 pb-6">
          <div>
            <span className="text-[10px] font-black text-accent-400 uppercase tracking-widest block mb-1">
              Verified Trajectory Multipliers
            </span>
            <p className="text-xs font-bold text-brand-300 uppercase tracking-wider">
              Empowering complex infrastructure to drive measurable pipeline conversion
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 relative group hover:border-brand-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/5"
            >
              {/* Top pill indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-900 border border-brand-800 text-[9px] font-black text-brand-400 tracking-widest uppercase group-hover:border-brand-700 transition-colors">
                  {metric.pill}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-500 group-hover:text-accent-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
              </div>

              {/* Main value indicator */}
              <div className="mb-3 cursor-pointer relative">
                {/* Base gradient layer */}
                <span className={`text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent block drop-shadow-sm transition-opacity duration-700 ease-in-out group-hover:opacity-10`}>
                  {metric.outcome}
                </span>
                {/* Overlay glowing solid white layer */}
                <span className="absolute top-0 left-0 text-2xl sm:text-3xl font-black tracking-tight text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out drop-shadow-md pointer-events-none">
                  {metric.outcome}
                </span>
              </div>

              <div className="pt-3 border-t border-brand-900/60">
                <span className="text-xs font-extrabold text-white block mb-0.5 tracking-tight group-hover:text-accent-300 transition-colors">
                  {metric.company}
                </span>
                <p className="text-[11px] text-brand-400 font-medium tracking-wide">
                  {metric.context}
                </p>
              </div>

              {/* Top ambient frame edge stripe */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/5 group-hover:via-accent-500/40 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

