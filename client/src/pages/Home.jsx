import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WorkCarousel from '../components/WorkCarousel';
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ibis-dark via-ibis-card to-ibis-dark"></div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs tracking-[0.4em] text-ibis-gold uppercase mb-4 font-bold">Premium Photography Studio</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6">
              <span className="text-gradient-gold">{ownerName}</span> <br/> 
              <span className="text-white">Artistry</span>
            </h1>
            <p className="text-gray-300 mb-10 max-w-lg text-lg leading-relaxed">
              Based in Tambaram, we specialize in fashion, weddings, and cinematic storytelling with our signature golden aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/booking" className="btn-gold-shine px-10 py-4 rounded-full font-bold text-center">Let’s Capture The Moment</Link>
              <Link to="/services" className="px-10 py-4 border border-ibis-gold/40 text-ibis-gold rounded-full hover:bg-ibis-gold hover:text-black transition text-center">Explore Services</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl h-[500px] lg:h-[600px] group">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
                alt="Latest work"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border-4 border-ibis-gold/30"></div>
                <div className="absolute top-6 right-6 text-2xl text-ibis-gold animate-pulse">+</div>
                <div className="absolute bottom-8 left-8 text-2xl text-ibis-gold/80 animate-pulse">+</div>
              </div>
            </div>
            {/* Decorative floating element */}
            <div className="absolute -bottom-6 -right-6 bg-ibis-gold p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-black font-bold text-xl">100+</div>
              <div className="text-black/70 text-xs font-bold uppercase tracking-tighter">Projects Done</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HD infinite carousel */}
      <WorkCarousel />

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

      {/* Innovative Idea: Testimonials Section */}
      <section className="py-24 bg-ibis-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Client <span className="text-ibis-gold">Stories</span></h2>
            <div className="w-20 h-1 bg-ibis-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ananya R.", role: "Bride", text: "IBIS Studio captured our wedding so beautifully. The gold tones they use are just magical!" },
              { name: "Vikram S.", role: "Model", text: "Best fashion portfolio experience. Their attention to detail and lighting is top-notch." },
              { name: "Meera K.", role: "Parent", text: "The newborn shoot was so patient and professional. We will cherish these photos forever." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-ibis-card border border-white/5 relative"
              >
                <div className="text-ibis-gold text-4xl mb-4 font-serif">“</div>
                <p className="text-gray-300 mb-6 italic">{t.text}</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-ibis-gold text-xs uppercase tracking-widest">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Idea: FAQ Section */}
      <section className="py-24 bg-ibis-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">Common <span className="text-ibis-gold">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "How long does it take to get the photos?", a: "Standard delivery for photos is 7-10 working days, and 15-20 days for cinematic films." },
              { q: "Do you travel for outdoor shoots?", a: "Yes, we travel across India for destination weddings and outdoor sessions." },
              { q: "Can I choose my own music for videos?", a: "Absolutely! We work with you to ensure the mood and music match your vision." }
            ].map((faq, i) => (
              <details key={i} className="group glass-card rounded-2xl border border-white/5">
                <summary className="p-6 cursor-pointer font-bold text-lg flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-ibis-gold group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-ibis-gold-dark to-ibis-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-8">Ready to create your story?</h2>
          <Link to="/booking" className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-2xl">
            Book Your Session Now
          </Link>
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

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-ibis-gold-dark to-ibis-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-8">Ready to create your story?</h2>
          <Link to="/booking" className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-2xl">
            Book Your Session Now
          </Link>
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
