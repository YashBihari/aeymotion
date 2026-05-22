import { motion } from 'motion/react';
import { useState, useRef } from 'react';

const projects = [
  {
    title: "Haleum AI Launch",
    category: "Product Explainer",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777530875/two_copbgr.mp4",
    video: "https://cdn.dribbble.com/userupload/45585076/file/4bebc5be9f0d3be3085e13f6f1930d53.mp4",
    isVideoThumb: true,
    colSpan: "md:col-span-2"
  },
  {
    title: "Sena AI",
    category: "Explainer Video",
    image: "https://res.cloudinary.com/dnbwf7xqd/image/upload/v1773475861/Sena_AI_1_deb6j5.gif",
    video: "https://cdn.dribbble.com/userupload/45307265/file/d8ae45bfcd4e03195a780095a65a9d64.mp4",
    colSpan: "md:col-span-1"
  },
  {
    title: "Instagram",
    category: "LOGO Animation",
    image: "https://res.cloudinary.com/dnbwf7xqd/image/upload/v1773476696/insta_dribbble_uyizw1.gif",
    video: "https://cdn.dribbble.com/userupload/43870211/file/original-9ffdd24415d5bce6a964ae866da5f235.mp4",
    colSpan: "md:col-span-1"
  },
  {
    title: "Healthcare AI",
    category: "PROMO VIDEO",
    image: "https://res.cloudinary.com/dnbwf7xqd/video/upload/v1777531940/healthcare_hpo6iw.mp4",
    video: "https://cdn.dribbble.com/userupload/44517963/file/a6d5bd580c662670d1d5ce5fc01c2f41.mp4",
    isVideoThumb: true,
    colSpan: "md:col-span-2"
  }
];

export default function Portfolio() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
    setTimeout(() => {
      const videoEl = document.getElementById(`portfolio-video-${index}`) as HTMLVideoElement;
      if (videoEl) {
        videoEl.play();
      }
    }, 0);
  };
  return (
    <section id="work" className="py-24 md:py-32 bg-transparent px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight text-brand-950 mb-6"
            >
              Selected work.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-lg text-[#555] max-w-[400px] leading-relaxed"
            >
              A glimpse into how we transform complex software into compelling visual narratives.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {projects.map((project, i) => {
            const isPlaying = playingIndex === i;
            
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={`group relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-[480px] bg-brand-200 border border-black/10 ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"} ${project.video && !isPlaying ? 'cursor-pointer' : ''}`}
              onClick={project.video && !isPlaying ? () => handlePlay(i) : undefined}
            >
              {!isPlaying ? (
                <>
                  {project.isVideoThumb ? (
                    <video 
                      src={project.image} 
                      className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Play Button Center (Hover) */}
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none">
                      <div className="font-black text-[12px] uppercase tracking-[0.2em] bg-black text-white px-6 py-3">
                          PLAY
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-white/50 mb-1 block">{project.category}</span>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </>
              ) : (
                <video 
                  id={`portfolio-video-${i}`}
                  src={project.video}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              )}
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
