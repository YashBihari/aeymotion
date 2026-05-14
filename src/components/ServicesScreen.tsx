import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2, X } from 'lucide-react';

interface ServicesScreenProps {
  onNavigate: (screen: 'home' | 'pricing' | 'services') => void;
}

const servicesData = {
    "What we offer": [
      {
        title: "Explainer Videos",
        desc: "Clear, engaging animated videos that easily explain your SaaS product to new visitors.",
        bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
        tag: "High Conversion"
      },
      {
        title: "Demo Videos",
        desc: "Stunning product walkthroughs that showcase core features and drive immediate trial signups.",
        bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
        tag: "Sales Ready"
      },
      {
        title: "Tech & Concepts",
        desc: "Beautiful 3D and motion graphics that visualize complex data, integrations, and deep workflows.",
        bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
        tag: "Premium Visuals"
      },
      {
        title: "Product Videos",
        desc: "Polished dashboard animations designed specifically for feature updates and product launches.",
        bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
        tag: "Engaging"
      },
      {
        title: "Mobile App Promos",
        desc: "High-impact preview cuts optimized for social ad platforms to lower acquisition costs.",
        bg: "https://player.vimeo.com/video/1188341331?autoplay=1&background=1",
        tag: "Social Ad Cuts"
      }
    ],
  "Use Cases": [
    {
      title: "Marketing Campaigns",
      desc: "Eye-catching videos crafted specifically for paid advertisements to stop the scroll.",
      bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
      tag: "Paid Traffic"
    },
    {
      title: "Sales Enablement",
      desc: "High-conviction standalone materials tailored to accelerate deals in outbound cadences.",
      bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777697757/Stake_hiup0g.mp4",
      tag: "Outbound Deals"
    },
    {
      title: "Social Media Content",
      desc: "Short, punchy video snippets optimized for seamless viewing on mobile feeds.",
      bg: "/ai_dashboard.png",
      tag: "Viral Reach"
    },
    {
      title: "Website Hero Loops",
      desc: "Premium, silent background animations that instantly elevate your homepage aesthetic.",
      bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777698076/shot3_pmsgsm.mp4",
      tag: "Website Asset"
    },
    {
      title: "Customer Onboarding",
      desc: "Friendly step-by-step videos that help new users master your application quickly.",
      bg: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530259/hostinger_one_ojzsjv.mp4",
      tag: "Retention"
    }
  ],
  "By Role": [
    {
      title: "Founders & Leadership",
      desc: "Establish industry credibility with top-tier brand videos designed for investor confidence.",
      bg: "/web3_blockchain.png",
      tag: "Authority"
    },
    {
      title: "Product Marketing",
      desc: "Translate ongoing features into clear, high-retention video stories for your base.",
      bg: "https://player.vimeo.com/video/1188341632?autoplay=1&background=1",
      tag: "Product Ready"
    },
    {
      title: "Growth & Performance",
      desc: "Receive flexible video sets optimized for relentless testing and optimal returns.",
      bg: "/fintech_app.png",
      tag: "ROI Focused"
    }
  ],
  "Industries": [
    {
      title: "SaaS & Software",
      desc: "Simplify interface complexity into clean, beautiful product demo stories.",
      bg: "https://player.vimeo.com/video/1188342313?autoplay=1&background=1",
      tag: "SaaS Custom"
    },
    {
      title: "AI & Machine Learning",
      desc: "Make internal automated logic simple and visually breathtaking for real clients.",
      bg: "/cinematic_saas_dashboard.png",
      tag: "AI Focused"
    },
    {
      title: "Fintech & Payments",
      desc: "Illustrate advanced transaction reliability with ultra-smooth graphic journeys.",
      bg: "https://player.vimeo.com/video/1188341331?autoplay=1&background=1",
      tag: "Trust Standard"
    },
    {
      title: "Web 3.0 & Digital Assets",
      desc: "Map secure user actions and digital ownership parameters with modern style.",
      bg: "/cinematic_tech_concepts.png",
      tag: "Web 3.0 Sleek"
    }
  ]
};

type CategoryKey = keyof typeof servicesData;

