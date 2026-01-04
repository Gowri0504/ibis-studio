import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-ibis-gold mb-4">IBIS Studio</h3>
          <p className="mb-4">Capture Your Moments with IBIS Studio. Professional photography and videography services for all occasions.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-ibis-gold"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-ibis-gold"><FaFacebook /></a>
            <a href="https://youtu.be/SyDuzDIzAgY" className="text-2xl hover:text-ibis-gold"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-ibis-gold">About Us</a></li>
            <li><a href="/services" className="hover:text-ibis-gold">Services</a></li>
            <li><a href="/gallery" className="hover:text-ibis-gold">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-ibis-gold">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-ibis-gold" />
              <span>IBIS Studio, JJ Garden Road, Alapakkam Mappedu Rd, Puthur, Tambaram, Tamil Nadu 600126</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-ibis-gold" />
              <a href="tel:+918072319273" className="hover:text-white">+91 80723 19273</a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-ibis-gold" />
              <a href="https://wa.me/918072319273" className="hover:text-white">Chat on WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 pt-4 border-t border-gray-900">
        <p>&copy; {new Date().getFullYear()} IBIS Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
