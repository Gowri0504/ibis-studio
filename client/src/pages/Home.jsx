import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { FaCamera, FaVideo, FaPhotoVideo, FaBaby, FaRing, FaUsers } from 'react-icons/fa';

const ServiceCard = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="glass-card p-8 rounded-2xl group hover:border-ibis-gold/30 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-ibis-gold/10 rounded-full blur-2xl group-hover:bg-ibis-gold/20 transition-all duration-500"></div>
    <div className="text-4xl text-ibis-gold mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-serif font-bold mb-3 text-white group-hover:text-ibis-gold transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Home = () => {
  const ownerName = 'IBIS Studio';
  const carouselRef = useRef(null);
  const [mood, setMood] = useState('Cinematic');
  const scrollBy = (dx) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dx, behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const id = setInterval(() => {
      scrollBy(600);
    }, 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="min-h-screen bg-ibis-dark text-white overflow-hidden relative">
      <div className="grain-overlay"></div>
      {/* Hero split layout inspired by provided photo */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ibis-dark via-ibis-card to-ibis-dark"></div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <div className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">Fashion Photographer</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-4">
              <span className="text-gradient-gold">{ownerName}</span> <br/> Photography
            </h1>
            <p className="text-gray-300 mb-8 max-w-md">
              Specializing in fashion, street style, events, and portrait artistry with a signature gold aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/booking" className="btn-gold-shine px-8 py-3 rounded-full font-bold">Let’s Capture The Moment</Link>
              <Link to="/services" className="px-8 py-3 border border-ibis-gold/40 text-ibis-gold rounded-full hover:bg-ibis-gold hover:text-black transition">Explore Services</Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
                alt="Latest work"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border-4 border-ibis-gold/70"></div>
                <div className="absolute top-6 right-6 text-2xl text-ibis-gold">+</div>
                <div className="absolute bottom-8 left-8 text-2xl text-ibis-gold/80">+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HD swipe carousel */}
      <section className="py-16 bg-ibis-card">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-xs tracking-[0.3em] text-gray-400 uppercase">Our Newest Work</div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scrollBy(-600)} className="px-4 py-2 border border-ibis-gold/40 text-ibis-gold rounded">←</button>
              <button onClick={() => scrollBy(600)} className="px-4 py-2 border border-ibis-gold/40 text-ibis-gold rounded">→</button>
            </div>
          </div>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') scrollBy(600);
              if (e.key === 'ArrowLeft') scrollBy(-600);
            }}
            tabIndex={0}
          >
            {[
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200',
              'https://images.unsplash.com/photo-1520975916090-3105956daf54?q=80&w=1200',
              'https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=1200',
              'https://images.unsplash.com/photo-1549388604-817d15aa0110?q=80&w=1200',
            ].map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="min-w-[280px] md:min-w-[360px] snap-center rounded-xl overflow-hidden border border-white/10">
                <img src={src} alt={`work-${i}`} className="w-full h-48 md:h-60 object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-2xl border border-white/10 glass-card">
            <div className="text-xl md:text-2xl font-serif mb-4">
              LET US HELP YOU PRESERVE THE PRECIOUS MOMENTS OF YOUR LIFE!
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm text-gray-400">Choose your vibe:</span>
              {['Cinematic', 'Classic', 'Editorial', 'Playful'].map((label) => (
                <button
                  key={label}
                  onClick={() => setMood(label)}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    mood === label
                      ? 'border-ibis-gold bg-ibis-gold text-black'
                      : 'border-white/15 text-gray-300 hover:border-ibis-gold/60 hover:text-ibis-gold'
                  } transition`}
                >
                  {label}
                </button>
              ))}
              <span className="text-sm text-gray-300 ml-auto">
                Current style: <span className="text-ibis-gold font-semibold">{mood}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-ibis-card">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 section-title-decoration">Our <span className="text-gradient-gold">Expertise</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Discover our range of premium photography services designed to capture every detail of your special moments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FaRing />} 
              title="Wedding & Engagement" 
              desc="Cinematic love stories captured with grandeur and emotion."
              delay={0.1}
            />
            <ServiceCard 
              icon={<FaBaby />} 
              title="Baby & Maternity" 
              desc="Adorable moments of your little ones frozen in time."
              delay={0.2}
            />
            <ServiceCard 
              icon={<FaCamera />} 
              title="Studio Portraits" 
              desc="Professional headshots and creative fashion photography."
              delay={0.3}
            />
            <ServiceCard 
              icon={<FaPhotoVideo />} 
              title="Outdoor Shoots" 
              desc="Natural light photography in scenic and exotic locations."
              delay={0.4}
            />
            <ServiceCard 
              icon={<FaVideo />} 
              title="Cinematic Films" 
              desc="High-quality 4K video production for events and reels."
              delay={0.5}
            />
            <ServiceCard 
              icon={<FaUsers />} 
              title="Family Events" 
              desc="Birthdays, anniversaries, and family gatherings covered beautifully."
              delay={0.6}
            />
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="inline-block border-b border-ibis-gold text-ibis-gold pb-1 hover:text-white hover:border-white transition-colors">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ibis-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-ibis-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <span className="text-ibis-gold font-bold tracking-widest uppercase text-sm mb-2 block">Post-Processing</span>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The Art of <br/> <span className="text-ibis-gold">Retouching</span></h2>
               <p className="text-gray-400 mb-8 leading-relaxed">
                 Great photography is just the beginning. Our expert editors enhance every detail to ensure your photos look flawless yet natural. Slide to see the magic.
               </p>
               <ul className="space-y-4 mb-8 text-gray-300">
                 <li className="flex items-center gap-3"><span className="text-ibis-gold">✓</span> Color Correction & Grading</li>
                 <li className="flex items-center gap-3"><span className="text-ibis-gold">✓</span> Skin Retouching</li>
                 <li className="flex items-center gap-3"><span className="text-ibis-gold">✓</span> Background Removal/Enhancement</li>
               </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-ibis-dark to-ibis-card border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Crafted Quality', desc: 'Editorial-grade curation and delivery' },
              { title: 'Premium Experience', desc: 'White-glove client service' },
              { title: 'Signature Style', desc: 'Iconic gold aesthetic and tone' },
            ].map((it, idx) => (
              <div key={idx} className="p-6 glass-card rounded-2xl">
                <div className="text-2xl font-serif font-bold mb-2 text-ibis-gold">{it.title}</div>
                <div className="text-gray-400">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
