import { Sparkles, Star, Mail, Instagram, Dribbble } from 'lucide-react';

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
        
        <div className="flex items-center gap-8">
          {/* Gmail */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karandangi1867@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center cursor-pointer transition-all duration-500 overflow-hidden"
          >
            <Mail className="w-5 h-5 text-brand-500 group-hover:text-[#EA4335] shrink-0 transition-all duration-500 group-hover:scale-110 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(234,67,53,0.4)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#EA4335] max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pl-3 transition-all duration-500 whitespace-nowrap">
              karandangi1867@gmail.com
            </span>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/aey.motion/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center cursor-pointer transition-all duration-500 overflow-hidden"
          >
            <Instagram className="w-5 h-5 text-brand-500 group-hover:text-[#E1306C] shrink-0 transition-all duration-500 group-hover:scale-110 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.4)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E1306C] max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:pl-3 transition-all duration-500 whitespace-nowrap">
              @aey.motion
            </span>
          </a>

          {/* Dribbble */}
          <a 
            href="https://dribbble.com/aeymotion" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center cursor-pointer transition-all duration-500 overflow-hidden"
          >
            <Dribbble className="w-5 h-5 text-brand-500 group-hover:text-[#EA4C89] shrink-0 transition-all duration-500 group-hover:scale-110 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(234,76,137,0.4)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#EA4C89] max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:pl-3 transition-all duration-500 whitespace-nowrap">
              Dribbble
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
