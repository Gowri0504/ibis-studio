import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const UserDashboard = () => {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5001/api/media/mine', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setMedia(res.data)).catch(() => setMedia([]));
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-ibis-dark text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold mb-6">My Media</h1>
        <p className="text-gray-400 mb-12">Download your photos and videos uploaded by the studio.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {media.map(item => (
            <motion.div key={item._id} whileHover={{ scale: 1.03 }} className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-video bg-black">
                {item.type === 'video' ? (
                  <video src={item.url} controls className="w-full h-full object-cover" />
                ) : (
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold">{item.title}</h3>
                  <p className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString()}</p>
                </div>
                <a href={item.url} download className="px-4 py-2 rounded bg-ibis-gold text-black font-bold">Download</a>
              </div>
            </motion.div>
          ))}
          {media.length === 0 && (
            <div className="text-gray-400">No media yet. The studio will upload to your account.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
