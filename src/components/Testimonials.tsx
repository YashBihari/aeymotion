import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles, Quote, ChevronLeft, ChevronRight, Play, Volume2, VolumeX, Maximize } from 'lucide-react';

const testimonialCards = [
  {
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    quote: "Aeymotion completely re-architected our core narrative. Our conversion bottlenecks dissolved within 3 days of deploying the new video framework."
  },
  {
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    quote: "The pre-verbal approach works exactly as advertised. Stakeholders stopped asking redundant basic setup questions and moved straight to deal-closing logic."
  },
  {
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
    quote: "Traditional production studios quoted us months. Aeymotion delivered a stunning cinematic pipeline flow in exactly 72 hours. Absolute engineering rigor."
  },
  {
    video: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
    quote: "We use their showreel cutdowns across every paid funnel layer. CAC dropped by 42% while demo request volume hit an all-time high."
  }
];

function TestimonialCard({ card, idx }: { card: typeof testimonialCards[0], idx: number }) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="relative rounded-[2rem] overflow-hidden group border border-white/5 hover:border-accent-500/30 transition-all duration-700 shadow-2xl hover:shadow-accent-500/10 cursor-pointer"
      onMouseEnter={(e) => {
        const vid = e.currentTarget.querySelector('video');
        if (vid) vid.play().catch(() => {});
      }}
      onMouseLeave={(e) => {
        const vid = e.currentTarget.querySelector('video');
        if (vid) vid.pause();
      }}
    >
      {/* Immersive Video Background */}
      <div className="aspect-[4/5] sm:aspect-square w-full bg-brand-950 overflow-hidden relative">
        <video 
          src={card.video}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          muted
          loop
          playsInline
        />
        
        {/* Cinematic Shadow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/40 to-transparent opacity-50 pointer-events-none" />

        {/* Floating Overlay Volume and Maximize Controls */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

        {/* Testimonial Quote Footer (Overlaid) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end z-20 pointer-events-none">
          <div className="relative">
            <Quote className="w-10 h-10 text-white/10 absolute -top-4 -left-3 -z-10" />
            <p className="text-sm sm:text-base font-medium text-white leading-relaxed text-balance drop-shadow-md">
              "{card.quote}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialCards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialCards.length) % testimonialCards.length);
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-brand-900/60">
      {/* Dynamic ambient highlight aura */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Title Layout */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
        >
          Don't take our word for it. <br />
          <span className="text-gradient-accent">Listen to our clients.</span>
        </motion.h2>
      </div>

      {/* Structured Video Testimonials Grid Framework */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {testimonialCards.map((card, idx) => (
          <TestimonialCard key={idx} card={card} idx={idx} />
        ))}
      </div>
    </section>
  );
}
