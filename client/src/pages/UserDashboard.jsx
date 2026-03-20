import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '../utils/api';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';

const UserDashboard = () => {
  const [media, setMedia] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [review, setReview] = useState({ id: '', rating: 5, comment: '' });
  const [slideshowIdx, setSlideshowIdx] = useState(-1);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${API_BASE_URL}/api/media/mine`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setMedia(res.data)).catch(() => setMedia([]));
    axios.get(`${API_BASE_URL}/api/bookings/mine`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setBookings(res.data)).catch(() => setBookings([]));
  }, []);

  const nextSlide = () => setSlideshowIdx((i) => (i + 1) % media.length);
  const prevSlide = () => setSlideshowIdx((i) => (i - 1 + media.length) % media.length);
  const submitReview = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.patch(`${API_BASE_URL}/api/bookings/${review.id}/review`, {
        rating: review.rating,
        comment: review.comment
      }, { headers: { Authorization: `Bearer ${token}` } });
      const res = await axios.get(`${API_BASE_URL}/api/bookings/mine`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
      setReview({ id: '', rating: 5, comment: '' });
    } catch {
      // ignore for now
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-ibis-dark text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2 tracking-tight">Client <span className="text-ibis-gold">Portal</span></h1>
            <p className="text-gray-400">Manage your bookings and view your high-resolution deliveries.</p>
          </div>
          {media.length > 0 && (
            <button 
              onClick={() => setSlideshowIdx(0)}
              className="flex items-center gap-3 bg-ibis-gold/10 border border-ibis-gold text-ibis-gold px-8 py-4 rounded-2xl hover:bg-ibis-gold hover:text-black transition-all duration-300 font-bold group"
            >
              <FaPlay className="group-hover:scale-110 transition-transform" />
              LAUNCH SLIDESHOW
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {media.map((item, idx) => (
            <motion.div 
              key={item._id} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }} 
              className="glass-card rounded-2xl overflow-hidden border border-white/10 group relative"
            >
              <div className="aspect-video bg-black relative overflow-hidden">
                <div 
                  onClick={() => setSlideshowIdx(idx)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-ibis-gold text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <FaPlay />
                  </div>
                </div>
                {item.type === 'video' ? (
                  <video src={item.url} className="w-full h-full object-cover" />
                ) : (
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                )}
              </div>
              <div className="p-5 flex items-center justify-between bg-black/20">
                <div>
                  <h3 className="font-serif font-bold text-white">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{new Date(item.createdAt).toLocaleDateString()}</p>
                </div>
                <a 
                  href={item.url} 
                  download 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-ibis-gold hover:text-black hover:border-ibis-gold transition-all"
                >
                  <FaDownload size={14} />
                </a>
              </div>
            </motion.div>
          ))}
          {media.length === 0 && (
            <div className="md:col-span-3 py-20 text-center glass-card rounded-3xl border border-dashed border-white/10">
              <div className="text-gray-500 mb-2">No media has been uploaded yet.</div>
              <p className="text-xs text-gray-600">The studio will notify you once your gallery is ready.</p>
            </div>
          )}
        </div>

        {/* Slideshow Modal */}
        <AnimatePresence>
          {slideshowIdx >= 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            >
              <button 
                onClick={() => setSlideshowIdx(-1)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-colors z-[110]"
              >
                <FaTimes size={20} />
              </button>

              <button 
                onClick={prevSlide}
                className="absolute left-4 md:left-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-ibis-gold hover:text-black transition-all z-[110]"
              >
                <FaChevronLeft size={20} />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-4 md:right-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-ibis-gold hover:text-black transition-all z-[110]"
              >
                <FaChevronRight size={20} />
              </button>

              <div className="w-full h-full flex flex-col items-center justify-center relative">
                <motion.div 
                  key={slideshowIdx}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  className="max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center"
                >
                  {media[slideshowIdx].type === 'video' ? (
                    <video src={media[slideshowIdx].url} controls autoPlay className="max-w-full max-h-full rounded-2xl shadow-2xl" />
                  ) : (
                    <img src={media[slideshowIdx].url} alt={media[slideshowIdx].title} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" />
                  )}
                </motion.div>
                
                <div className="mt-8 text-center">
                  <h2 className="text-2xl font-serif font-bold text-ibis-gold">{media[slideshowIdx].title}</h2>
                  <p className="text-gray-400 text-sm mt-1">{slideshowIdx + 1} of {media.length}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold mb-6">My Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map(b => (
              <div key={b._id} className="p-4 border border-white/10 rounded-lg glass-card">
                <div className="font-bold">{b.serviceType}</div>
                <div className="text-sm text-gray-400">{new Date(b.date).toLocaleDateString()} {b.time}</div>
                <div className="text-xs text-gray-500">Status: {b.status}</div>
                {b.adminResponse && <div className="text-xs text-gray-500">Studio: {b.adminResponse}</div>}
                <div className="mt-3">
                  {b.userReview ? (
                    <div className="text-sm text-gray-300">
                      Your Review: {b.userReview.rating}★ — {b.userReview.comment}
                    </div>
                  ) : (
                    <form onSubmit={submitReview} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <select value={review.id === b._id ? review.rating : 5} onChange={e => setReview({ ...review, id: b._id, rating: Number(e.target.value) })} className="bg-black/40 border border-gray-700 rounded p-2 text-white">
                        {[5,4,3,2,1].map(v => <option key={v} value={v}>{v}★</option>)}
                      </select>
                      <input placeholder="Write a review" value={review.id === b._id ? review.comment : ''} onChange={e => setReview({ ...review, id: b._id, comment: e.target.value })} className="bg-black/40 border border-gray-700 rounded p-2 text-white" />
                      <button className="btn-gold-shine rounded px-4 py-2">Submit</button>
                    </form>
                  )}
                </div>
              </div>
            ))}
            {bookings.length === 0 && <div className="text-gray-500">No bookings found.</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
