import React from 'react';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-ibis-dark text-white relative overflow-hidden">
      <div className="grain-overlay"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--color-ibis-gold)_0%,_transparent_20%)] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image/Video Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000" 
                alt="Photographer at work" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-ibis-gold rounded-2xl -z-0 opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-white/20 rounded-2xl -z-0"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              We Are <span className="text-gradient-gold">IBIS Studio</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed font-light">
              Located in the heart of <span className="text-ibis-gold font-semibold">Tambaram</span>, we are a premium photography and videography studio dedicated to turning your fleeting moments into eternal masterpieces.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              With years of experience and a passion for storytelling, our team combines technical expertise with artistic vision. From the grandeur of weddings to the intimacy of newborn shoots, we approach every project with the same level of dedication and creativity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <FaCameraRetro className="text-3xl text-ibis-gold mx-auto mb-3" />
                <h3 className="font-bold text-white">Premium Gear</h3>
                <p className="text-xs text-gray-400 mt-1">Sony & Canon Cinema Line</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <FaAward className="text-3xl text-ibis-gold mx-auto mb-3" />
                <h3 className="font-bold text-white">Award Winning</h3>
                <p className="text-xs text-gray-400 mt-1">Recognized Excellence</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <FaHeart className="text-3xl text-ibis-gold mx-auto mb-3" />
                <h3 className="font-bold text-white">Passion Driven</h3>
                <p className="text-xs text-gray-400 mt-1">We Love What We Do</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="/contact" className="btn-gold-shine px-8 py-3 rounded-lg font-bold text-black">
                Contact Us
              </a>
              <a href="https://drive.google.com/drive/folders/1FgmzeIcwFm5OmBNI5Yss36J4cne5WxxI?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-ibis-gold text-ibis-gold rounded-lg hover:bg-ibis-gold hover:text-black transition-all">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
