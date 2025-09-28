import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Mapple </h2>
          <p className="text-sm leading-6">
            Bringing you the best of Apple-inspired products — iPhones, 
            MacBooks, AirPods, and more. Quality, trust, and style all in one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
            <li><Link to="/cart" className="hover:text-blue-400">Cart</Link></li>
            <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-sm">📍 Kinfra Tech Park, Kakkanchery</p>
          <p className="text-sm">📧 support@mapple.com</p>
          <p className="text-sm">📞 +91 98765 43210</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Mapple . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
