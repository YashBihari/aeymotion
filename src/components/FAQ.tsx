import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    q: "How much time will this require from my team?",
    a: "Almost zero. We know you're busy building your product. Unlike traditional agencies that require you to write scripts and hold their hand, we handle the entire process end-to-end. We just need a 30-minute kickoff call and access to your software."
  },
  {
    q: "What types of videos do you produce?",
    a: "We build full-funnel video infrastructures spanning premium explainer videos, high-converting product walkthroughs, contextual app interfaces, customer success micro-loops, and multi-device automated 3D spatial showreels."
  },
  {
    q: "Why choose you over a traditional production house?",
    a: "Traditional agencies operate on months of retainer bloat and generic cinematic workflows. We operate exclusively as human-architected engineering partners focused on strict conversion ROI, deploying verified telemetric systems with fast 72-hour pipeline velocity."
  },
  {
    q: "What do I need to prepare before getting a quote?",
    a: "Simply submit your target Platform URI, core value proposition documents, or active UI wireframe specs via our Secure Intake form. We automatically synthesize existing UX layers to deliver your specialized execution blueprint."
  },
  {
    q: "How is pricing determined for SaaS video production?",
    a: "Pricing calibration scales directly with initial client assets, vector complexities, and target master duration bands. We utilize uncompromised, fixed-tier options starting from $900 up to premium end-to-end ecosystems, preventing any hidden ongoing costs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto relative z-10 border-t border-brand-900/60">
      {/* Ambient background accent aura */}
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
        >
          Got questions? <br />
          <span className="text-gradient-accent">We have answers.</span>
        </motion.h2>
      </div>

      {/* Structured Collapsible Accordion Grid */}
      <div className="space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen ? 'border-accent-500/60 bg-brand-950/90 shadow-xl shadow-accent-500/5' : 'border-brand-800/80 hover:border-brand-700/80'
              }`}
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-sm sm:text-base font-black text-white tracking-tight flex items-center gap-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${isOpen ? 'bg-accent-600/20 text-accent-400 border-accent-500/30' : 'bg-brand-900 text-brand-500 border-brand-800'}`}>
                    0{idx + 1}
                  </span>
                  {item.q}
                </span>
                <div className={`p-1 rounded-lg transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-accent-500/10 text-accent-400' : 'text-brand-500 bg-brand-900/40'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-brand-900/60 text-xs sm:text-sm text-brand-300 leading-relaxed font-medium">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
