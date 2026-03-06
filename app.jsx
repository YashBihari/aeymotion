const { useMemo, useState } = React;

const services = [
  { title: 'Product Launch Videos', description: 'Cinematic launch narratives that introduce your product with clarity and impact.', icon: '🚀' },
  { title: 'Explainer Videos', description: 'Strategic explainer animations that simplify complex products for faster adoption.', icon: '💡' },
  { title: 'App & SaaS Demo Videos', description: 'Feature-led demos that showcase how your platform works in real product contexts.', icon: '🧩' },
  { title: 'Brand Story Videos', description: 'Story-first content that builds trust and conveys your unique market positioning.', icon: '🎬' },
  { title: 'Social Media Motion Ads', description: 'High-performance ad creatives optimized for engagement and conversion on social channels.', icon: '📈' },
  { title: 'UI / App Promo Videos', description: 'Polished promo edits designed to highlight UX excellence across your app surfaces.', icon: '📱' }
];

const workItems = [
  { title: 'NovaOS Launch Film', category: 'Product Videos', video: 'https://cdn.coverr.co/videos/coverr-making-wave-patterns-1579/1080p.mp4', poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80' },
  { title: 'FlowStack Explainer', category: 'Explainer Videos', video: 'https://cdn.coverr.co/videos/coverr-human-eye-in-colorful-light-9714/1080p.mp4', poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Synq App Demo', category: 'App Videos', video: 'https://cdn.coverr.co/videos/coverr-laptop-running-javascript-code-1576/1080p.mp4', poster: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Pulse Ad Campaign', category: 'Ads', video: 'https://cdn.coverr.co/videos/coverr-3d-abstract-scene-9718/1080p.mp4', poster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Signal Device Film', category: 'Product Videos', video: 'https://cdn.coverr.co/videos/coverr-typing-on-computer-1574/1080p.mp4', poster: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Core Loop Explainer', category: 'Explainer Videos', video: 'https://cdn.coverr.co/videos/coverr-neon-lines-1578/1080p.mp4', poster: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80' }
];

const processSteps = [
  { title: 'Discovery', subtitle: 'Understanding the product and target audience', icon: '🔎' },
  { title: 'Script & Concept', subtitle: 'Creating the video story and visuals', icon: '✍️' },
  { title: 'Design & Animation', subtitle: 'Motion graphics production', icon: '✨' },
  { title: 'Delivery', subtitle: 'Final high-quality video ready for marketing', icon: '📦' }
];

const testimonials = [
  { name: 'Elena Martin', company: 'NovaLabs', review: 'Aeymotion turned our launch vision into a premium product film that directly improved demo signups.' },
  { name: 'David Kim', company: 'FlowStack', review: 'The team understood our product immediately and delivered an explainer that made complex features feel simple.' },
  { name: 'Sara Ahmed', company: 'Pulse AI', review: 'From script to final delivery, the process felt extremely polished. The final ad assets outperformed expectations.' },
  { name: 'Ryan Cooper', company: 'Synq Mobile', review: 'Strong storytelling, clean visual language, and fast turnaround. Aeymotion feels like an extension of our in-house team.' }
];

const filters = ['All', 'Product Videos', 'Explainer Videos', 'App Videos', 'Ads'];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWork = useMemo(() => {
    if (activeFilter === 'All') return workItems;
    return workItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="app">
      <header className="top-nav">
        <a href="#hero" className="brand">Aeymotion</a>
        <nav>
          <a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero" className="hero section">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80">
          <source src="https://cdn.coverr.co/videos/coverr-motion-graphic-9466/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Motion Design Studio</p>
          <h1>We Create High-Impact Product & Brand Videos</h1>
          <p>Explainer videos, product launches, and demo videos for startups and tech companies.</p>
          <div className="hero-cta"><a href="#work" className="btn btn-primary">View Work</a><a href="#contact" className="btn btn-ghost">Start a Project</a></div>
        </div>
        <a href="#services" className="scroll-indicator" aria-label="Scroll to services"><span /></a>
      </section>

      <section id="services" className="section container">
        <h2>Services</h2>
        <p className="section-intro">Focused video production built for product-led growth and brand storytelling.</p>
        <div className="services-grid">{services.map((s) => <article key={s.title} className="service-card"><span className="service-icon">{s.icon}</span><h3>{s.title}</h3><p>{s.description}</p></article>)}</div>
      </section>

      <section id="work" className="section container">
        <h2>Selected Work</h2>
        <div className="filter-row">{filters.map((f) => <button key={f} type="button" className={`filter-btn ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>)}</div>
        <div className="portfolio-grid">
          {filteredWork.map((item) => (
            <button type="button" className="work-card" key={item.title} onClick={() => setSelectedWork(item)}>
              <video muted loop playsInline preload="none" poster={item.poster} onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()}>
                <source src={item.video} type="video/mp4" />
              </video>
              <div className="work-meta"><h3>{item.title}</h3><p>{item.category}</p></div>
            </button>
          ))}
        </div>
      </section>

      <section id="process" className="section container">
        <h2>Process</h2>
        <div className="timeline">{processSteps.map((step, i) => <article key={step.title} className="timeline-step"><div className="step-index">{String(i + 1).padStart(2, '0')}</div><div className="step-icon">{step.icon}</div><div className="step-content"><h3>{step.title}</h3><p>{step.subtitle}</p></div></article>)}</div>
      </section>

      <section id="about" className="section container about-block"><h2>About Aeymotion</h2><p>Aeymotion is a motion design studio that helps startups and brands communicate their products through high-impact videos. From product launches to explainer videos, we transform ideas into engaging visual stories.</p></section>

      <section id="testimonials" className="section container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">{testimonials.map((item) => <article key={item.name} className="testimonial-card"><p>{item.review}</p><footer><strong>{item.name}</strong><span>{item.company}</span></footer></article>)}</div>
      </section>

      <section id="contact" className="section container contact-wrap">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Let’s create your next product video.</h2>
          <p className="contact-copy">Tell us about your product, goals, and timeline — we’ll reply with a tailored production plan.</p>
          <div className="contact-details"><a href="mailto:hello@aeymotion.com">hello@aeymotion.com</a><div className="socials"><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">Behance</a></div></div>
        </div>
        <form className="contact-form">
          <label>Name<input type="text" placeholder="Your name" required /></label>
          <label>Email<input type="email" placeholder="you@company.com" required /></label>
          <label>Project budget<select defaultValue=""><option value="" disabled>Select budget</option><option>$3k - $7k</option><option>$7k - $15k</option><option>$15k - $30k</option><option>$30k+</option></select></label>
          <label>Message<textarea rows="5" placeholder="Tell us about your project" /></label>
          <button type="submit" className="btn btn-primary">Start Project</button>
        </form>
      </section>

      <footer className="footer"><div className="container footer-inner"><a href="#hero" className="brand">Aeymotion</a><nav><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a></nav><div className="socials"><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">X</a></div><p>© {new Date().getFullYear()} Aeymotion. All rights reserved.</p></div></footer>

      {selectedWork && (
        <div className="modal" role="dialog" aria-modal="true">
          <button className="modal-backdrop" type="button" onClick={() => setSelectedWork(null)} aria-label="Close modal" />
          <div className="modal-content"><button type="button" className="modal-close" onClick={() => setSelectedWork(null)}>×</button><h3>{selectedWork.title}</h3><video controls autoPlay playsInline><source src={selectedWork.video} type="video/mp4" /></video></div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
