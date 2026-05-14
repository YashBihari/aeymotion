import { motion } from 'motion/react';
import { CheckCircle2, HelpCircle, ArrowRight, ArrowLeft, Zap, Sparkles, Flame, Clock, X } from 'lucide-react';
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
    delay: 0.1,
    // 💳 PASTE YOUR STRIPE / RAZORPAY INSTANT PAYMENT LINK HERE
    paymentUrl: ""
  },
  {
    tier: "Tier 2: The Professional",
    subtitle: "Growth Video Suite",
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
    cta: "Deploy Growth Suite",
    popular: true, // 🔥 Most Popular highlighted
    delay: 0.2,
    // 💳 PASTE YOUR STRIPE / RAZORPAY INSTANT PAYMENT LINK HERE
    paymentUrl: ""
  },
  {
    tier: "Tier 3: The Elite",
    subtitle: "Full Funnel Video System",
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
    delay: 0.3,
    // 💳 PASTE YOUR STRIPE / RAZORPAY INSTANT PAYMENT LINK HERE
    paymentUrl: ""
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
    extra: "Built to help cold users understand your product faster.",
    // 💳 PASTE YOUR STRIPE / RAZORPAY INSTANT PAYMENT LINK HERE
    paymentUrl: ""
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
    extra: "Designed for startups that need faster creative testing.",
    // 💳 PASTE YOUR STRIPE / RAZORPAY INSTANT PAYMENT LINK HERE
    paymentUrl: ""
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
    extra: "Convert your raw thoughts into polished authority.",
    // 💳 PASTE YOUR STRIPE / RAZORPAY INSTANT PAYMENT LINK HERE
    paymentUrl: ""
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
  const [activeMode, setActiveMode] = useState<'packages' | 'sprints' | 'types' | 'consulting'>('packages');
  const [selectedType, setSelectedType] = useState('Explainer video');
  const [selectedDuration, setSelectedDuration] = useState('60s');
  const [showConsultingCheckout, setShowConsultingCheckout] = useState(false);

  // 💰 INSTANT PAYOUT CONFIGURATION FOR $30 AI CONSULTING
  // 1. Enter your UPI ID to receive direct-to-bank settlement in 0 seconds (India):
  const PAYOUT_UPI_ID = "9098635119@slc";
  // 2. Or paste your Stripe / Razorpay direct $30 payment link:
  const consultingPaymentUrl = "";

  // Asynchronous continuous sprint pipeline models

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
            <span>Growth Video Suites</span>
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
          <button
            onClick={() => {
              setActiveMode('consulting');
              if (window.location.hash === '#sprints') {
                window.history.replaceState(null, '', window.location.pathname);
              }
            }}
            className={`relative px-5 sm:px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeMode === 'consulting' 
                ? 'text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-600/20' 
                : 'text-brand-400 hover:text-brand-100 hover:bg-brand-900/40'
            }`}
          >
            <span className="text-base">🧠</span>
            <span>AI Strategy Consultation</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Growth Video Suites Layout */}
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
                  href={pkg.paymentUrl || "#contact"}
                  onClick={(e) => {
                    if (pkg.paymentUrl) {
                      // Let native link routing handle the direct payment window
                      return;
                    }
                    handleContactRedirect(e);
                  }}
                  target={pkg.paymentUrl ? "_blank" : undefined}
                  rel={pkg.paymentUrl ? "noopener noreferrer" : undefined}
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
          {/* Brand Authority Positioning Banner */}
          <div className="mb-12 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 border border-brand-800/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            {/* Glowing orbs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-500 to-purple-500" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="max-w-3xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-4 bg-brand-950/80 px-3.5 py-1.5 rounded-full border border-brand-800/80">
                  <Sparkles className="w-3.5 h-3.5 text-accent-400" />
                  <span className="text-[10px] sm:text-xs font-bold text-brand-300 uppercase tracking-widest">
                    High-Velocity Engagement Models
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                  Selectively partnering with <br className="hidden sm:block" />
                  <span className="text-gradient-accent">AI & SaaS</span> brands each month
                </h3>
                <p className="text-sm sm:text-base text-brand-300 leading-relaxed font-medium">
                  Focused sprint engagements engineered to deploy high-converting video frameworks rapidly. Zero overhead, asynchronous iteration workflows, and zero long-term retainer lock-ins.
                </p>
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
                    href={sprint.paymentUrl || "#contact"}
                    onClick={(e) => {
                      if (sprint.paymentUrl) {
                        return;
                      }
                      handleContactRedirect(e);
                    }}
                    target={sprint.paymentUrl ? "_blank" : undefined}
                    rel={sprint.paymentUrl ? "noopener noreferrer" : undefined}
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
                  <span>Project Scope</span>
                  <span className="text-purple-400 font-mono">Estimated Pricing</span>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-brand-900/40 border border-brand-800/40">
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-0.5">Starting Line Assessment</span>
                    <span className="text-xl font-black text-white">from {typePricingMatrix[selectedType]?.[selectedDuration]?.min || "$800"}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-900/40 border border-brand-800/40">
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-0.5">Total Estimated Delivery</span>
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
                  <span className="text-white font-black uppercase tracking-wider">Total Estimated Delivery</span>
                  <span className="text-accent-300 font-mono font-black text-sm">{typePricingMatrix[selectedType]?.[selectedDuration]?.days || 11} business days</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center text-center lg:text-right border-t lg:border-t-0 pt-8 lg:pt-0 border-brand-800/80">
              <div className="inline-block px-3 py-1 rounded bg-brand-900/80 border border-brand-800 text-[10px] font-black tracking-widest uppercase text-brand-400 mb-2">
                Estimated Pricing Range
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

      {/* Mode 4: Standalone 1 Hour AI Consultant Service Layout */}
      {activeMode === 'consulting' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-brand-800/90 shadow-2xl relative z-20 overflow-hidden"
        >
          {/* Subtle top edge accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-brand-800/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-3">
                1-on-1 Strategic Consulting
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2">
                1 Hour AI Strategy & Video Funnel Review
              </h3>
              <p className="text-xs sm:text-sm text-brand-300 font-medium max-w-xl">
                Get a deep-dive, actionable live consultation with our AI production architects to systematically evaluate your landing page messaging, optimize your video scripts, and eliminate friction across your sales flows.
              </p>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-brand-950/80 border border-brand-800/60 shadow-inner text-center w-full md:w-auto">
              <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest block mb-1">Fixed Rate</span>
              <span className="text-4xl font-black text-white font-mono tracking-tight">$30</span>
              <span className="text-[9px] text-emerald-400 uppercase tracking-wider font-extrabold block mt-1">60-Minute Session</span>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-[10px] font-black uppercase text-brand-400 tracking-widest mb-2">Session Inclusions</div>
              <div className="flex items-start gap-2.5 text-xs text-brand-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Full audit of your software's user journey and demo gaps</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Live copywriting feedback for your hooks and subheaders</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Actionable optimization roadmap delivered right after call</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-black uppercase text-brand-400 tracking-widest mb-2">Instant Payout Setup</div>
              <p className="text-xs text-brand-400 leading-relaxed font-medium">
                Secure your 60-minute interactive calendar slot instantly. All consulting fees route directly to our connected settlement system immediately upon confirmation.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setShowConsultingCheckout(true)}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl inline-flex items-center justify-center gap-2 group cursor-pointer border-none"
                >
                  <span>⚡ Secure & Pay $30</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Premium Instant Payout Checkout Modal */}
      {showConsultingCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/90 backdrop-blur-xl animate-fade-in">
          <div className="w-full max-w-lg glass-panel rounded-3xl overflow-hidden border border-brand-800/80 shadow-2xl relative flex flex-col bg-brand-950 text-left">
            {/* Elegant Header banner */}
            <div className="relative p-6 pb-4 bg-gradient-to-r from-emerald-950 via-brand-950 to-brand-950 border-b border-brand-800/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Instant Direct Settlement</span>
                <h4 className="text-lg font-black text-white tracking-tight">AI Consulting Checkout</h4>
              </div>
              <button
                onClick={() => setShowConsultingCheckout(false)}
                className="p-1.5 rounded-full bg-brand-900/60 hover:bg-brand-800 text-brand-400 hover:text-white transition-colors cursor-pointer border border-brand-700/50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Option A: Direct Instant UPI transfer */}
              <div className="p-5 rounded-2xl bg-brand-900/30 border border-emerald-500/30 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Instant UPI Transfer (India)
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                    0s Settlement
                  </span>
                </div>
                <p className="text-[11px] text-brand-300 leading-relaxed mb-4">
                  Pay instantly via Google Pay, PhonePe, or Paytm. Funds credit directly into your bank account immediately.
                </p>
                
                {/* Dynamically Styled live QR code graphic */}
                <div className="bg-white p-2 rounded-xl w-44 h-44 mx-auto mb-3 flex flex-col items-center justify-center border-2 border-emerald-500/40 relative shadow-inner overflow-hidden">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(`upi://pay?pa=${PAYOUT_UPI_ID}&pn=Aeymotion&am=2500&cu=INR`)}`}
                    alt="Scan with Google Pay, PhonePe, or Paytm"
                    className="w-full h-full object-contain"
                  />
                  {/* Four small corner scanner brackets */}
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-emerald-600" />
                  <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-emerald-600" />
                  <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-emerald-600" />
                  <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-emerald-600" />
                </div>

                <div className="text-center">
                  <span className="text-[10px] text-brand-400 font-mono select-all bg-brand-950 px-2.5 py-1 rounded border border-brand-800 inline-block">
                    {PAYOUT_UPI_ID}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-800/40 text-center">
                  <a
                    href={`upi://pay?pa=${PAYOUT_UPI_ID}&pn=Aeymotion&am=2500&cu=INR`}
                    className="text-[11px] font-black uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tap to Open UPI App</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Option B: Card Global checkout */}
              <div className="p-4 rounded-xl bg-brand-950/60 border border-brand-800/80 text-center">
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-2">International / Card Checkout</span>
                <a
                  href={consultingPaymentUrl || "#contact"}
                  onClick={(e) => {
                    if (consultingPaymentUrl) return;
                    e.preventDefault();
                    setShowConsultingCheckout(false);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  target={consultingPaymentUrl ? "_blank" : undefined}
                  rel={consultingPaymentUrl ? "noopener noreferrer" : undefined}
                  className="w-full py-3 bg-brand-900 hover:bg-brand-800 text-white rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all block border border-brand-700/60"
                >
                  {consultingPaymentUrl ? "Pay $30 via Global Gateway ↗" : "Request Manual Invoice"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
