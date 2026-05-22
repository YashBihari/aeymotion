import { motion } from 'motion/react';
import { ArrowRight, Box, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Box className="w-6 h-6" />,
    title: "Startup Launch Essentials",
    description: "Turn your product into a clear, easy-to-understand visual for strong first impressions.",
    features: [
      "45 to 60s Explainer Video",
      "Clean, modern motion",
      "Unlimited revision",
      "Delivery 5 to 7 days"
    ],
    price: "Starting from $699"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth & Campaign Motion",
    description: "Startups actively scaling marketing, ads, and audience engagement",
    features: [
      "1x Explainer or Product Video",
      "3 to 5 short form vertical video",
      "Platform optimized formats",
      "Delivery: 2 to 3 week"
    ],
    price: "Starting from $1499"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Premium Product Experience",
    description: "Craft cinematic, high-end visuals that position your brand as premium and memorable.",
    features: [
      "Cinematic product video / brand film",
      "Extended 90 second narrative",
      "45s growth focused video",
      "5 to 10 social media cuts",
      "Priority support & delivery",
      "Delivery: 3–5 weeks"
    ],
    price: "Starting from $2999"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight mb-6 max-w-[580px]"
        >
          Specialized motion packages.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-lg text-[#555] max-w-[400px] leading-relaxed"
        >
          No bloated scope entries. Just precise, high-impact motion offerings designed strictly for modern tech companies.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="group relative p-5 border border-black/10 rounded-sm hover:bg-black hover:border-black hover:text-white transition-colors duration-300 flex flex-col justify-center"
          >
            <h3 className="text-sm uppercase tracking-[0.05em] font-bold mb-2">{service.title}</h3>
            <p className="text-xs opacity-70 mb-6">{service.description}</p>
            
            <ul className="space-y-2 mb-6">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs opacity-80">
                  <div className="w-1 h-1 rounded-full bg-current flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4">
              {service.price && (
                <div className="text-sm font-semibold tracking-wide border-t border-current/20 pt-4">
                  {service.price}
                </div>
              )}
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-white">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
