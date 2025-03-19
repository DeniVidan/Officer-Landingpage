import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll to Change Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white shadow-lg sm:bg-transparent sm:shadow-none"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex lg:justify-center md:justify-between items-center sm:py-3 md:py-6 px-4 lg:px-6">
        {/* SECOND DIV: changes from transparent to glass effect on scroll for sm+ */}
        <div
          className={`
            w-full lg:w-[1000px] mx-auto flex justify-between items-center
            md:border-2 border-0 border-gray-700 rounded-full px-4 py-2
            transition-all duration-300
            ${
              isScrolled
                ? "sm:bg-black/30 sm:backdrop-blur-xl sm:shadow-lg border-transparent"
                : "sm:bg-transparent"
            }
          `}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              <img
                src="/logo_temp.svg"
                alt="Officer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-lg font-semibold text-white">Officer</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 text-gray-200 font-medium mix-blend-difference">
            <li>
              <Link to="/" className="hover:text-gray-200 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-black cursor-pointer">
                Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black cursor-pointer">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-black cursor-pointer">
                About us
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-black cursor-pointer">
                Features
              </Link>
            </li>
          </ul>

          <button className="hidden lg:block bg-white text-black rounded-full px-4 py-2">
            Free trial
          </button>

          {/* Mobile Menu Button with Animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-transparent p-2 rounded-full focus:outline-none focus:ring-0 active:ring-0 z-50"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <XMarkIcon className={`h-6 w-6 ${isScrolled ? 'text-black sm:text-white' : 'text-white'}`} />
              ) : (
                <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-black sm:text-white' : 'text-white'}`} />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute sm:top-14 md:top-24 left-0 right-0 lg:hidden bg-[#00509D] w-auto mx-8 mt-5 px-6 py-4 flex flex-col space-y-4 shadow-lg z-40 rounded-2xl"
        >
          <ul className="space-y-4 text-gray-200 font-medium text-start">
            <li>
              <Link
                to="/"
                className="hover:text-black cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-black cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-black cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="hover:text-black cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
            </li>
          </ul>
          <button className="bg-white text-black rounded-full px-4 py-2 w-full">
            Free trial
          </button>
        </motion.div>
      )}
    </nav>
  );
}
