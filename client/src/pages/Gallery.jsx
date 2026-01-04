import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-ibis-dark text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-ibis-gold">Our Portfolio</h1>
        <p className="text-center text-gray-400 mb-12">Explore our collection of captured moments.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Gallery Items - Placeholders since we don't have direct image URLs yet */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden h-64 relative group"
            >
              <img 
                src={`https://source.unsplash.com/random/800x600?wedding,portrait,${item}`} 
                alt="Gallery Item" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                <span className="text-ibis-gold font-bold">View Full</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-xl">View our complete collection on Google Drive:</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="https://drive.google.com/drive/folders/1FgmzeIcwFm5OmBNI5Yss36J4cne5WxxI?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-ibis-card border border-ibis-gold text-ibis-gold px-6 py-3 rounded hover:bg-ibis-gold hover:text-black transition"
            >
              View Wedding & Event Photos
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1_oapHE8t3WfNHq66lSc6kWxq_Yoe0Nw-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-ibis-card border border-ibis-gold text-ibis-gold px-6 py-3 rounded hover:bg-ibis-gold hover:text-black transition"
            >
              View More Collections
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
