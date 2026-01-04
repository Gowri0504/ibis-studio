import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ReelsSection from '../components/ReelsSection';
import WorkCarousel from '../components/WorkCarousel';
import YouTubeEmbed from '../components/YouTubeEmbed';
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
  return (
    <div className="min-h-screen bg-ibis-dark text-white overflow-hidden relative">
      <div className="grain-overlay"></div>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-golden-glitters-in-a-dark-room-in-motion-41830-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-ibis-dark mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Golden Particles/Glow */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--color-ibis-gold)_0%,_transparent_70%)] blur-[100px]"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Removed text as requested */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Capture Your <br />
              <span className="text-gradient-gold italic relative inline-block">
                Moments
                <span className="absolute -top-4 -right-8 text-4xl animate-bounce">✨</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              We don't just take pictures; we craft timeless memories with elegance, passion, and perfection.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link to="/booking" className="btn-gold-shine px-10 py-4 rounded-full font-bold tracking-wider uppercase">
                Book Appointment
              </Link>
              <Link to="/gallery" className="px-10 py-4 border border-white/30 text-white hover:border-ibis-gold hover:text-ibis-gold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/5 font-medium tracking-wide">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-ibis-gold to-transparent mx-auto"></div>
          <span className="text-[10px] tracking-[0.2em] uppercase mt-3 block text-ibis-gold">Scroll</span>
        </motion.div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-ibis-dark relative">
         <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Cinematic <span className="text-gradient-gold">Experience</span></h2>
               <p className="text-gray-400">Watch our latest highlight reel.</p>
            </div>
            <div className="max-w-4xl mx-auto">
               <YouTubeEmbed videoId="SyDuzDIzAgY" />
            </div>
         </div>
      </section>

      {/* Work Carousel Section */}
      <WorkCarousel />

      {/* Services Section */}
      <section className="py-24 relative bg-[#0F0F0F]">
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

      {/* Magic Editing Section */}
      <section className="py-24 bg-ibis-card relative overflow-hidden">
        {/* Decorative elements */}
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

      {/* Reels Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trending <span className="text-ibis-gold">Reels</span></h2>
            <p className="text-gray-400">Catch the vibe of our latest shoots</p>
          </div>
          <ReelsSection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-ibis-dark to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "10k+", label: "Photos Clicked" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-ibis-gold mb-2">{stat.number}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
