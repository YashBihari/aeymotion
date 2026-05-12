import { motion } from 'motion/react';
import { CheckCircle2, HelpCircle, ArrowRight, ArrowLeft, Zap, Sparkles, Flame, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const packages = [
  {
    tier: "Tier 1: The Essential",
    subtitle: "Pitch & Stakeholder Appeal",
    price: "$865",
    originalPrice: "$1,200",
    description: "Elevate your startup’s pitch and captivate stakeholders. A focused, high-impact video suite designed to build immediate trust and drive early momentum.",
    features: [
      { name: "Premium Explainer Video", detail: "Tell your brand's story with crystal-clear messaging." },
      { name: "Comprehensive Product Demo", detail: "A deep dive to showcase your core features and technical capabilities." },
      { name: "Omnichannel Assets", detail: "Platform-optimized cutdowns and resizes ready for social media." },
      { name: "Strategic Distribution Playbook", detail: "A step-by-step, actionable guide on how to deploy your videos to maximize measurable ROI." }
    ],
    cta: "Initiate Essential Suite",
    popular: false,
    delay: 0.1
  },
  {
    tier: "Tier 2: The Professional",
    subtitle: "Core Scaling Ecosystem",
    price: "$2,400",
    originalPrice: "$3,100",
    description: "Our most sought-after solution for growing brands. A comprehensive video ecosystem engineered to showcase your product's full potential, educate your audience, and accelerate conversions.",
    features: [
      { name: "Premium Explainer Video", detail: "Tell your brand's story with crystal-clear messaging." },
      { name: "Comprehensive Product Demo", detail: "A deep dive to showcase your core features." },
      { name: "Customer Success FAQ Series", detail: "Proactive how-to videos to reduce support tickets and build user confidence." },
      { name: "Global Campaign Assets", detail: "Resized, reformatted, and fully localized cutdowns to reach diverse markets." },
      { name: "Advanced Distribution Playbook", detail: "A step-by-step, actionable guide to maximize measurable ROI." }
    ],
    cta: "Deploy Core Ecosystem",
    popular: true, // 🔥 Most Popular highlighted
    delay: 0.2
  },
  {
    tier: "Tier 3: The Elite",
    subtitle: "End-to-End Market Dominance",
    price: "$6,200",
    originalPrice: "$7,800",
    description: "The ultimate video marketing partnership. Dominate your market with an end-to-end content strategy, limitless refinements, and top-tier assets that command industry authority.",
    features: [
      { name: "Premium Explainer Video", detail: "Tell your brand's story with crystal-clear messaging." },
      { name: "Comprehensive Product Demo", detail: "A deep dive to showcase your core features." },
      { name: "Customer Success FAQ Series", detail: "Proactive how-to videos to reduce support tickets." },
      { name: "High-Engagement Brand Shorts", detail: "Bite-sized, scroll-stopping videos designed purely for top-of-funnel brand awareness." },
      { name: "White-Glove Guarantee", detail: "Unlimited revisions and revision requests accepted for a full six months to ensure absolute perfection." }
    ],
    cta: "Secure Elite Partnership",
    popular: false,
    delay: 0.3
  }
];

const standaloneSprints = [
  {
    type: "72H Launch Momentum Sprint",
    bestFor: "Product Hunt, AI tools, beta launches",
    positioning: "Launch with clearer messaging and startup-ready creatives in 72 hours.",
    price: "$497–$797",
    includes: [
      "1 launch-ready ad creative",
      "2 hook variations",
      "1 short product demo clip",
      "Landing page messaging feedback",
      "CTA improvement suggestions",
      "Platform-ready export formats"
    ],
    importantLine: "Most startups lose attention because the messaging isn’t clear enough.",
    trustBuilders: "Delivered within 72h • Async workflow • No long-term contracts",
    extra: "Built to help cold users understand your product faster."
  },
  {
    type: "Creative Testing Sprint",
    bestFor: "Startups running ads, funded SaaS",
    positioning: "Test more creative angles faster with AI-powered performance assets.",
    price: "$797–$1,200",
    includes: [
      "3 ad creative variations",
      "4 hook testing angles",
      "1 AI UGC-style creative",
      "CTA & Thumbnail testing concepts",
      "Competitor creative analysis",
      "Basic ad iteration roadmap"
    ],
    importantLine: "Creative fatigue kills growth faster than most founders realize.",
    trustBuilders: "Rapid iteration • Meta/TikTok/X optimized • Built for fast-moving teams",
    extra: "Designed for startups that need faster creative testing."
  },
  {
    type: "Founder Authority Sprint",
    bestFor: "Founder-led startups, technical founders",
    positioning: "Turn founder content into stronger startup trust.",
    price: "$497–$997",
    includes: [
      "2 founder short-form clips",
      "LinkedIn/X content angles",
      "AI-enhanced talking-head edits",
      "Hook scripting suggestions",
      "Founder positioning feedback",
      "Content repurposing suggestions"
    ],
    importantLine: "Built for founders who want visibility without becoming full-time creators.",
    trustBuilders: "Founder-focused system • Async workflow • Fast delivery",
    extra: "Convert your raw thoughts into polished authority."
  }
];

const typePricingMatrix: Record<string, Record<string, { range: string; min: string; days: number; breakdown: { name: string; days: number }[] }>> = {
  "Explainer video": {
    "30s": { 
      range: "$599 - $899", min: "$599", days: 7,
      breakdown: [
        { name: "Scriptwriting", days: 1 },
        { name: "Storyboarding and Illustrations", days: 2 },
        { name: "Voiceover", days: 1 },
        { name: "Animation", days: 2 },
        { name: "Sound Design & Fast Deploy", days: 1 }
      ]
    },
    "60s": { 
      range: "$800 - $1,250", min: "$800", days: 11,
      breakdown: [
        { name: "Scriptwriting", days: 1 },
        { name: "Storyboarding and Illustrations", days: 3 },
        { name: "Voiceover", days: 1 },
        { name: "Animation", days: 4 },
        { name: "Sound Design & Fast Deploy", days: 2 }
      ]
    },
    "90s": { 
      range: "$1,200 - $1,750", min: "$1,200", days: 15,
      breakdown: [
        { name: "Scriptwriting", days: 2 },
        { name: "Storyboarding and Illustrations", days: 4 },
        { name: "Voiceover", days: 1 },
        { name: "Animation", days: 6 },
        { name: "Sound Design & Fast Deploy", days: 2 }
      ]
    },
    "180s+": { 
      range: "$2,100 - $3,400", min: "$2,100", days: 21,
      breakdown: [
        { name: "Scriptwriting", days: 2 },
        { name: "Storyboarding and Illustrations", days: 6 },
        { name: "Voiceover", days: 2 },
        { name: "Animation", days: 8 },
        { name: "Sound Design & Fast Deploy", days: 3 }
      ]
    },
  },
  "Walkthrough video": {
    "30s": { 
      range: "$499 - $750", min: "$499", days: 7,
      breakdown: [
        { name: "Scriptwriting", days: 1 },
        { name: "Storyboarding and UI Preps", days: 2 },
        { name: "Voiceover", days: 1 },
        { name: "Animation & Capture", days: 2 },
        { name: "Sound Design & Fast Deploy", days: 1 }
      ]
    },
    "60s": { 
      range: "$699 - $1,100", min: "$699", days: 11,
      breakdown: [
        { name: "Scriptwriting", days: 1 },
        { name: "Storyboarding and UI Preps", days: 3 },
        { name: "Voiceover", days: 1 },
        { name: "Animation & Capture", days: 4 },
        { name: "Sound Design & Fast Deploy", days: 2 }
      ]
    },
    "90s": { 
      range: "$999 - $1,500", min: "$999", days: 15,
      breakdown: [
        { name: "Scriptwriting", days: 2 },
        { name: "Storyboarding and UI Preps", days: 4 },
        { name: "Voiceover", days: 1 },
        { name: "Animation & Capture", days: 6 },
        { name: "Sound Design & Fast Deploy", days: 2 }
      ]
    },
    "180s+": { 
      range: "$1,650 - $2,600", min: "$1,650", days: 21,
      breakdown: [
        { name: "Scriptwriting", days: 2 },
        { name: "Storyboarding and UI Preps", days: 6 },
        { name: "Voiceover", days: 2 },
        { name: "Animation & Capture", days: 8 },
        { name: "Sound Design & Fast Deploy", days: 3 }
      ]
    },
  },
  "App video": {
    "30s": { 
      range: "$799 - $1,200", min: "$799", days: 7,
      breakdown: [
        { name: "Scriptwriting", days: 1 },
        { name: "App Visual Flows", days: 2 },
        { name: "Voiceover", days: 1 },
        { name: "3D Device Preps & Motion", days: 2 },
        { name: "Sound Design & Fast Deploy", days: 1 }
      ]
    },
    "60s": { 
      range: "$1,050 - $1,650", min: "$1,050", days: 11,
      breakdown: [
        { name: "Scriptwriting", days: 1 },
        { name: "App Visual Flows", days: 3 },
        { name: "Voiceover", days: 1 },
        { name: "3D Device Preps & Motion", days: 4 },
        { name: "Sound Design & Fast Deploy", days: 2 }
      ]
    },
    "90s": { 
      range: "$1,550 - $2,400", min: "$1,550", days: 15,
      breakdown: [
        { name: "Scriptwriting", days: 2 },
        { name: "App Visual Flows", days: 4 },
        { name: "Voiceover", days: 1 },
        { name: "3D Device Preps & Motion", days: 6 },
        { name: "Sound Design & Fast Deploy", days: 2 }
      ]
    },
    "180s+": { 
      range: "$2,600 - $4,200", min: "$2,600", days: 21,
      breakdown: [
        { name: "Scriptwriting", days: 2 },
        { name: "App Visual Flows", days: 6 },
        { name: "Voiceover", days: 2 },
        { name: "3D Device Preps & Motion", days: 8 },
        { name: "Sound Design & Fast Deploy", days: 3 }
      ]
    },
  },
  "Showreel": {
    "30s": { 
      range: "$399 - $599", min: "$399", days: 7,
      breakdown: [
        { name: "Asset Audit & Layout", days: 2 },
        { name: "Storyboarding Flows", days: 1 },
        { name: "Soundtrack Selection", days: 1 },
        { name: "Kinetic Cut & Stitch", days: 2 },
        { name: "Mastering & Fast Deploy", days: 1 }
      ]
    },
    "60s": { 
      range: "$549 - $850", min: "$549", days: 11,
      breakdown: [
        { name: "Asset Audit & Layout", days: 2 },
        { name: "Storyboarding Flows", days: 2 },
        { name: "Soundtrack Selection", days: 1 },
        { name: "Kinetic Cut & Stitch", days: 4 },
        { name: "Mastering & Fast Deploy", days: 2 }
      ]
    },
    "90s": { 
      range: "$799 - $1,150", min: "$799", days: 15,
      breakdown: [
        { name: "Asset Audit & Layout", days: 3 },
        { name: "Storyboarding Flows", days: 3 },
        { name: "Soundtrack Selection", days: 1 },
        { name: "Kinetic Cut & Stitch", days: 6 },
        { name: "Mastering & Fast Deploy", days: 2 }
      ]
    },
    "180s+": { 
      range: "$1,199 - $1,800", min: "$1,199", days: 21,
      breakdown: [
        { name: "Asset Audit & Layout", days: 4 },
        { name: "Storyboarding Flows", days: 4 },
        { name: "Soundtrack Selection", days: 2 },
        { name: "Kinetic Cut & Stitch", days: 8 },
        { name: "Mastering & Fast Deploy", days: 3 }
      ]
    },
  }
};

interface PricingProps {
  onNavigate?: (screen: 'home' | 'pricing') => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const [activeMode, setActiveMode] = useState<'packages' | 'sprints' | 'types'>('packages');
  const [selectedType, setSelectedType] = useState('Explainer video');
  const [selectedDuration, setSelectedDuration] = useState('60s');

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
  const [dates, setDates] = useState({ start: '', end: '' });

  useEffect(() => {
    const today = new Date();
    const start = new Date(today);
    start.setHours(7, 0, 0, 0);
    const end = new Date(start);
    end.setHours(end.getHours() + 72);
    
    const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    setDates({ start: formatDate(start), end: formatDate(end) });

    const timer = setInterval(() => {
      setTimeLeft(getTargetTime());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#sprints') {
        setActiveMode('sprints');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const handleContactRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('contact-name-input') as HTMLInputElement;
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 pt-32 md:pt-40">
      {/* Ambient background accent glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Return Navigation bar */}
      <div className="mb-12 flex justify-start relative z-20">
        <button
          onClick={() => {
            onNavigate?.('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-950/80 border border-brand-800/80 text-xs font-bold uppercase tracking-wider text-brand-300 hover:text-white hover:bg-brand-900 transition-all backdrop-blur-md shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-accent-500 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Dashboard</span>
        </button>
      </div>

      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-[11px] font-bold uppercase tracking-widest mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Enterprise Choice Architecture
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight"
        >
          Transparent, <span className="text-gradient-accent">Asymmetric Pricing.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-brand-300 max-w-xl mx-auto text-balance mb-10 leading-relaxed"
        >
          Engineered utilizing high-intent conversion pathways. Zero hidden retainer bloat. Predictable production trajectories built for enterprise alignment.
        </motion.p>

        {/* Toggle Mode Controls Stack */}
        <div className="inline-flex p-1.5 rounded-2xl bg-brand-950/90 border border-brand-800/80 backdrop-blur-xl max-w-full overflow-x-auto shadow-2xl">
          <button
            onClick={() => {
              setActiveMode('packages');
              if (window.location.hash === '#sprints') {
                window.history.replaceState(null, '', window.location.pathname);
              }
            }}
            className={`relative px-5 sm:px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeMode === 'packages' 
                ? 'text-white bg-gradient-to-r from-accent-600 to-accent-500 shadow-lg shadow-accent-600/20' 
                : 'text-brand-400 hover:text-brand-100 hover:bg-brand-900/40'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${activeMode === 'packages' ? 'text-amber-300 fill-amber-300' : 'text-brand-500'}`} />
            <span>Core Ecosystems</span>
          </button>
          <button
            onClick={() => {
              setActiveMode('sprints');
              window.location.hash = '#sprints';
            }}
            className={`relative px-5 sm:px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeMode === 'sprints' 
                ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/20' 
                : 'text-brand-400 hover:text-brand-100 hover:bg-brand-900/40'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${activeMode === 'sprints' ? 'text-white fill-white animate-bounce' : 'text-amber-500'}`} />
            <span>⚡ Flash Sprints</span>
          </button>
          <button
            onClick={() => {
              setActiveMode('types');
              if (window.location.hash === '#sprints') {
                window.history.replaceState(null, '', window.location.pathname);
              }
            }}
            className={`relative px-5 sm:px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeMode === 'types' 
                ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-600/20' 
                : 'text-brand-400 hover:text-brand-100 hover:bg-brand-900/40'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${activeMode === 'types' ? 'text-amber-300 fill-amber-300' : 'text-purple-400'}`} />
            <span>🎛️ Video Pricing by Types</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Core Ecosystems Layout */}
      {activeMode === 'packages' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-20">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: pkg.delay }}
              className={`group rounded-3xl p-8 sm:p-10 relative flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                pkg.popular
                  ? 'glass-panel border-accent-500/80 shadow-2xl shadow-accent-500/10 scale-100 lg:scale-105 z-20 bg-gradient-to-b from-brand-900/80 via-brand-950/90 to-brand-950/90'
                  : 'bg-brand-950/60 border border-brand-800/70 hover:border-brand-700 hover:bg-brand-900/30 z-10'
              }`}
            >
              {/* Dynamic top line glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Most Popular Premium Ribbon */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-accent-600 via-accent-500 to-blue-600 text-white px-6 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                  Most Popular
                </div>
              )}

              <div>
                <div className="text-[11px] font-black text-accent-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                  {pkg.tier}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
                  {pkg.subtitle}
                </h3>

                {/* Price Display Module */}
                <div className="flex items-baseline gap-3 my-6 p-4 rounded-2xl bg-brand-900/40 border border-brand-800/50">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-brand-400 uppercase font-bold tracking-widest">Anchored Value</span>
                    <span className="text-xs font-bold text-accent-400 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-brand-300 leading-relaxed mb-8 pb-6 border-b border-brand-800/80">
                  {pkg.description}
                </p>

                {/* Features Roster */}
                <div className="text-[10px] font-extrabold text-brand-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                  <span>Scope Blueprint Inclusions</span>
                  <span className="text-brand-600 font-mono">100% Core Scope</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 group/item">
                      <div className="p-1 rounded-md bg-accent-500/10 border border-accent-500/20 group-hover/item:border-accent-500/40 transition-colors mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover/item:text-accent-300 transition-colors">{feat.name}</div>
                        <div className="text-[11px] text-brand-400 leading-snug mt-0.5">{feat.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  onClick={handleContactRedirect}
                  className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-accent-600 hover:bg-accent-500 text-white shadow-xl shadow-accent-600/20 hover:shadow-accent-600/30'
                      : 'bg-brand-900/80 hover:bg-brand-800 text-brand-200 border border-brand-700/80 hover:text-white'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Mode 2: Standalone Sprints Layout */}
      {activeMode === 'sprints' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto relative z-20"
        >
          {/* Psychological Urgency Banner */}
          <div className="mb-12 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 border border-accent-500/40 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_80px_rgba(234,67,53,0.15)]">
            {/* Glowing orbs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-2 h-full bg-accent-500 animate-pulse shadow-[0_0_20px_rgba(234,67,53,0.8)]" />
            
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10 relative z-10">
              
              {/* Left Column: Context & Copy */}
              <div className="flex-1 text-center xl:text-left">
                <div className="inline-flex items-center gap-3 mb-6 bg-brand-950/80 px-4 py-2 rounded-full border border-brand-800 shadow-inner">
                  <span className="flex items-center gap-2 text-[10px] sm:text-xs font-black text-accent-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-accent-500 animate-ping" />
                    Live Intake Window
                  </span>
                  <div className="w-px h-3 bg-brand-700" />
                  <span className="text-[10px] sm:text-xs font-mono text-brand-300 uppercase tracking-wider">
                    {dates.start} — {dates.end}
                  </span>
                </div>
                
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-none">
                  ONLY ACCEPTING <br className="hidden xl:block" /><span className="text-gradient-accent">LAST SEATS.</span>
                </h3>
                <p className="text-base sm:text-lg text-brand-300 max-w-xl mx-auto xl:mx-0 leading-relaxed font-medium">
                  To guarantee elite quality, we strictly cap these sprints at <strong className="text-white">5 startups</strong> total. Once the timer hits zero or capacity is filled, this offer completely disappears.
                </p>
              </div>

              {/* Right Column: Huge Timer & Scarcity */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 shrink-0 w-full xl:w-auto">
                
                {/* Huge Live Timer */}
                <div className="bg-brand-950/90 border border-brand-800/80 rounded-2xl p-6 sm:p-8 text-center shadow-2xl flex-1 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
                  <div className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-brand-400 mb-4 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-accent-500" />
                    Window Closes In
                  </div>
                  <div className="text-5xl sm:text-6xl md:text-7xl font-mono font-black text-white tracking-tighter flex items-center justify-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center">
                      <span className="bg-brand-900/50 px-3 sm:px-4 py-2 rounded-xl shadow-inner text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-[9px] sm:text-[10px] text-brand-500 uppercase tracking-widest mt-2">Hours</span>
                    </div>
                    <span className="text-brand-600 animate-pulse pb-6 sm:pb-8">:</span>
                    <div className="flex flex-col items-center">
                      <span className="bg-brand-900/50 px-3 sm:px-4 py-2 rounded-xl shadow-inner text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-[9px] sm:text-[10px] text-brand-500 uppercase tracking-widest mt-2">Mins</span>
                    </div>
                    <span className="text-brand-600 animate-pulse pb-6 sm:pb-8">:</span>
                    <div className="flex flex-col items-center">
                      <span className="bg-brand-900/50 px-3 sm:px-4 py-2 rounded-xl shadow-inner text-accent-400 drop-shadow-[0_0_10px_rgba(234,67,53,0.3)]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-[9px] sm:text-[10px] text-accent-500/70 uppercase tracking-widest mt-2">Secs</span>
                    </div>
                  </div>
                </div>

                {/* Capacity Counter */}
                <div className="bg-gradient-to-b from-brand-900/90 to-brand-950 border border-accent-500/40 rounded-2xl p-6 sm:p-8 min-w-[200px] shrink-0 text-center flex flex-col justify-center relative shadow-xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 blur-xl rounded-full" />
                  <div className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-brand-400 mb-5">
                    Total Seats Available
                  </div>
                  <div className="flex items-center justify-center gap-5 sm:gap-6 mb-2">
                    <div className="flex flex-col items-center opacity-60">
                      <span className="text-brand-500 line-through decoration-brand-500/50 text-4xl sm:text-5xl font-black">5</span>
                      <span className="text-[9px] sm:text-[10px] text-brand-500 uppercase tracking-widest mt-2">Total</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-brand-600 shrink-0" />
                    <div className="flex flex-col items-center">
                      <span className="text-6xl sm:text-7xl font-black text-accent-400 drop-shadow-[0_0_20px_rgba(234,67,53,0.6)] animate-pulse">2</span>
                      <span className="text-[11px] sm:text-xs text-accent-400 font-black uppercase tracking-widest mt-2">Left</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standaloneSprints.map((sprint, idx) => (
              <div 
                key={idx}
                className="group/card glass-panel rounded-3xl p-6 sm:p-8 border border-brand-800/80 hover:border-accent-500/50 transition-all duration-300 flex flex-col relative overflow-hidden shadow-xl hover:shadow-2xl"
              >
                {/* Subtle top edge accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 via-accent-500 to-transparent opacity-60 group-hover/card:opacity-100 transition-opacity" />

                <div className="mb-6 flex-grow flex flex-col">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="px-3 py-1.5 rounded-md bg-accent-600/10 border border-accent-500/20 text-[10px] font-black text-accent-400 tracking-widest uppercase inline-block w-fit">
                      {sprint.type}
                    </span>
                    <h3 className="text-xl font-black text-white tracking-tight group-hover/card:text-gradient-accent transition-all leading-tight">
                      {sprint.positioning}
                    </h3>
                  </div>

                  <div className="text-[11px] text-brand-400 mb-6 font-medium bg-brand-900/30 p-2 rounded-lg border border-brand-800/40">
                    <strong className="text-brand-300">Best For: </strong> {sprint.bestFor}
                  </div>

                  <div className="p-5 rounded-2xl bg-brand-950/80 border border-brand-800/60 mb-6 shadow-inner">
                    <div className="text-[10px] font-black uppercase text-accent-400 tracking-widest mb-4 flex items-center justify-between">
                      <span>What You Get</span>
                      <Zap className="w-3 h-3" />
                    </div>
                    <ul className="space-y-3">
                      {sprint.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[11px] text-brand-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pl-4 border-l-2 border-accent-500/50 mb-6 mt-auto">
                    <p className="text-[13px] font-bold text-white italic tracking-tight leading-relaxed">"{sprint.importantLine}"</p>
                  </div>

                  <div className="text-[9px] text-brand-500 font-mono text-center uppercase tracking-wider">
                    {sprint.trustBuilders}
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-800/80 mt-auto">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-3xl font-black text-white tracking-tighter">{sprint.price}</div>
                    <div className="text-[9px] text-accent-400 font-black uppercase tracking-widest text-right bg-accent-500/10 px-2 py-1 rounded">
                      Fast Track
                    </div>
                  </div>
                  <a
                    href="#contact"
                    onClick={handleContactRedirect}
                    className="w-full py-4 bg-white text-brand-950 hover:bg-brand-200 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>⚡ Book Sprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  {sprint.extra && (
                    <div className="text-[10px] text-brand-400 font-medium text-center mt-4">
                      {sprint.extra}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Mode 3: Video Customizer Matrix Layout */}
      {activeMode === 'types' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-brand-800/90 shadow-2xl relative z-20 overflow-hidden"
        >
          {/* Subtle inset top panel accent overlay */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-accent-500 to-indigo-600" />

          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="px-3 py-1 rounded-md bg-brand-900 border border-brand-800 text-[10px] font-black text-purple-400 uppercase tracking-widest mb-3 inline-block">
              Granular Tier customizer
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Video Customization Estimation Matrix</h3>
            <p className="text-xs text-brand-300">Evaluate specific production categories mapped to guaranteed pipeline lifecycle delivery speed.</p>
          </div>

          {/* Interactive Controller Framework Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 pb-10 border-b border-brand-800/80">
            {/* Left Box: Format & Duration Selectors */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1 Selector */}
              <div>
                <div className="text-xs font-black text-accent-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-[10px]">1</span>
                  <span>Select Production Format Blueprint</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.keys(typePricingMatrix).map((typeKey) => (
                    <button
                      key={typeKey}
                      onClick={() => setSelectedType(typeKey)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-22 relative overflow-hidden ${
                        selectedType === typeKey 
                          ? 'bg-accent-600/15 border-accent-500 text-white shadow-md shadow-accent-500/10' 
                          : 'bg-brand-950/80 border-brand-800/80 text-brand-400 hover:text-brand-200 hover:border-brand-700 hover:bg-brand-900/40'
                      }`}
                    >
                      {selectedType === typeKey && (
                        <div className="absolute top-0 right-0 w-8 h-8 bg-accent-500/20 rounded-bl-xl flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
                        </div>
                      )}
                      <span className="text-xs font-black tracking-tight block truncate pr-4 text-white">{typeKey}</span>
                      <span className="text-[10px] text-brand-400 block mt-1 font-medium">Specialized scope map</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 Selector */}
              <div>
                <div className="text-xs font-black text-accent-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-[10px]">2</span>
                  <span>Target Master Asset Duration</span>
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {["30s", "60s", "90s", "180s+"].map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setSelectedDuration(dur)}
                      className={`py-3.5 px-2 rounded-xl border text-center transition-all duration-300 cursor-pointer font-mono font-black text-xs relative ${
                        selectedDuration === dur
                          ? 'bg-white text-brand-950 border-white shadow-lg scale-105 z-10'
                          : 'bg-brand-950/80 border-brand-800/80 text-brand-400 hover:text-white hover:border-brand-700'
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Box: Dynamic Summary Metric Engine Dashboard */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-brand-950/90 rounded-2xl p-5 border border-brand-800/90 shadow-inner">
              <div>
                <div className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-4 pb-2 border-b border-brand-900 flex items-center justify-between">
                  <span>Target Trajectory Engine</span>
                  <span className="text-purple-400 font-mono">Verified Anchor</span>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-brand-900/40 border border-brand-800/40">
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-0.5">Starting Line Assessment</span>
                    <span className="text-xl font-black text-white">from {typePricingMatrix[selectedType]?.[selectedDuration]?.min || "$800"}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-900/40 border border-brand-800/40">
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-0.5">Total Pipeline Velocity</span>
                    <span className="text-xl font-black text-accent-400 font-mono">{typePricingMatrix[selectedType]?.[selectedDuration]?.days || 11} business days</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-brand-900 text-[10px] text-brand-500 leading-snug">
                *Includes dedicated project orchestration, scheduled logic sprints, and full workspace file packaging.
              </div>
            </div>
          </div>

          {/* Bottom Framework: Timeline Items Matrix & Estimate Checkout Trigger */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-black text-brand-200 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Phase Breakdown Timelines</span>
                <span className="text-[10px] font-bold text-accent-500 tracking-wider uppercase">Fixed Operational Scopes</span>
              </div>
              <div className="space-y-2.5">
                {(typePricingMatrix[selectedType]?.[selectedDuration]?.breakdown || typePricingMatrix["Explainer video"]["60s"].breakdown).map((item, bIdx) => (
                  <div key={bIdx} className="flex items-center justify-between p-3 rounded-xl bg-brand-900/40 border border-brand-800/60 text-xs hover:border-brand-700/60 transition-colors">
                    <span className="text-brand-100 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-brand-950 text-accent-400 font-mono font-black text-[11px] border border-brand-800/80">
                      {item.days} {item.days === 1 ? 'day' : 'days'}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-accent-500/10 border border-accent-500/30 text-xs font-bold mt-4 shadow-sm">
                  <span className="text-white font-black uppercase tracking-wider">Total Delivery Lifecycle</span>
                  <span className="text-accent-300 font-mono font-black text-sm">{typePricingMatrix[selectedType]?.[selectedDuration]?.days || 11} business days</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center text-center lg:text-right border-t lg:border-t-0 pt-8 lg:pt-0 border-brand-800/80">
              <div className="inline-block px-3 py-1 rounded bg-brand-900/80 border border-brand-800 text-[10px] font-black tracking-widest uppercase text-brand-400 mb-2">
                Estimated Scope Anchor
              </div>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3">
                {typePricingMatrix[selectedType]?.[selectedDuration]?.range || "$800 - $1,250"}
              </div>
              <p className="text-xs text-brand-400 max-w-xs mb-6 text-balance leading-relaxed">
                Pricing calibration scales directly with initial client assets, vector complexities, and multi-device 3D spatial mapping parameters.
              </p>
              <a
                href="#contact"
                onClick={handleContactRedirect}
                className="w-full sm:w-auto px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl shadow-accent-600/20 hover:shadow-accent-600/30 inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Lock Customized Scope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
