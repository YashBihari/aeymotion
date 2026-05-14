import { motion } from 'motion/react';
import { ArrowRight, Play, TrendingUp, Sparkles, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate?: (screen: 'home' | 'pricing' | 'services' | 'portfolio') => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Immersive subtle ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-5 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Crisp Asymmetric Messaging Core */}
        <div className="lg:col-span-7 max-w-2xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.015, 1],
              textShadow: [
                "0px 0px 0px rgba(59, 130, 246, 0)",
                "0px 0px 30px rgba(59, 130, 246, 0.4)",
                "0px 0px 0px rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ 
              opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
              y: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              textShadow: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6 origin-left text-balance"
          >
            We help AI & SaaS founders launch, grow, and scale with <span className="text-gradient-accent">high-converting motion content.</span>
          </motion.h1>
          {/* Rotating company showcase removed */}          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-sm sm:text-base text-brand-300 max-w-xl leading-relaxed mb-8 text-balance"
          >
            We turn AI & SaaS products into visual experiences customers instantly understand, trust, and buy into.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 mb-8"
          >
            {/* Primary Button */}
            <button
              onClick={() => {
                onNavigate?.('home');
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    const input = document.getElementById('contact-name-input') as HTMLInputElement;
                    if (input) input.focus();
                  }, 500);
                }
              }}
              className="px-6 py-4 bg-accent-600 hover:bg-accent-500 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl shadow-accent-600/20 hover:shadow-accent-600/30 inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => {
                onNavigate?.('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-4 bg-brand-900/80 hover:bg-brand-900 text-brand-200 hover:text-white border border-brand-800 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center gap-2 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>View Work</span>
            </button>
          </motion.div>

          {/* Trust Bar Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 border-t border-brand-900/80 max-w-lg"
          >
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-[11px] font-bold text-brand-400 tracking-wide">
              <span className="flex items-center gap-1.5">
                <strong className="text-white font-black text-xs">15+</strong> Reviews on Clutch
              </span>
              <span className="text-brand-800">•</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-accent-400 font-mono font-black text-xs">20M+</strong> Views Generated
              </span>
              <span className="text-brand-800">•</span>
              <span className="flex items-center gap-1.5">
                <strong className="text-purple-400 font-mono font-black text-xs">100+</strong> Happy Tech Founders
              </span>
            </div>
          </motion.div>
        </div>

        {/* Premium iPad Pro Style Showcase Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative mt-8 lg:mt-0 lg:-ml-8"
        >
          {/* Outer iPad Device Frame - Silver Finish */}
          <div className="relative rounded-[2rem] bg-gradient-to-br from-[#f4f4f5] via-[#e4e4e7] to-[#d4d4d8] border border-[#ffffff] p-[5px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.8)] transform rotate-[-1.5deg] hover:rotate-0 hover:scale-[1.05] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-10 w-full ml-0 sm:w-[110%] sm:ml-[-5%] lg:w-[115%] lg:ml-[-10%]">

            {/* Inner Screen Surface */}
            <div 
              className="relative rounded-[1.8rem] overflow-hidden bg-black ring-1 ring-black/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] group aspect-[4/3] sm:aspect-video w-full flex flex-col justify-center"
              style={{ transform: 'translateZ(0)', borderRadius: '1.8rem', overflow: 'hidden', isolation: 'isolate' }}
            >

              {/* Core Playable Surface */}
              <div 
                className="relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden rounded-[1.8rem]" 
                style={{ transform: 'translateZ(0)', borderRadius: '1.8rem', overflow: 'hidden' }}
                onClick={(e) => {
                  if (!isPlaying) {
                    const vid = e.currentTarget.querySelector('video');
                    if (vid) {
                      if (vid.paused) {
                        vid.play().catch(() => {});
                      } else {
                        vid.pause();
                      }
                    }
                  }
                }}
              >
                {!isPlaying ? (
                  <>
                    <video 
                      src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4" 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.03] origin-center rounded-[1.8rem]"
                      style={{ borderRadius: '1.8rem' }}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 rounded-[1.8rem] pointer-events-none" />

                    {/* Floating Overlay Volume and Maximize Controls */}
                    <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const vid = e.currentTarget.closest('.group')?.querySelector('video');
                          if (vid) {
                            vid.muted = !vid.muted;
                            setIsMuted(vid.muted);
                          }
                        }}
                        className="w-9 h-9 rounded-full bg-brand-950/80 hover:bg-brand-900 text-white flex items-center justify-center backdrop-blur-md border border-brand-800/80 transition-all shadow-xl hover:scale-110 cursor-pointer"
                        title={isMuted ? "Unmute Audio" : "Mute Audio"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-brand-400" /> : <Volume2 className="w-4 h-4 text-accent-400" />}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const vid = e.currentTarget.closest('.group')?.querySelector('video');
                          if (vid) {
                            if (vid.requestFullscreen) {
                              vid.requestFullscreen();
                            } else if ((vid as any).webkitRequestFullscreen) {
                              (vid as any).webkitRequestFullscreen();
                            }
                          }
                        }}
                        className="w-9 h-9 rounded-full bg-brand-950/80 hover:bg-brand-900 text-white flex items-center justify-center backdrop-blur-md border border-brand-800/80 transition-all shadow-xl hover:scale-110 cursor-pointer"
                        title="View Fullscreen"
                      >
                        <Maximize className="w-4 h-4 text-brand-300" />
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe 
                    src="https://player.vimeo.com/video/1188341632?autoplay=1&title=0&byline=0&portrait=0" 
                    className="w-full h-full absolute inset-0 z-20 rounded-[1.8rem]"
                    style={{ borderRadius: '1.8rem' }}
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                )}
              </div>
            </div>
            
            {/* Volume/Power Buttons simulation on edge (Silver) */}
            <div className="absolute -left-1 top-24 w-1 h-12 bg-gradient-to-r from-[#d4d4d8] to-[#e4e4e7] rounded-l-md border-y border-l border-black/10 shadow-sm" />
            <div className="absolute -left-1 top-40 w-1 h-12 bg-gradient-to-r from-[#d4d4d8] to-[#e4e4e7] rounded-l-md border-y border-l border-black/10 shadow-sm" />
            <div className="absolute -top-1 right-20 w-12 h-1 bg-gradient-to-b from-[#d4d4d8] to-[#e4e4e7] rounded-t-md border-x border-t border-black/10 shadow-sm" />
          </div>
          
          {/* Ambient device glow underneath */}
          <div className="absolute inset-0 bg-accent-500/20 blur-[120px] -z-10 rounded-full transform scale-110 translate-y-10 mix-blend-screen" />
        </motion.div>
      </div>
    </section>
  );
}
