import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Layers, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

const industriesData = [
  {
    id: "Web 3.0",
    title: "Web 3.0 & Cryptographic Protocols",
    subtitle: "Cinematic architecture converting zero-knowledge environments into high conviction.",
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
    benefits: [
      { name: "Endowment Acceleration", desc: "Instantly trigger psychological ownership via highly tactile self-building graphics." },
      { name: "Tokenomics Clarity", desc: "Map dense multi-stage governance formulas into straightforward visual graphs." },
      { name: "Institutional Validation", desc: "Drive premium investor LP allocation conviction during closed-door brief sessions." }
    ]
  },
  {
    id: "SaaS & Tech",
    title: "SaaS & Tech Core Infrastructure",
    subtitle: "High-velocity pipelines designed specifically for complex software models.",
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
    benefits: [
      { name: "Drive More Revenue", desc: "Simplify complex dashboards to build instant stakeholder trust." },
      { name: "Speed Up The Sales Cycle", desc: "Arm your core outbound sales teams with standalone authoritative visual demos." },
      { name: "Boost Retention", desc: "Create beautifully engineered contextual onboarding and active continuous training loops." }
    ]
  },
  {
    id: "AI & Machine Learning",
    title: "AI & Machine Learning Matrices",
    subtitle: "Translate abstract edge processing and neural layers into pre-verbal clarity.",
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    benefits: [
      { name: "End-to-End Authority", desc: "Visualize abstract compute networks to justify premier platform metrics." },
      { name: "Frictionless Ingest", desc: "Bridge developer integration hurdles instantly via spatial WebGL previews." },
      { name: "Pipeline Trust", desc: "Anchor high-ticket institutional trial closures with empirical logic layouts." }
    ]
  },
  {
    id: "Enterprise",
    title: "Enterprise Custom Choice Systems",
    subtitle: "Predictable, uncompromised workflow frameworks mapped directly to your internal velocity.",
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    benefits: [
      { name: "White-Glove SLA", desc: "Unlimited revisions and priority design-sync bandwidth mapped to your active calendar." },
      { name: "Global Deployment Scale", desc: "Omnichannel reformats, cross-device resizes, and rapid localization parameters delivered seamlessly." },
      { name: "Secure Telemetry", desc: "Dedicated encrypted file packaging optimized to respect stringent software compliance parameters." }
    ]
  }
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState("Web 3.0");

  const currentData = industriesData.find(i => i.id === activeTab) || industriesData[0];

  return (
    <section id="industries" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-brand-900/60">
      {/* Dynamic ambient highlights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Headings */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight text-balance"
        >
          We make the complex easy to understand, <span className="text-gradient-accent">no matter your niche.</span>
        </motion.h2>
      </div>

      {/* UI Structure: Ultra-clean segmented control style tab component */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-14 p-1.5 rounded-full bg-brand-900/30 border border-brand-800/40 max-w-fit mx-auto backdrop-blur-xl shadow-inner">
        {industriesData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer relative z-10 ${
              activeTab === tab.id
                ? 'text-white font-black tracking-wide shadow-md shadow-black/20'
                : 'text-brand-400 hover:text-brand-200 font-bold tracking-wide'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-accent-600 rounded-full -z-10 border border-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{tab.id}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Engine Array */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-800/80 shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Focused benefits map */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-mono text-accent-400 uppercase tracking-widest block mb-2">
                Active Tier Spec
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                {currentData.title}
              </h3>
              <p className="text-xs text-brand-300 leading-relaxed font-medium">
                {currentData.subtitle}
              </p>
            </div>

            {/* 3 Specific dynamic benefits array */}
            <div className="space-y-5 pt-4 border-t border-brand-900/80">
              {currentData.benefits.map((benefit, bIdx) => (
                <motion.div 
                  key={bIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: bIdx * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-1.5 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400 mt-0.5 shrink-0 group-hover:border-accent-500/40 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white tracking-tight uppercase group-hover:text-accent-300 transition-colors">
                      {benefit.name}
                    </h4>
                    <p className="text-[11px] text-brand-400 leading-relaxed mt-1 font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-brand-900/60 hover:bg-brand-900 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all border border-brand-800 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Deploy Specialized Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Looping preview matrix container */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-brand-950 border border-brand-800/80 shadow-inner group"
              >
                <video 
                  src={currentData.video}
                  className="w-full h-full object-cover opacity-85 transition-transform duration-1000 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent opacity-60" />
                
                {/* Overlay live telemetric runtime badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-brand-950/80 backdrop-blur-md rounded-xl border border-brand-800/80 flex items-center justify-between text-[10px] font-mono pointer-events-none">
                  <div className="flex items-center gap-2 text-brand-300">
                    <span className="w-2 h-2 rounded-full bg-accent-400 animate-ping" />
                    <span>Realtime WebGL Spec</span>
                  </div>
                  <span className="text-accent-400 font-bold uppercase tracking-wider">{currentData.id} Stream</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
