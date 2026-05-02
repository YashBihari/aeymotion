import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your product, audience, and goals. We analyze your brand to understand exactly what needs to be communicated.",
  },
  {
    number: "02",
    title: "Concept",
    description: "We develop the narrative and visual direction. You receive storyboards and styleframes that perfectly align with your brand, before any animation begins.",
  },
  {
    number: "03",
    title: "Production",
    description: "This is where the magic happens. We animate, sound design, and meticulously craft every frame to perfection, ensuring a premium feel.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "You receive the final, polished assets in all necessary formats, ready to be deployed across your launch, website, or marketing channels.",
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight mb-6"
          >
            A clear path from <br /> <span className="opacity-50">brief to brilliance.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative"
            >
               {/* Connecting Line */}
               {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-[28px] left-[60px] right-[-2rem] h-[1px] bg-white/20" />
               )}
               
              <div className="text-xs font-bold uppercase tracking-widest text-black mb-8 bg-white w-14 h-14 flex items-center justify-center relative z-10 border border-white/20">
                {step.number}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.05em] mb-4">{step.title}</h3>
              <p className="text-xs opacity-70 leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
