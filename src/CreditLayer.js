import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './CreditLayer.css'; // Import CSS untuk styling

const CreditLayer = () => {
  return (
    <footer className="credit-layer bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Bagian Kiri - Logo & Copyright */}
        <div className="flex flex-col items-start md:items-center text-center">
          <p className="text-sm md:text-base">&copy; 2024 Sawitech. All Rights Reserved.</p>
          <p className="text-xs md:text-sm mt-1">Project by: <span className="font-bold text-orange-500">IT Developer Sawitech</span></p>
        </div>

        {/* Bagian Tengah - Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Bagian Kanan - Link Navigasi */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/about" className="text-sm md:text-base hover:text-orange-500">About Us</a>
          <a href="/privacy" className="text-sm md:text-base hover:text-orange-500">Privacy Policy</a>
          <a href="/contact" className="text-sm md:text-base hover:text-orange-500">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default CreditLayer;