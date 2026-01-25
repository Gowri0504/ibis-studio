import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-ibis-dark text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-ibis-gold">Our Portfolio</h1>
        <p className="text-center text-gray-400 mb-12">Explore our collection of captured moments.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden border border-white/10 glass-card">
            <div className="p-4 text-ibis-gold font-semibold">Wedding & Event Photos</div>
            <iframe
              src="https://drive.google.com/embeddedfolderview?id=1FgmzeIcwFm5OmBNI5Yss36J4cne5WxxI#grid"
              className="w-full h-[520px] bg-black"
              title="Drive Wedding & Events"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden border border-white/10 glass-card">
            <div className="p-4 text-ibis-gold font-semibold">More Collections</div>
            <iframe
              src="https://drive.google.com/embeddedfolderview?id=1_oapHE8t3WfNHq66lSc6kWxq_Yoe0Nw-#grid"
              className="w-full h-[520px] bg-black"
              title="Drive More Collections"
            />
          </motion.div>
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
