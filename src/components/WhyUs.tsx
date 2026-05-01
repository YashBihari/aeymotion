import { motion } from 'motion/react';

export default function WhyUs() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight text-brand-950 mb-6 max-w-[500px]"
          >
            We don't just make things move. We make them <span className="text-[#AAA] italic">act.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-lg text-[#555] max-w-lg leading-relaxed"
          >
            For SaaS founders and AI startups, clarity is conversion. 
            We distill complex technical products into premium, easy-to-understand visual stories that drive action. Speed, premium quality, and results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
          {[
            {
              metric: "2x",
              label: "Average conversion increase on landing pages."
            },
            {
              metric: "<14",
              label: "Days from discovery to the first concept delivery."
            },
            {
              metric: "50+",
              label: "SaaS & AI startups partnered with us globally to scale."
            },
            {
              metric: "Top 1%",
              label: "Quality standard. We deliver Apple-level design, every time."
            }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (i * 0.1) }}
              className="p-8 rounded-none border border-black/10 bg-transparent flex flex-col justify-center aspect-square md:aspect-auto hover:bg-black hover:text-white hover:border-black transition-colors duration-300 group"
            >
              <div className="text-[40px] font-bold tracking-[-0.02em] mb-4 group-hover:text-white">{stat.metric}</div>
              <p className="text-xs opacity-70 group-hover:text-white leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
