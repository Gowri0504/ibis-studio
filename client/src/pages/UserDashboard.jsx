import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../utils/api';

const UserDashboard = () => {
  const [media, setMedia] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [review, setReview] = useState({ id: '', rating: 5, comment: '' });
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${API_BASE_URL}/api/media/mine`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setMedia(res.data)).catch(() => setMedia([]));
    axios.get(`${API_BASE_URL}/api/bookings/mine`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setBookings(res.data)).catch(() => setBookings([]));
  }, []);
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
    <div className="min-h-screen pt-28 pb-20 bg-ibis-dark text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold mb-6">My Dashboard</h1>
        <p className="text-gray-400 mb-12">Your uploaded media and booking status.</p>
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
