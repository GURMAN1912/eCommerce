import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">E-Commerce</h2>
          <p className="text-gray-300">
            Your one-stop shop for quality products and unbeatable deals. We bring convenience and variety to your shopping experience.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-secondary transition">Home</a></li>
            <li><a href="#" className="hover:text-secondary transition">Shop</a></li>
            <li><a href="#" className="hover:text-secondary transition">About Us</a></li>
            <li><a href="#" className="hover:text-secondary transition">Contact</a></li>
            <li><a href="#" className="hover:text-secondary transition">FAQs</a></li>
          </ul>
        </div>

        {/* Contact & Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300">Noida,Uttar Pardesh</p>
          <p className="text-gray-300">Email: gurmansambhi1912@gmail.com</p>
          <p className="text-gray-300">Phone: 1234567890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-secondary transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-100">
        <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
