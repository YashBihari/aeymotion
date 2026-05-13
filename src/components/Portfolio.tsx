import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Layers, Film, Play, X } from 'lucide-react';
import { useState } from 'react';

export const caseStudies = [
  {
    client: "ClickUp – SaaS Marketing Video",
    title: "HOSTINGER ARCHITECTURE DEPLOY",
    category: "Explainer Videos",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    videoUrl: "https://player.vimeo.com/video/1188341331?autoplay=1&title=0&byline=0&portrait=0",
    challenge: "Complex hosting options triggered extreme evaluation fatigue.",
    roi: "+24.8% Accelerated client checkout retention rate.",
    color: "from-blue-500/20"
  },
  {
    client: "Vector AI – Deep Spatial Engine",
    title: "VECTOR INTELLIGENCE SYSTEMS",
    category: "3D Walkthroughs",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    videoUrl: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
    challenge: "Abstract neural layers dropped LP evaluation attention.",
    roi: "$12M Capital closed with LP engagement amplified by 3.2x.",
    color: "from-accent-500/20"
  },
  {
    client: "SenaMatrix – Kinetic Pipelines",
    title: "SENA TELEMETRY MATRICES",
    category: "AI Ads",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
    videoUrl: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
    challenge: "High Day-1 user abandonment caused by dense dashboards.",
    roi: "38% Abandonment reduction with support logs halved.",
    color: "from-emerald-500/20"
  },
  {
    client: "Linear – Workflow Architecture",
    title: "LINEAR ONBOARDING ENGINE",
    category: "Social Content",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
    videoUrl: "https://player.vimeo.com/video/1188341632?autoplay=1&title=0&byline=0&portrait=0",
    challenge: "Generic agency style visual reels missed core technical clarity.",
    roi: "2.8x Audience pipeline ingestion rate achieved post launch.",
    color: "from-purple-500/20"
  },
  {
    client: "Supabase – Database Acceleration",
    title: "SUPABASE KINETIC SPEC",
    category: "Explainer Videos",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    videoUrl: "https://player.vimeo.com/video/1188341331?autoplay=1&title=0&byline=0&portrait=0",
    challenge: "Complex database query mechanics required intuitive translation.",
    roi: "4.5x Developer demo completion rates recorded in production.",
    color: "from-amber-500/20"
  },
  {
    client: "Vercel – Flow Optimization",
    title: "VERCEL PIPELINE FLOW",
    category: "3D Walkthroughs",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    videoUrl: "https://player.vimeo.com/video/1188342313?autoplay=1&title=0&byline=0&portrait=0",
    challenge: "Monorepo build steps lacked visual narrative excitement.",
    roi: "+55% Clickthrough conversion spike verified during preview events.",
    color: "from-indigo-500/20"
  }
];

