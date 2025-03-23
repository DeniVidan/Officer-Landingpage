import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq({ 
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our platform",
  faqs = [],
  contactText = "Still have questions?",
  contactButtonText = "Contact Support",
  onContactClick,
  backgroundColor = "transparent",
  textColor = "white",
  accentColor = "blue-400"
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section 
      className={`relative py-24 text-${textColor} text-center mx-2 md:mx-0 rounded-3xl overflow-hidden`}
      style={{ backgroundColor }}
    >
      {/* Background image with proper gradient mask */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="faq-decoration.svg" 
            alt="" 
            className="absolute top-0 inset-0 w-full h-full object-cover z-0" 
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #0000003b 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 65%, #0000003b 100%)',
              opacity: '0.7'
            }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 title-font">{title}</h2>
        <p className={`text-${accentColor} mb-12 max-w-2xl mx-auto`}>
          {subtitle}
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`w-6 h-6 flex items-center justify-center bg-${accentColor}/20 rounded-full`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-0 text-left border-t border-white/10">
                      <p className={`text-${accentColor} py-5`}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {(contactText || contactButtonText) && (
          <div className="mt-12">
            {contactText && <p className={`text-${accentColor} mb-4`}>{contactText}</p>}
            {contactButtonText && (
              <button 
                onClick={onContactClick}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-lg`}>
                {contactButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}