import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface FlashOfferStickyProps {
  onNavigate?: (screen: 'home' | 'pricing') => void;
}

export default function FlashOfferSticky({ onNavigate }: FlashOfferStickyProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 cursor-pointer group selection:bg-transparent select-none max-w-[calc(100vw-2rem)]"
        onClick={() => {
          window.location.hash = '#sprints';
          onNavigate?.('pricing');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="relative flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 border border-brand-800/80 hover:border-accent-500/60 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_30px_rgba(234,67,53,0.2)] transition-all duration-300 backdrop-blur-xl">
          {/* Subtle glowing animated accent badge */}
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-500/10 border border-accent-500/20 shrink-0 group-hover:scale-110 transition-transform">
            <Sparkles className="w-3 h-3 text-accent-400" />
          </div>
          
          <span className="text-xs sm:text-sm font-medium tracking-tight text-brand-200 group-hover:text-white transition-colors pr-2">
            Selectively partnering with <strong className="text-gradient-accent font-black">AI & SaaS</strong> brands each month
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="w-5 h-5 bg-brand-900/60 hover:bg-black text-brand-400 hover:text-white rounded-full flex items-center justify-center text-[9px] border border-brand-800/60 transition-colors shrink-0 ml-0.5"
            title="Dismiss notification"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
