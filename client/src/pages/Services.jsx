import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRing, FaBaby, FaCamera, FaUserTie, FaBuilding, FaVideo, FaCalculator, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    icon: <FaRing />,
    description: 'Capturing the eternal bond of love with cinematic grandeur. We document every tear, smile, and ritual with artistic precision.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    delay: 0.1
  },
  {
    id: 2,
    title: 'Maternity & Baby',
    icon: <FaBaby />,
    description: 'Preserving the innocence and joy of new beginnings. From baby bumps to first steps, we create adorable memories.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800',
    delay: 0.2
  },
  {
    id: 3,
    title: 'Fashion & Modeling',
    icon: <FaCamera />,
    description: 'High-end editorial and portfolio shoots for aspiring models and fashion brands. Unleash your inner star.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800',
    delay: 0.3
  },
  {
    id: 4,
    title: 'Corporate Events',
    icon: <FaUserTie />,
    description: 'Professional coverage for conferences, product launches, and corporate headshots that elevate your brand image.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
    delay: 0.4
  },
  {
    id: 5,
    title: 'Architecture & Interiors',
    icon: <FaBuilding />,
    description: 'Showcasing spaces with perfect lighting and composition. Ideal for real estate, hotels, and architects.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    delay: 0.5
  },
  {
    id: 6,
    title: 'Cinematography',
    icon: <FaVideo />,
    description: 'Beyond still images, we craft storytelling films that bring your events to life with emotion and movement.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800',
    delay: 0.6
  }
];

const pricing = [
  {
    id: 1,
    name: 'Wedding Photography – Full Day',
    detail: 'Candid and traditional coverage, edited images, online gallery',
    startingFrom: '₹25,000'
  },
  {
    id: 2,
    name: 'Reception / Event Coverage',
    detail: 'Up to 4 hours coverage with edited highlights',
    startingFrom: '₹12,000'
  },
  {
    id: 3,
    name: 'Maternity / Baby Shoot',
    detail: 'Studio or outdoor session with curated props',
    startingFrom: '₹8,000'
  },
  {
    id: 4,
    name: 'Portfolio / Fashion Shoot',
    detail: 'Model portfolio with multiple looks and lighting setups',
    startingFrom: '₹10,000'
  },
  {
    id: 5,
    name: 'Cinematic Video Package',
    detail: 'Highlight film with licensed music and color grading',
    startingFrom: '₹18,000'
  },
  {
    id: 6,
    name: 'Family / Group Session',
    detail: 'Indoor or outdoor shoot for families and celebrations',
    startingFrom: '₹9,500'
  }
];

const Services = () => {
  const [calc, setCalc] = useState({
    service: 'Wedding',
    hours: 4,
    location: 'Studio',
    extras: []
  });

  const getEstimate = () => {
    let base = calc.service === 'Wedding' ? 15000 : calc.service === 'Event' ? 8000 : 5000;
    let hourly = calc.service === 'Wedding' ? 3000 : 2000;
    let total = base + (calc.hours * hourly);
    if (calc.location === 'Outdoor') total += 3000;
    if (calc.extras.includes('Cinematic Retouching')) total += 5000;
    if (calc.extras.includes('Physical Album')) total += 8000;
    if (calc.extras.includes('Drone Coverage')) total += 10000;
    return total.toLocaleString('en-IN');
  };

  const toggleExtra = (extra) => {
    setCalc(prev => ({
      ...prev,
      extras: prev.extras.includes(extra) 
        ? prev.extras.filter(e => e !== extra) 
        : [...prev.extras, extra]
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-ibis-dark text-white relative overflow-hidden">
      <div className="grain-overlay"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-ibis-gold/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 section-title-decoration"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We offer a comprehensive suite of photography and videography services tailored to meet your unique needs with elegance and style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-ibis-gold text-xl border border-ibis-gold/30">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold mb-3 text-white group-hover:text-ibis-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  to="/booking" 
                  className="inline-block text-center py-3 border border-ibis-gold/30 rounded-lg text-ibis-gold hover:bg-ibis-gold hover:text-black transition-all duration-300 font-medium tracking-wide"
                >
                  BOOK NOW
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
              Photography Price List
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Indicative starting prices for popular services. Final quotation will be shared after understanding your exact requirements and dates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item) => (
              <div key={item.id} className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-lg font-semibold text-white mb-2">{item.name}</div>
                  <div className="text-sm text-gray-400 mb-4">{item.detail}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Starting From</div>
                    <div className="text-ibis-gold text-2xl font-bold">{item.startingFrom}</div>
                  </div>
                  <Link
                    to="/booking"
                    className="px-4 py-2 rounded-full text-xs font-semibold border border-ibis-gold/40 text-ibis-gold hover:bg-ibis-gold hover:text-black transition"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovative Feature: Interactive Pricing Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass-card rounded-3xl p-8 md:p-12 border border-ibis-gold/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-ibis-gold/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-ibis-gold/10 flex items-center justify-center text-ibis-gold text-2xl">
                  <FaCalculator />
                </div>
                <h2 className="text-3xl font-serif font-bold">Price Estimator</h2>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Use our interactive tool to get an instant estimate for your customized session. Select your service, duration, and any premium add-ons you desire.
              </p>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Type of Service</label>
                  <div className="flex flex-wrap gap-3">
                    {['Wedding', 'Event', 'Portrait'].map(s => (
                      <button 
                        key={s}
                        onClick={() => setCalc({...calc, service: s})}
                        className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${
                          calc.service === s 
                          ? 'bg-ibis-gold border-ibis-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                          : 'border-white/10 text-gray-400 hover:border-ibis-gold/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Coverage Duration: {calc.hours} Hours</label>
                  <input 
                    type="range" min="1" max="12" step="1" 
                    value={calc.hours}
                    onChange={(e) => setCalc({...calc, hours: parseInt(e.target.value)})}
                    className="w-full accent-ibis-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-2 uppercase tracking-widest">
                    <span>1 Hr</span>
                    <span>6 Hrs</span>
                    <span>12 Hrs</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Premium Add-ons</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Cinematic Retouching', 'Physical Album', 'Drone Coverage'].map(extra => (
                      <button 
                        key={extra}
                        onClick={() => toggleExtra(extra)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                          calc.extras.includes(extra)
                          ? 'bg-ibis-gold/10 border-ibis-gold text-ibis-gold'
                          : 'border-white/5 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                          calc.extras.includes(extra) ? 'bg-ibis-gold border-ibis-gold text-black' : 'border-white/20'
                        }`}>
                          {calc.extras.includes(extra) && <FaCheckCircle size={12} />}
                        </div>
                        <span className="text-sm font-medium">{extra}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-ibis-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Estimated Investment</div>
                <div className="text-5xl md:text-6xl font-serif font-bold text-gradient-gold mb-4">
                  ₹{getEstimate()}
                </div>
                <p className="text-xs text-gray-500 mb-8 max-w-xs mx-auto italic">
                  *This is an indicative estimate. Travel and specific venue requirements may apply.
                </p>
                <Link 
                  to="/booking" 
                  className="btn-gold-shine w-full py-4 rounded-xl font-bold text-black uppercase tracking-widest inline-block"
                >
                  Proceed to Booking
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
