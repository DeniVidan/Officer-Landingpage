import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">OFFICER</span>
              <span className="ml-1 bg-blue-500 h-2 w-2 rounded-full"></span>
            </div>
            <p className="text-slate-400 text-sm text-font">
              Streamlining asset management with powerful tools and solutions for modern enterprises.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Our Platform', 'Solutions', 'Pricing', 'Case Studies', 'Resources'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {['Asset Tracking', 'Financial Management', 'Inventory Control', 'Digital Asset Management', 'Analytics'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                    <ChevronRight size={14} className="mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                <span>123 Business Avenue, Financial District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-400 flex-shrink-0" />
                <span>contact@officercompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 text-font">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Officer Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;