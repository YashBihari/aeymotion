import { Sparkles, Star } from 'lucide-react';

interface FooterProps {
  onNavigate?: (screen: 'home' | 'pricing' | 'services' | 'portfolio') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-950 border-t border-brand-900/80 pt-16 pb-12 px-4 sm:px-6 md:px-12 relative z-10 text-brand-400 overflow-hidden backdrop-blur-md">
      {/* Upper ambient subtle border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-brand-900/40">
        {/* Main Agency Core Brand Column */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-tighter uppercase text-white flex items-center gap-1">
              Aeymotion<span className="text-accent-400">.</span>
            </span>
            <div className="h-3 w-[1px] bg-brand-800" />
            <div className="flex items-center gap-1.5 bg-brand-900/60 px-2.5 py-0.5 rounded-full border border-brand-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[8px] font-mono text-brand-300 tracking-wider uppercase">Available for Projects</span>
            </div>
          </div>
          
          <p className="text-xs text-brand-400 max-w-sm leading-relaxed font-medium">
            We build high-impact videos that transform complex technology into engaging, easily understood customer experiences.
          </p>

          {/* Dedicated Clutch.co 5.0 Rating Widget Representation */}
          <div className="pt-2 flex items-center gap-3.5">
            <div className="px-3 py-2 rounded-xl bg-brand-900/60 border border-brand-800 flex items-center gap-2.5">
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <div className="border-l border-brand-800 pl-2 text-left">
                <span className="text-[9px] block font-mono font-bold text-white leading-none">5.0 / 5.0 RATING</span>
                <span className="text-[8px] font-mono text-brand-500 block leading-tight">Clutch.co Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 1: Services */}
        <div>
          <h4 className="text-[10px] font-mono font-black text-white uppercase tracking-widest mb-4">Services</h4>
          <ul className="space-y-2.5 text-xs font-semibold">
            <li><a href="#services" className="hover:text-white transition-colors">Explainer Videos</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">3D Walkthroughs</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">AI Video Frameworks</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Product Spec Demos</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Social Performance Cuts</a></li>
          </ul>
        </div>

        {/* Column 2: Industries */}
        <div>
          <h4 className="text-[10px] font-mono font-black text-white uppercase tracking-widest mb-4">Industries</h4>
          <ul className="space-y-2.5 text-xs font-semibold">
            <li><a href="#industries" className="hover:text-white transition-colors">SaaS & Software</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Web 3.0 & Cryptography</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Enterprise Systems</a></li>
          </ul>
        </div>

        {/* Column 3: Company & Legal */}
        <div>
          <h4 className="text-[10px] font-mono font-black text-white uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs font-semibold mb-6">
            <li>
              <button 
                onClick={() => {
                  onNavigate?.('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Case Studies Matrix
              </button>
            </li>
            <li><a href="#about" className="hover:text-white transition-colors">The Core Team</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Strategy Blueprint</a></li>
          </ul>

          <h4 className="text-[10px] font-mono font-black text-white uppercase tracking-widest mb-3">Legal</h4>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-brand-500">
            <span className="hover:text-brand-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-brand-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Baseline copy row */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase text-brand-500">
        <p>© {new Date().getFullYear()} Aeymotion Conversion Framework. Engineered Strictly For ROI.</p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-0">
          {/* Gmail Expanding Badge */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.aeymotion@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-brand-950 hover:bg-brand-900 border border-brand-800 hover:border-[#EA4335]/60 flex items-center justify-center hover:justify-start hover:w-auto hover:px-4 group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl hover:shadow-[#EA4335]/15 cursor-pointer overflow-hidden backdrop-blur-md"
            title="Email hello.aeymotion@gmail.com"
          >
            {/* Real Solid Full-Color Gmail Vector */}
            <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 4H3.5C2.67 4 2 4.67 2 5.5V18.5C2 19.33 2.67 20 3.5 20H20.5C21.33 20 22 19.33 22 18.5V5.5C22 4.67 21.33 4 20.5 4Z" fill="#4285F4"/>
              <path d="M20.5 4H3.5C2.67 4 2 4.67 2 5.5V7.5L12 13.5L22 7.5V5.5C22 4.67 21.33 4 20.5 4Z" fill="#EA4335"/>
              <path d="M2 7.5V18.5C2 19.33 2.67 20 3.5 20H7V10.5L2 7.5Z" fill="#34A853"/>
              <path d="M22 7.5V18.5C22 19.33 21.33 20 20.5 20H17V10.5L22 7.5Z" fill="#FBBC05"/>
            </svg>
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden whitespace-nowrap text-xs font-black tracking-wider text-white group-hover:text-[#EA4335]">
              hello.aeymotion@gmail.com
            </span>
          </a>

          {/* Instagram Expanding Badge */}
          <a 
            href="https://www.instagram.com/aey.motion/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-brand-950 hover:bg-brand-900 border border-brand-800 hover:border-[#E1306C]/60 flex items-center justify-center hover:justify-start hover:w-auto hover:px-4 group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl hover:shadow-[#E1306C]/15 cursor-pointer overflow-hidden backdrop-blur-md"
            title="Follow @aey.motion"
          >
            {/* Real Full-Color Instagram Gradient Vector */}
            <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FED576" />
                  <stop offset="25%" stopColor="#F47133" />
                  <stop offset="50%" stopColor="#BC3081" />
                  <stop offset="75%" stopColor="#8c3aaa" />
                  <stop offset="100%" stopColor="#4c63d2" />
                </linearGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#instaGrad)" />
              <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" fill="none" />
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="18" cy="6" r="1" fill="white" />
            </svg>
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden whitespace-nowrap text-xs font-black tracking-wider text-white group-hover:text-[#E1306C]">
              @aey.motion
            </span>
          </a>

          {/* Dribbble Expanding Badge (Routes securely to brand email pipeline) */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.aeymotion@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-brand-950 hover:bg-brand-900 border border-brand-800 hover:border-[#EA4C89]/60 flex items-center justify-center hover:justify-start hover:w-auto hover:px-4 group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl hover:shadow-[#EA4C89]/15 cursor-pointer overflow-hidden backdrop-blur-md"
            title="Request Dribbble Vault via hello.aeymotion@gmail.com"
          >
            {/* Real Solid Full-Color Dribbble Vector */}
            <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#EA4C89" />
              <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M5.5 8C8.5 8.5 12 8 14.5 5.5" fill="none" />
              <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M3.5 13C7 12 11.5 12.5 15.5 16" fill="none" />
              <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M11 21.5C13 18 16.5 13.5 21 11.5" fill="none" />
            </svg>
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden whitespace-nowrap text-xs font-black tracking-wider text-white group-hover:text-[#EA4C89]">
              hello.aeymotion@gmail.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
