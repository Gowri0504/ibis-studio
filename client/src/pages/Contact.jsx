import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-ibis-dark text-white relative overflow-hidden">
      <div className="grain-overlay"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ibis-gold/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 section-title-decoration"
          >
            Get in <span className="text-gradient-gold">Touch</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Whether it's a wedding inquiry or a simple question, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border-l-4 border-ibis-gold">
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-ibis-gold/10 flex items-center justify-center text-ibis-gold text-xl flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Our Studio</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Ibis Studio, JJ Garden Road,<br />
                      Alapakkam Mappedu Rd, Puthur,<br />
                      Tambaram, Tamil Nadu 600126
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/Qy43Di11b3okfSsk7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ibis-gold mt-2 text-sm hover:underline"
                    >
                      View on Google Maps <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-ibis-gold/10 flex items-center justify-center text-ibis-gold text-xl flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone & WhatsApp</h4>
                    <p className="text-gray-400 mb-2">+91 80723 19273</p>
                    <a 
                      href="https://wa.me/918072319273" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600/20 text-green-500 px-4 py-2 rounded-lg hover:bg-green-600/30 transition-colors"
                    >
                      <FaWhatsapp /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-ibis-gold/10 flex items-center justify-center text-ibis-gold text-xl flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                    <p className="text-gray-400">contact@ibisstudio.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[500px] glass-card rounded-2xl overflow-hidden p-2 relative"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.667822453629!2d80.0899!3d12.9291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f50000000001%3A0x1d43d11b3okfSsk7!2sIbis%20Studio!5e0!3m2!1sen!2sin!4v1635763200000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0, borderRadius: '1rem', filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)' }} 
               allowFullScreen="" 
               loading="lazy"
               title="IBIS Studio Location"
             ></iframe>
             <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-ibis-gold/30 max-w-xs">
                <p className="text-xs text-gray-300">Note: Map view is stylized. Click "View on Google Maps" for precise navigation.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
