import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaCamera, FaCheckCircle, FaComments } from 'react-icons/fa';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Wedding Photography',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      
      const text = `Hi IBIS Studio, I want to book a photoshoot.%0AName: ${formData.name}%0AService: ${formData.serviceType}%0ADate: ${formData.date}`;
      window.open(`https://wa.me/918072319273?text=${text}`, '_blank');
      
      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error('Booking Error:', error);
      setLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-ibis-dark text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-10 rounded-2xl text-center max-w-md w-full border border-ibis-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative z-10"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-5xl text-green-500" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">Booking Requested!</h2>
          <p className="mb-8 text-gray-300 leading-relaxed">Thank you, <span className="text-ibis-gold">{formData.name}</span>. We have received your details. We will contact you shortly to confirm your slot.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-ibis-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors"
          >
            Book Another Session
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-ibis-dark text-white relative">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ibis-gold/5 rounded-full blur-[100px]"></div>
       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:w-1/3 pt-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Create <br/><span className="text-ibis-gold">Magic</span></h1>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ready to capture your special moments? Fill out the form to schedule your session. We'll get back to you with a custom quote and availability.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ibis-gold">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Call Us</p>
                  <p className="font-medium">+91 80723 19273</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ibis-gold">
                  <FaComments />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-medium">Chat for Quick Reply</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3 w-full glass-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-gray-400 text-sm mb-2 ml-1">Your Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-ibis-gold transition-colors" />
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white focus:border-ibis-gold focus:outline-none focus:ring-1 focus:ring-ibis-gold transition-all"
                      placeholder="Gowri D"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-gray-400 text-sm mb-2 ml-1">Phone Number</label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-ibis-gold transition-colors" />
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white focus:border-ibis-gold focus:outline-none focus:ring-1 focus:ring-ibis-gold transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-gray-400 text-sm mb-2 ml-1">Service Type</label>
                <div className="relative">
                  <FaCamera className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-ibis-gold transition-colors" />
                  <select 
                    name="serviceType" 
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white focus:border-ibis-gold focus:outline-none focus:ring-1 focus:ring-ibis-gold transition-all appearance-none cursor-pointer"
                  >
                    <option>Wedding Photography</option>
                    <option>Family Photoshoot</option>
                    <option>Baby Shoot</option>
                    <option>Outdoor Shoot</option>
                    <option>Passport/ID Photo</option>
                    <option>Videography</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-gray-400 text-sm mb-2 ml-1">Preferred Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-ibis-gold transition-colors" />
                    <input 
                      type="date" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white focus:border-ibis-gold focus:outline-none focus:ring-1 focus:ring-ibis-gold transition-all"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-gray-400 text-sm mb-2 ml-1">Preferred Time</label>
                  <div className="relative">
                    <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-ibis-gold transition-colors" />
                    <input 
                      type="time" 
                      name="time" 
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white focus:border-ibis-gold focus:outline-none focus:ring-1 focus:ring-ibis-gold transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-gray-400 text-sm mb-2 ml-1">Message (Optional)</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-white focus:border-ibis-gold focus:outline-none focus:ring-1 focus:ring-ibis-gold transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-gold-shine text-black font-bold py-4 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
              >
                {loading ? 'Submitting...' : 'CONFIRM BOOKING'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
