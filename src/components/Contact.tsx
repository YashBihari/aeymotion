import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [selectedBudget, setSelectedBudget] = useState<string>("$2,000 - $5,000");
  const [selectedSource, setSelectedSource] = useState<string>("Clutch.co Recommendation");
  
  // Controlled Inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [details, setDetails] = useState("");
  
  // Feedback telemetry states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const budgets = [
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+ Enterprise Scale"
  ];

  const sources = [
    "Clutch.co Recommendation",
    "Twitter / X Telemetry",
    "LinkedIn Network",
    "Direct Search / Organic",
    "Founder Referral"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Proxy forwarding address configurable via environment variable or default fallback Web App link.
      // Target email address is strictly configured and encapsulated within the Apps Script backend logic.
      const proxyEndpoint = (import.meta as any).env?.VITE_LEAD_INGEST_URL || "https://script.google.com/macros/s/AKfycbwAq-ovYrRrDXBQqSVKDMSxD4BBBhJOtC5CwjP_XkFISgBzskjhtodOa6O9lVt2cAXz/exec";
      
      await fetch(proxyEndpoint, {
        method: "POST",
        mode: "no-cors", // Permits browser requests cross-origin without CORS validation overhead
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          companyUrl,
          budgetBand: selectedBudget,
          source: selectedSource,
          details: details || "No explicit brief provided."
        })
      });

      setSubmitStatus('success');
      setName("");
      setEmail("");
      setCompanyUrl("");
      setDetails("");
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Immersive radial gradient backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Messaging Column (The Pitch) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              Ready to scale? <br />
              <span className="text-gradient-accent">Let's build your video.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-brand-300 max-w-md leading-relaxed mb-8 font-medium"
            >
              Drop your name and email below. We'll reach out within 24 hours to map out a custom cinematic strategy for your exact niche.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-8 border-t border-brand-900/80 space-y-3"
          >
            <p className="text-[10px] uppercase font-black text-brand-500 tracking-widest font-mono">Direct Pipeline</p>
            <span className="text-sm sm:text-base text-white font-black tracking-wide block font-mono select-all">
              hello.aeymotion@gmail.com
            </span>
            <div className="flex items-center gap-2 text-xs text-brand-400 pt-1">
              <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
              <span>Guaranteed response within 24 hours.</span>
            </div>
          </motion.div>
        </div>

        {/* Right Tactical Form Array (The Form) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-12 border border-brand-800/80 relative shadow-2xl group hover:border-brand-700 transition-all duration-500"
        >
          {/* Subtle upper light line simulation */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

          {submitStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-20 h-20 bg-accent-500/10 border border-accent-500/30 rounded-full flex items-center justify-center mx-auto text-accent-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">Request Received</h4>
              <p className="text-sm text-brand-300 max-w-sm mx-auto leading-relaxed">
                We'll review your details and reach out shortly to begin crafting your strategy.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="mt-6 px-6 py-2 rounded-full bg-brand-900/60 border border-brand-800 text-xs font-bold text-brand-300 hover:text-white transition-colors cursor-pointer"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-[11px] uppercase font-black text-brand-300 tracking-widest font-mono">Your Name</label>
                <input 
                  id="contact-name-input"
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-brand-950 border border-brand-800/80 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors shadow-inner"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-[11px] uppercase font-black text-brand-300 tracking-widest font-mono">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-brand-950 border border-brand-800/80 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors shadow-inner"
                  required
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-medium">
                  Connection error. Please email us directly at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.aeymotion@gmail.com" target="_blank" rel="noopener noreferrer" className="underline text-white font-bold">hello.aeymotion@gmail.com</a>
                </div>
              )}

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-2xl bg-accent-600 hover:bg-accent-500 text-white font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 cursor-pointer group/submit ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  <span>{isSubmitting ? "Sending..." : "Book Strategy Call"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover/submit:translate-x-1.5 transition-transform" />}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
