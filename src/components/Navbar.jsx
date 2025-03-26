import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  // Check if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

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
            <h1 className={`text-lg font-semibold ${isScrolled && window.innerWidth < 640 ? "text-black" : "text-white"}`}>Officer</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 text-gray-200 font-medium mix-blend-difference">
            {[
              { path: "/", label: "Home" },
              { path: "/pricing", label: "Pricing" },
              { path: "/contact", label: "Contact" },
              { path: "/about-us", label: "Company" },
              { path: "/features", label: "Features" },
            ].map((item) => (
              <li key={item.path} className="relative ">
                <Link
                  to={item.path}
                  className="relative group px-2 py-1 inline-block overflow-hidden"
                >
                  {/* Background highlight for active link */}
                  {isLinkActive(item.path) && (
                    <motion.span
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md -z-10"
                      layoutId="desktopActiveLink"
                    />
                  )}
                  
                  {/* Dot indicator for active link */}
                  <motion.span
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: isLinkActive(item.path) ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  <span className={`relative z-10 transition-colors duration-300${isLinkActive(item.path) ? "text-white" : "text-gray-300"}`}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
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
            {[
              { path: "/", label: "Home" },
              { path: "/pricing", label: "Pricing" },
              { path: "/contact", label: "Contact" },
              { path: "/about-us", label: "Company" },
              { path: "/features", label: "Features" },
            ].map((item) => (
              <li key={item.path} className="relative py-1">
                <Link
                  to={item.path}
                  className="cursor-pointer group relative inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Glowing effect for active mobile link */}
                  {isLinkActive(item.path) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(56,189,248,0.6)]"
                    />
                  )}
                  
                  <span className={`relative transition-all duration-300 ${
                    isLinkActive(item.path) 
                      ? "text-cyan-300 font-bold pl-1" 
                      : "text-gray-200"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-white text-black rounded-full px-4 py-2 w-full">
            Free trial
          </button>
        </motion.div>
      )}
    </nav>
  );
}