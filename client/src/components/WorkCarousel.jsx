import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogleDrive, FaExternalLinkAlt } from 'react-icons/fa';

const workItems = [
  {
    id: 1,
    title: 'Wedding Highlights',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=800',
    link: 'https://drive.google.com/drive/folders/1FgmzeIcwFm5OmBNI5Yss36J4cne5WxxI?usp=sharing'
  },
  {
    id: 2,
    title: 'Outdoor Shoots',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=800',
    link: 'https://drive.google.com/drive/folders/1_oapHE8t3WfNHq66lSc6kWxq_Yoe0Nw-'
  },
  {
    id: 3,
    title: 'Candid Moments',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    link: 'https://drive.google.com/drive/folders/1FgmzeIcwFm5OmBNI5Yss36J4cne5WxxI?usp=sharing'
  },
  {
    id: 4,
    title: 'Cinematic Films',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=800',
    link: 'https://youtu.be/SyDuzDIzAgY?si=o1Fx2XBJCvGRCkgM'
  }
];

const WorkCarousel = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            Our <span className="text-gradient-gold">Masterpieces</span>
          </h2>
          <p className="text-gray-400">Witness the art of storytelling through our lens.</p>
        </div>
        <a 
          href="https://drive.google.com/drive/folders/1FgmzeIcwFm5OmBNI5Yss36J4cne5WxxI?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-ibis-gold border border-ibis-gold/30 px-6 py-2 rounded-full hover:bg-ibis-gold hover:text-black transition-all"
        >
          <FaGoogleDrive /> View Full Gallery
        </a>
      </div>

      {/* Carousel Container */}
      <div className="flex overflow-x-auto pb-12 px-6 gap-6 scrollbar-hide snap-x">
        {workItems.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="min-w-[300px] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer snap-center border border-white/10"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-ibis-gold text-sm tracking-wider uppercase mb-2 block">{item.category}</span>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-ibis-gold transition-colors text-sm group-hover:translate-x-2 duration-300"
              >
                View Project <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkCarousel;
