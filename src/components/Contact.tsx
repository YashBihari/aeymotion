import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-transparent max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight text-brand-950 mb-6"
          >
            Start a project.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-lg text-[#555] max-w-md mb-12"
          >
            Fill out the form to give us a bit of context. We'll get back to you within 24 hours to schedule a discovery call.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block space-y-4"
          >
             <p className="text-[10px] uppercase font-semibold text-[#AAA] tracking-[0.1em]">Alternatively, email us directly:</p>
             <a href="mailto:hello.aeymotion@gmail.com" className="text-lg text-black hover:text-[#555] transition-colors border-b border-black hover:border-transparent pb-1 inline-flex font-bold">
                hello.aeymotion@gmail.com
             </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-black text-white p-10 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-medium mb-5">Get Started</h2>
          <form className="space-y-6" action="https://formsubmit.co/hello.aeymotion@gmail.com" method="POST">
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase opacity-50 tracking-[0.1em]">Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Founder's Name"
                className="w-full bg-transparent border-b border-white/20 text-white py-2 text-sm focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase opacity-50 tracking-[0.1em]">Work Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="name@company.com"
                className="w-full bg-transparent border-b border-white/20 text-white py-2 text-sm focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase opacity-50 tracking-[0.1em]">Project Brief</label>
              <textarea 
                name="message"
                placeholder="Tell us about your product..."
                rows={2}
                className="w-full bg-transparent border-b border-white/20 text-white py-2 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Optional: Configuration for FormSubmit */}
            <input type="hidden" name="_subject" value="New inquiry from AeyMotion Website" />
            <input type="hidden" name="_template" value="table" />

            <button 
              type="submit"
              className="mt-5 bg-white text-black px-10 py-[15px] text-xs font-bold uppercase tracking-widest cursor-pointer w-fit"
            >
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
