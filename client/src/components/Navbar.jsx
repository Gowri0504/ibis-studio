import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50 flex items-center gap-2 group">
          <div className="relative">
             <img 
               src="https://drive.google.com/uc?export=view&id=146e4xexKKjZEZBGK2RUMq43jHaH0fDLc" 
               alt="IBIS Studio" 
               className="h-12 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
               onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextSibling.style.display = 'block';
               }}
             />
             <div className="hidden text-2xl md:text-3xl font-serif font-bold tracking-wider">
               <span className="text-ibis-gold">IBIS</span> 
               <span className="text-white ml-2">STUDIO</span>
             </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-medium tracking-[0.15em] hover:text-ibis-gold transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-ibis-gold' : 'text-gray-300'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-ibis-gold to-transparent transition-all duration-300 group-hover:w-full ${
                location.pathname === link.path ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
          
          <a 
            href="https://wa.me/918072319273" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gold-shine px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2"
          >
            <FaWhatsapp className="text-lg" /> CHAT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-ibis-gold z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-2xl font-serif text-white hover:text-ibis-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/918072319273"
                className="text-xl text-green-500 flex items-center justify-center gap-2 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp /> WhatsApp Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
