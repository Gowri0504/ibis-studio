import React from 'react';
import { motion } from 'framer-motion';
import { FaRing, FaBaby, FaCamera, FaUserTie, FaBuilding, FaVideo } from 'react-icons/fa';
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

const Services = () => {
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
      </div>
    </div>
  );
};

export default Services;
