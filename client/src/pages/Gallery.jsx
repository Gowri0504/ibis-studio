import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus } from 'react-icons/fa';

const initialItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', cat: 'Wedding' },
  { id: 2, src: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=800', cat: 'Portrait' },
  { id: 3, src: 'https://images.unsplash.com/photo-1523438885209-e0793309c961?q=80&w=800', cat: 'Event' },
  { id: 4, src: 'https://images.unsplash.com/photo-1593697821252-a2c973773d8d?q=80&w=800', cat: 'Video' },
  { id: 5, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800', cat: 'Fashion' },
  { id: 6, src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800', cat: 'Maternity' },
];

const moreItems = [
  { id: 7, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800', cat: 'Corporate' },
  { id: 8, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800', cat: 'Architecture' },
  { id: 9, src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800', cat: 'Cinematic' },
];

const Gallery = () => {
  const [items, setItems] = useState(initialItems);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-ibis-dark text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-center mb-6 section-title-decoration"
        >
          Our <span className="text-gradient-gold">Portfolio</span>
        </motion.h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">A curated selection of our finest work, showcasing our passion for storytelling and our signature golden aesthetic.</p>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl group relative border border-white/10 break-inside-avoid"
            >
              <img src={item.src} alt={item.cat} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="text-right">
                  <span className="bg-ibis-gold text-black text-xs font-bold px-3 py-1 rounded-full">{item.cat}</span>
                </div>
                <div className="text-center">
                  <FaSearchPlus className="text-white text-3xl opacity-80" />
                </div>
                <div></div>
              </div>
            </motion.div>
          ))}
        </div>

        {!loaded && (
          <div className="text-center mt-12">
            <button 
              onClick={() => { setItems([...items, ...moreItems]); setLoaded(true); }}
              className="btn-gold-shine px-8 py-3 rounded-full font-bold"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
