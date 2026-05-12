import { motion } from 'motion/react';
import { Sparkles, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Karan Dangi",
    role: "Founder & Strategy Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    bio: "Pioneering pre-verbal motion physics to bypass enterprise evaluation hesitation loops."
  },
  {
    name: "Marcus Vance",
    role: "Lead 3D Motion Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Ex-cinema visual effects master engineering high-fidelity geometric software representations."
  },
  {
    name: "Aria Solis",
    role: "AI Automation Specialist",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    bio: "Bridging real-time generation frameworks directly into repeatable automated agency render outputs."
  },
  {
    name: "Liam Thorne",
    role: "Direct-Response Copywriter",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    bio: "Stripping back descriptive agency bloat in favor of tight outcome conversion parameters."
  }
];

export default function Team() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-brand-900/60">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header layout */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/80 border border-brand-800 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-300 font-mono">Boutique Agency Framework</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
        >
          The Architects Behind <br />
          <span className="text-gradient-accent">the Screens.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm text-brand-400 max-w-xl mx-auto leading-relaxed"
        >
          A boutique team of 3D artists, AI specialists, and direct-response marketers.
        </motion.p>
      </div>

      {/* Grid: High-quality moody studio headshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-panel rounded-3xl overflow-hidden border border-brand-800/80 group hover:border-accent-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl relative"
          >
            {/* Visual Headshot Frame with Moody Dual-tone Filter Overlay */}
            <div className="relative aspect-square w-full bg-brand-950 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700 grayscale contrast-125 group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 rounded-full bg-brand-900/80 backdrop-blur-md flex items-center justify-center border border-brand-800 text-brand-300 hover:text-white cursor-pointer">
                  <Linkedin className="w-3 h-3" />
                </div>
                <div className="w-7 h-7 rounded-full bg-brand-900/80 backdrop-blur-md flex items-center justify-center border border-brand-800 text-brand-300 hover:text-white cursor-pointer">
                  <Twitter className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Core Member Information */}
            <div className="p-6 bg-brand-950/40 grow flex flex-col justify-between">
              <div>
                <h3 className="text-base font-black text-white tracking-tight group-hover:text-accent-400 transition-colors">
                  {member.name}
                </h3>
                <span className="text-[10px] font-mono font-bold text-accent-500 uppercase tracking-widest block mb-3">
                  {member.role}
                </span>
                <p className="text-[11px] text-brand-400 leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>

              {/* Lower baseline status marker */}
              <div className="pt-4 mt-4 border-t border-brand-900/60 flex items-center justify-between text-[9px] font-mono text-brand-500">
                <span>Deployment Scope</span>
                <span className="text-emerald-400 font-bold">100% Core Focus</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
