import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle, Video, ImageOff } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Immersive background aura */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Narrative Header block */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight"
        >
          Your platform is state-of-the-art. <br className="hidden sm:block" />
          <span className="text-gradient-accent">Static mockups paralyze it.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-brand-300 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Customers won't read dense documentation to figure out your software. We replace friction with fluidity, giving your buyers instant clarity through cinematic motion.
        </motion.p>
      </div>

      {/* Clean & Attractive Comparison Core */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
        
        {/* The Problem: Static Overload */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] p-8 sm:p-12 bg-[#0a0a0c]/80 border border-white/5 relative overflow-hidden flex flex-col group hover:border-red-500/20 transition-all duration-500 shadow-xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-500">
              <ImageOff className="w-6 h-6 text-brand-400 group-hover:text-red-400" />
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-widest text-brand-400 font-mono border border-white/5">
              The Old Way
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-brand-100 mb-4 tracking-tight">
            Static Screenshots & Text
          </h3>
          
          <p className="text-sm text-brand-400 leading-relaxed mb-10 font-medium">
            Relying on flat images and dense paragraphs forces your prospect to do the heavy lifting. They have to imagine how your product works, creating friction and cognitive overload.
          </p>

          <ul className="space-y-4 mt-auto">
            <li className="flex items-start gap-3">
              <div className="mt-1 shrink-0 bg-red-500/20 p-1 rounded-full">
                <AlertTriangle className="w-3 h-3 text-red-500" />
              </div>
              <span className="text-sm font-medium text-brand-300">Forces prospects to imagine the workflow.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 shrink-0 bg-red-500/20 p-1 rounded-full">
                <AlertTriangle className="w-3 h-3 text-red-500" />
              </div>
              <span className="text-sm font-medium text-brand-300">Creates cognitive drop-off and evaluation fatigue.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 shrink-0 bg-red-500/20 p-1 rounded-full">
                <AlertTriangle className="w-3 h-3 text-red-500" />
              </div>
              <span className="text-sm font-medium text-brand-300">Extends the sales cycle unnecessarily.</span>
            </li>
          </ul>
        </motion.div>

        {/* The Solution: Cinematic Motion */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] p-8 sm:p-12 bg-accent-600/5 border border-accent-500/20 relative overflow-hidden flex flex-col group hover:border-accent-500/40 hover:bg-accent-600/10 transition-all duration-500 shadow-2xl shadow-accent-500/5"
        >
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

          <div className="mb-8 flex items-center justify-between relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-accent-500/20 flex items-center justify-center border border-accent-500/30 group-hover:scale-110 transition-transform duration-500">
              <Video className="w-6 h-6 text-accent-400" />
            </div>
            <span className="px-4 py-1.5 rounded-full bg-accent-500/20 text-[10px] font-black uppercase tracking-widest text-accent-400 font-mono border border-accent-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              The Aeymotion Way
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight relative z-10">
            Cinematic Motion Proof
          </h3>
          
          <p className="text-sm text-brand-200 leading-relaxed mb-10 font-medium relative z-10">
            We turn your software into a high-fidelity visual experience. Smooth motion and perfect pacing instantly guide the viewer's eye exactly where the value is.
          </p>

          <ul className="space-y-4 mt-auto relative z-10">
            <li className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <CheckCircle className="w-5 h-5 text-accent-400" />
              </div>
              <span className="text-sm font-medium text-white">Instantly establishes product superiority & trust.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <CheckCircle className="w-5 h-5 text-accent-400" />
              </div>
              <span className="text-sm font-medium text-white">Removes all cognitive friction from the buyer.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <CheckCircle className="w-5 h-5 text-accent-400" />
              </div>
              <span className="text-sm font-medium text-white">Drives faster, higher-conviction enterprise deals.</span>
            </li>
          </ul>

          {/* Bottom active glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </section>
  );
}

