import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);
  };

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-5xl md:text-[78px] font-bold tracking-[-0.05em] text-brand-950 leading-[0.95] mb-8 max-w-[700px] text-balance"
        >
          We help founders launch, grow and scale through premium motion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-lg text-[#555] max-w-[400px] leading-relaxed mb-10 text-balance"
        >
          The secret weapon for SaaS & AI products that need to stand out, convert faster, and command higher prices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-10 py-[15px] bg-black text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-[#333]"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
             href="#work"
             className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-10 py-[15px] bg-transparent text-black border border-black text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white"
          >
            Our Work
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="mt-20 md:mt-32 w-full h-[400px] md:h-[600px] bg-[#eee] rounded-none border border-black/10 overflow-hidden relative group cursor-pointer"
        onClick={!isPlaying ? handlePlay : undefined}
      >
        {!isPlaying && (
          <>
            <video 
               src="https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               autoPlay
               muted
               loop
               playsInline
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-20 h-20 bg-transparent backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors font-black text-xs uppercase tracking-widest px-4 border border-white hover:bg-white hover:text-black">
                  PLAY
               </div>
            </div>
          </>
        )}

        {isPlaying && (
          <video 
            ref={videoRef}
            src="https://cdn.dribbble.com/userupload/45386937/file/8fb3e71d1b126578e76e97bcf4664110.mp4"
            className="w-full h-full object-cover"
            controls
            playsInline
          />
        )}
      </motion.div>
    </section>
  );
}
