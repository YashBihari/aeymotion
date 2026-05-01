import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-transparent flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl rounded-none bg-black p-12 md:p-24 text-center relative overflow-hidden isolate shadow-2xl"
      >
        <h2 className="text-[40px] md:text-[64px] font-bold tracking-tight text-white mb-8 max-w-3xl mx-auto leading-[0.95]">
          Ready to make your product <span className="opacity-50">unignorable?</span>
        </h2>
        
        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          We take on a limited number of projects per quarter to ensure the highest quality output. Partner with Aeymotion today.
        </p>

        <a
          href="#contact"
          className="inline-flex justify-center items-center gap-2 px-10 py-[15px] bg-white text-black text-xs font-bold uppercase tracking-widest transition-all hover:bg-gray-200"
        >
          <Mail className="w-4 h-4 text-black" />
          Request a Proposal
        </a>
      </motion.div>
    </section>
  );
}