const filterPills = ["All", "Explainer Videos", "3D Walkthroughs", "AI Ads", "Social Content"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [modalVideo, setModalVideo] = useState<{ client: string; url: string; title: string; roi: string } | null>(null);

  const filteredStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(s => s.category === activeFilter);

  return (
    <section id="work" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header section matching inspired architecture */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
        >
          Creative Storytelling <span className="text-gradient-accent">Experts.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm text-brand-400 max-w-xl mx-auto leading-relaxed"
        >
          From explainer videos to high-converting product demos, see how we bring SaaS innovation to life.
        </motion.p>

        {/* Interactive Filters row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filterPills.map((pill) => (
            <button
              key={pill}
              onClick={() => setActiveFilter(pill)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === pill
                  ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20 font-black'
                  : 'bg-brand-900/60 text-brand-400 hover:text-white border border-brand-800/80'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Grid Framework */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredStudies.map((study, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass-panel rounded-3xl overflow-hidden border border-brand-800/80 flex flex-col justify-between group hover:border-accent-500/60 transition-all duration-500 shadow-xl relative"
          >
            {/* Top Preview Card Viewport */}
            <div 
              className="relative aspect-video w-full bg-brand-950 overflow-hidden cursor-pointer"
              onClick={() => setModalVideo({ client: study.client, url: study.videoUrl, title: study.title, roi: study.roi })}
              onMouseEnter={(e) => {
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.pause();
              }}
            >
              <video 
                src={study.thumb} 
                className="w-full h-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Category indicator pill */}
              <div className="absolute top-3 left-3 bg-brand-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-800/60 text-[9px] font-mono font-bold text-accent-400 uppercase tracking-wider z-10">
                {study.category}
              </div>
            </div>

            {/* Bottom Project Specs */}
            <div className="p-6 flex flex-col justify-between grow bg-brand-950/40">
              <div>
                <span className="text-[10px] font-mono text-brand-500 uppercase tracking-widest block mb-1">
                  {study.title}
                </span>
                <h3 className="text-sm font-black text-white tracking-tight group-hover:text-accent-400 transition-colors mb-4">
                  {study.client}
                </h3>
              </div>

              {/* Impact Callout */}
              <div className="pt-4 border-t border-brand-900/80 flex items-start gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-accent-400 shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-brand-300 leading-snug">
                  {study.roi}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Button & Dribbble Link Row */}
      <div className="text-center">
        <button
          onClick={() => setActiveFilter("All")}
          className="px-8 py-4 rounded-xl bg-brand-900/60 hover:bg-brand-900 text-brand-300 hover:text-white border border-brand-800 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer inline-flex items-center gap-2 group mb-8"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Premium Dribbble Vault Cross-Link Strip */}
        <div className="flex items-center justify-center mt-2">
          <a 
            href="https://dribbble.com/aeymotion" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-brand-950/40 hover:bg-brand-900/40 border border-brand-800/40 hover:border-[#EA4C89]/40 transition-all duration-500 ease-out cursor-pointer overflow-hidden backdrop-blur-md shadow-lg hover:shadow-[#EA4C89]/10"
          >
            {/* Absolute soft interactive top border light */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#EA4C89]/40 group-hover:via-[#EA4C89] to-transparent transition-all duration-500" />
            
            <span className="text-brand-400 group-hover:text-brand-300 font-mono text-[11px] uppercase tracking-wider transition-colors">
              check out dribble platform:
            </span>
            
            {/* Real Solid Full-Color Dribbble Vector */}
            <svg className="w-6 h-6 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#EA4C89" />
              <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M5.5 8C8.5 8.5 12 8 14.5 5.5" fill="none" />
              <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M3.5 13C7 12 11.5 12.5 15.5 16" fill="none" />
              <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M11 21.5C13 18 16.5 13.5 21 11.5" fill="none" />
            </svg>
            
            <span className="text-[#EA4C89] font-black tracking-tight group-hover:translate-x-0.5 transition-transform duration-500 inline-flex items-center gap-1">
              <span>Aeymotion Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
            </span>
          </a>
        </div>
      </div>

      {/* Global Interactive Showreel/Video Modal pop-up window */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/90 backdrop-blur-2xl animate-fade-in">
          <div className="w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-brand-800/80 shadow-2xl relative">
            {/* Modal header bar */}
            <div className="px-6 py-4 bg-brand-950 border-b border-brand-800/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-accent-400 uppercase tracking-widest block">
                  {modalVideo.title}
                </span>
                <h4 className="text-sm font-black text-white tracking-tight">
                  {modalVideo.client}
                </h4>
              </div>
              <button
                onClick={() => setModalVideo(null)}
                className="p-2 rounded-xl bg-brand-900/80 hover:bg-brand-800 text-brand-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal playable asset screen */}
            <div className="relative aspect-video w-full bg-black">
              <iframe 
                src={modalVideo.url}
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Modal telemetry ROI stripe */}
            <div className="px-6 py-3.5 bg-accent-600/10 border-t border-accent-500/20 flex items-center justify-between text-xs font-bold">
              <span className="text-accent-400 uppercase tracking-wider font-mono text-[10px]">Confirmed System ROI Vector</span>
              <span className="text-white font-black">{modalVideo.roi}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
