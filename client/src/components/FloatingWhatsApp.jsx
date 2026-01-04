import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/918072319273"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] group hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-75"></div>
      <FaWhatsapp className="text-4xl text-white" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