export default function ServicesScreen({ onNavigate }: ServicesScreenProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("What we offer");
  const [selectedService, setSelectedService] = useState<{ title: string; desc: string; tag: string; bg: string } | null>(null);

  const categories: CategoryKey[] = ["What we offer", "Use Cases", "By Role", "Industries"];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 animate-fade-in">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-accent-500/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Control row back switch */}
      <div className="mb-10 pb-4 border-b border-brand-900/60">
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-white transition-colors cursor-pointer group bg-brand-950/80 px-4 py-2 rounded-xl border border-brand-800/80"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-accent-400" />
          <span>Back to Homepage</span>
        </button>
      </div>

      {/* Screen Title */}
      <div className="mb-14 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 leading-tight"
        >
          Our Services. <br />
          <span className="text-gradient-accent">Built to Elevate Your Brand.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm text-brand-300 leading-relaxed font-medium"
        >
          Explore our complete selection of professional video production solutions. We combine clean visual storytelling with premium motion design to help modern tech brands stand out and convert more visitors.
        </motion.p>
      </div>

      {/* Premium Dashboard Layout Grid */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-brand-800/80 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Sidebar Category Selection */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-2.5 lg:border-r border-brand-800/60 lg:pr-6 pb-4 lg:pb-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full px-5 py-4 rounded-2xl text-left font-black transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20 translate-x-1'
                      : 'bg-brand-950/60 text-brand-400 hover:text-white hover:bg-brand-900/40 border border-brand-800/40'
                  }`}
                >
                  <span className="text-xs tracking-wide">{cat}</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-45 text-white' : 'text-brand-600 group-hover:text-brand-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Viewport Showcase Cards */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {servicesData[activeCategory].map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                    onClick={() => setSelectedService({ title: service.title, desc: service.desc, tag: service.tag, bg: service.bg })}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-950 border border-brand-800/60 flex flex-col justify-end p-5 group hover:border-accent-400 transition-all duration-500 cursor-pointer shadow-lg"
                  >
                    {/* Cinematic Media Cover (Dynamic Video/Image) */}
                    {service.bg.includes('vimeo.com') ? (
                      <iframe
                        src={service.bg}
                        className="absolute inset-0 w-full h-[150%] -top-[25%] pointer-events-none opacity-65 group-hover:opacity-90 transition-opacity duration-700"
                        allow="autoplay; fullscreen; picture-in-picture"
                      />
                    ) : service.bg.includes('.mp4') ? (
                      <video
                        src={service.bg}
                        className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img 
                        src={service.bg} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                    {/* Tag ribbon indicator */}
                    <div className="absolute top-3 left-3 bg-brand-950/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-brand-800/80 text-[8px] font-mono text-accent-400 font-bold uppercase tracking-wider z-10">
                      {service.tag}
                    </div>

                    {/* Subtle directional arrow at bottom right */}
                    <div className="absolute bottom-3 right-3 text-brand-600 group-hover:text-accent-400 transition-colors duration-300 z-10">
                      <span className="text-sm font-black font-mono">↘</span>
                    </div>

                    {/* Content text layout */}
                    <div className="relative z-10 pr-6">
                      <h3 className="text-sm sm:text-base font-black text-white tracking-tight group-hover:text-accent-300 transition-colors mb-1">
                        {service.title}
                      </h3>
                      <p className="text-[10px] text-brand-300 leading-snug line-clamp-2 font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Global Bottom Actions row */}
      <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => {
            onNavigate('pricing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-4 rounded-xl bg-accent-600 hover:bg-accent-500 text-white text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-accent-600/20 cursor-pointer"
        >
          View Plans & Pricing
        </button>
        <button
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              setTimeout(() => {
                const input = document.getElementById('contact-name-input') as HTMLInputElement;
                if (input) input.focus();
              }, 500);
            }
          }}
          className="px-8 py-4 rounded-xl bg-brand-900/60 hover:bg-brand-900 text-brand-300 hover:text-white border border-brand-800 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
        >
          Get in Touch
        </button>
      </div>

      {/* Detail Breakdown View Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/90 backdrop-blur-xl animate-fade-in">
          <div className="w-full max-w-lg glass-panel rounded-3xl overflow-hidden border border-brand-800/80 shadow-2xl relative flex flex-col">
            {/* Header image banner matching the active service cover */}
            <div className="relative h-32 w-full overflow-hidden bg-brand-950">
              <img src={selectedService.bg} alt={selectedService.title} className="w-full h-full object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-brand-950/80 hover:bg-brand-900 text-brand-400 hover:text-white transition-colors cursor-pointer border border-brand-800 z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-6">
                <span className="text-[9px] font-bold text-accent-400 uppercase tracking-wide px-2 py-0.5 rounded bg-brand-950/80 border border-brand-800 backdrop-blur-sm">
                  {selectedService.tag}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-4">
              <h3 className="text-xl font-black text-white tracking-tight mb-2">
                {selectedService.title}
              </h3>
              
              <p className="text-xs text-brand-300 leading-relaxed font-medium mb-6">
                {selectedService.desc}
              </p>

              <div className="space-y-2.5 mb-8 pt-4 border-t border-brand-900/60">
                <div className="flex items-center gap-2.5 text-xs text-brand-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Delivered swiftly within standard project schedules</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes regular alignment and styling reviews</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fully cleared global commercial use licenses</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        const input = document.getElementById('contact-name-input') as HTMLInputElement;
                        if (input) input.focus();
                      }, 500);
                    }
                  }, 100);
                }}
                className="w-full py-4 rounded-xl bg-accent-600 hover:bg-accent-500 text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
