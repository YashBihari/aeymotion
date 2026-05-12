import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface FlashOfferStickyProps {
  onNavigate?: (screen: 'home' | 'pricing') => void;
}

export default function FlashOfferSticky({ onNavigate }: FlashOfferStickyProps) {
  const [isVisible, setIsVisible] = useState(true);
  const getTargetTime = () => {
    const today = new Date();
    const start = new Date(today);
    start.setHours(7, 0, 0, 0);
    const end = new Date(start);
    end.setHours(end.getHours() + 72);
    const difference = end.getTime() - today.getTime();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor((difference % (1000 * 60 * 60 * 24 * 100)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTargetTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTargetTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.04, 1], 
          y: [0, -6, 0] 
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer group selection:bg-transparent select-none"
        onClick={() => {
          // Instantly open Pricing page with Flash Sprints tab pre-selected
          window.location.hash = '#sprints';
          onNavigate?.('pricing');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="relative flex flex-col items-center">
          
          {/* External ambient pulse ring */}
          <div className="absolute inset-0 rounded-full bg-red-600/30 animate-ping blur-sm pointer-events-none duration-1000" />

          {/* Stopwatch Top Clicker Stem */}
          <div className="w-4 h-2.5 bg-gradient-to-b from-red-400 to-red-600 rounded-t-sm border-t border-x border-red-300 mx-auto -mb-0.5 relative z-10 shadow-md group-hover:brightness-125 transition-all" />
          
          {/* Stopwatch Angled Pushers */}
          <div className="absolute top-0 right-5 w-2 h-1.5 bg-red-700 rotate-45 rounded-sm" />
          <div className="absolute top-0 left-5 w-2 h-1.5 bg-red-700 -rotate-45 rounded-sm" />

          {/* Main Red Circle Stopwatch Body */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-red-600 via-red-500 to-accent-700 border-2 border-red-400 shadow-[0_0_35px_rgba(234,67,53,0.8)] flex flex-col items-center justify-center p-2 text-center relative overflow-hidden group-hover:border-white transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(234,67,53,1)]">
            
            {/* Inner embedded tactical target ring */}
            <div className="absolute inset-1 rounded-full border border-red-300/30 pointer-events-none" />
            
            {/* Glossy top curved glass reflection */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/20 rounded-full blur-[0.5px] pointer-events-none" />

            {/* SPRINT Header Label */}
            <span className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase drop-shadow-md block leading-none mb-1 mt-1">
              ⚡ SPRINT
            </span>
            
            {/* Digital Centerpiece Ticker Screen */}
            <div className="bg-brand-950/95 px-2 py-1 rounded-lg border border-red-500/60 shadow-inner my-1 w-11/12 relative group-hover:border-accent-400 transition-colors">
              <span className="text-xs sm:text-sm font-mono font-black text-white tracking-tighter block leading-tight">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[7px] text-red-400 uppercase tracking-widest block font-extrabold leading-none mt-0.5">
                Time Left
              </span>
            </div>

            {/* Bottom Alert Urgency Copy */}
            <span className="text-[9px] font-black text-amber-300 uppercase tracking-wider block mt-0.5 animate-pulse leading-none">
              Ending Soon
            </span>
            <span className="text-[7px] text-white/90 font-bold uppercase tracking-tight block scale-95 group-hover:scale-105 transition-transform mt-0.5">
              Click to Book
            </span>
          </div>

          {/* Underlay Floating Scarcity Badge */}
          <div className="absolute -bottom-2 bg-brand-950 text-white text-[8px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full border border-red-500 shadow-xl pointer-events-none group-hover:scale-110 transition-transform duration-300">
            2 Seats Left
          </div>

          {/* Minimalist Close helper dot */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="absolute top-1 right-1 w-4 h-4 bg-brand-950 hover:bg-black text-brand-400 hover:text-white rounded-full flex items-center justify-center text-[8px] border border-brand-800 transition-colors"
            title="Dismiss widget"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


