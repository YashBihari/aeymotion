import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface PortfolioScreenProps {
  onNavigate: (screen: 'home' | 'pricing' | 'services' | 'portfolio') => void;
}

const allProjects = [
  {
    id: 1,
    title: "SAAS ARCHITECTURE",
    category: "Cloud Infrastructure",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    url: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 2,
    title: "VECTOR INTELLIGENCE",
    category: "AI SaaS",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    url: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 3,
    title: "SENA TELEMETRY",
    category: "Data Analytics",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
    url: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 4,
    title: "LINEAR WORKFLOW",
    category: "Productivity",
    thumb: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
    url: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 5,
    title: "ENTERPRISE DEPLOY",
    category: "DevOps",
    thumb: "https://cdn.dribbble.com/userupload/43619511/file/large-938622a32742933e77e09719344a7bea.mp4",
    url: "https://cdn.dribbble.com/userupload/43619511/file/large-938622a32742933e77e09719344a7bea.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 6,
    title: "KINETIC ENGINE",
    category: "Motion System",
    thumb: "https://cdn.dribbble.com/userupload/43646066/file/large-9f2cff202ae343e108dc8657bfa18b9d.mp4",
    url: "https://cdn.dribbble.com/userupload/43646066/file/large-9f2cff202ae343e108dc8657bfa18b9d.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 7,
    title: "PIPELINE AUTOMATION",
    category: "SaaS Marketing",
    thumb: "https://cdn.dribbble.com/userupload/43870210/file/large-503c072570ddc81ec6d0b7087766c851.mp4",
    url: "https://cdn.dribbble.com/userupload/43870210/file/large-503c072570ddc81ec6d0b7087766c851.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 8,
    title: "FINANCIAL DASHBOARD",
    category: "Fintech Motion",
    thumb: "https://cdn.dribbble.com/userupload/44054803/file/large-252464ae78fcce4719aee501effb490a.mp4",
    url: "https://cdn.dribbble.com/userupload/44054803/file/large-252464ae78fcce4719aee501effb490a.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 9,
    title: "SYNTHESIS PROTOCOL",
    category: "Deep Tech",
    thumb: "https://cdn.dribbble.com/userupload/44062108/file/large-ee15bcf32cfbde089536c3a7b8b722b3.mp4",
    url: "https://cdn.dribbble.com/userupload/44062108/file/large-ee15bcf32cfbde089536c3a7b8b722b3.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 10,
    title: "WEB3 IDENTITY",
    category: "Blockchain",
    thumb: "https://cdn.dribbble.com/userupload/44077477/file/large-fe08200f0d62061b8f291a651d0903d2.mp4",
    url: "https://cdn.dribbble.com/userupload/44077477/file/large-fe08200f0d62061b8f291a651d0903d2.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 11,
    title: "NEURAL NETWORK",
    category: "AI Visualization",
    thumb: "https://cdn.dribbble.com/userupload/44517962/file/large-02e11ec93fbb34f47abc7084dcd15718.mp4",
    url: "https://cdn.dribbble.com/userupload/44517962/file/large-02e11ec93fbb34f47abc7084dcd15718.mp4",
    isVideoThumb: true,
    isExternal: false
  },
  {
    id: 12,
    title: "QUANTUM COMPUTE",
    category: "Enterprise System",
    thumb: "https://cdn.dribbble.com/userupload/44706513/file/large-2826c1b306a35127c8863cfc54cba8ff.mp4",
    url: "https://cdn.dribbble.com/userupload/44706513/file/large-2826c1b306a35127c8863cfc54cba8ff.mp4",
    isVideoThumb: true,
    isExternal: false
  }
];

export default function PortfolioScreen({ onNavigate }: PortfolioScreenProps) {
  const [modalVideo, setModalVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto relative z-10 animate-fade-in">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-500/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Header and Back navigation */}
      <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-brand-900/60">
        <div>
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-white transition-colors cursor-pointer group bg-brand-950/80 px-4 py-2 rounded-xl border border-brand-800/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-accent-400" />
            <span>Back to Homepage</span>
          </button>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight uppercase"
          >
            Creative <br />
            <span className="text-gradient-accent">Storytelling Experts.</span>
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xs"
        >
          <p className="text-sm text-brand-300 font-medium leading-relaxed">
            Explore a private vault of high-converting SaaS and AI visual systems. We don't just make things look pretty—we engineer undeniable visual proof that commands attention, bypasses cognitive friction, and forces enterprise buyers to say yes.
          </p>
        </motion.div>
      </div>

      {/* Masonry / Grid Portfolio Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
            className="group cursor-pointer relative"
            onClick={() => {
              if (project.isExternal) {
                window.open(project.url, "_blank");
              } else {
                setModalVideo({ url: project.url, title: project.title });
              }
            }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-900 border border-brand-800/50 shadow-2xl">
              {project.isVideoThumb ? (
                <video
                  src={project.thumb}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <img
                  src={project.thumb}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 z-20">
                <div className="w-16 h-16 rounded-full bg-accent-600/90 backdrop-blur-sm flex items-center justify-center text-white shadow-2xl shadow-accent-600/50">
                  {project.isExternal ? (
                    <ArrowUpRight className="w-6 h-6 ml-1 text-white" />
                  ) : (
                    <Play className="w-6 h-6 ml-1 fill-white" />
                  )}
                </div>
              </div>

              {/* Text overlays */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] font-black uppercase tracking-widest text-accent-400 mb-2 font-mono flex items-center justify-between">
                  <span>{project.category}</span>
                  {project.isExternal && <span className="bg-brand-900/80 px-2 py-0.5 rounded text-[8px] text-brand-300">DRIBBBLE</span>}
                </div>
                <h3 className="text-xl font-black text-white tracking-tight uppercase leading-none">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Premium Dribbble Vault Cross-Link Strip */}
      <div className="mt-16 flex items-center justify-center animate-fade-in">
        <a 
          href="https://dribbble.com/aeymotion" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-brand-950/90 hover:bg-brand-900 border border-brand-800/80 hover:border-[#EA4C89]/60 text-xs font-bold tracking-wide text-brand-300 hover:text-white transition-all duration-300 group shadow-xl hover:shadow-[#EA4C89]/15 cursor-pointer backdrop-blur-md"
        >
          <span className="text-brand-400 font-mono text-[11px] uppercase tracking-wider">check out dribble platform:</span>
          {/* Real Solid Full-Color Dribbble Vector */}
          <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#EA4C89" />
            <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M5.5 8C8.5 8.5 12 8 14.5 5.5" fill="none" />
            <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M3.5 13C7 12 11.5 12.5 15.5 16" fill="none" />
            <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M11 21.5C13 18 16.5 13.5 21 11.5" fill="none" />
          </svg>
          <span className="text-[#EA4C89] font-black underline group-hover:no-underline">Aeymotion Portfolio</span>
        </a>
      </div>

      {/* Video Modal overlay */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-950/95 backdrop-blur-xl"
          >
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setModalVideo(null)}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-brand-800"
            >
              <button
                onClick={() => setModalVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-900/80 hover:bg-accent-600 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-brand-700/50"
              >
                <X className="w-5 h-5" />
              </button>
              
              <iframe
                src={modalVideo.url}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </motion.div>
            
            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
              <p className="text-white font-black tracking-widest uppercase text-sm">{modalVideo.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
