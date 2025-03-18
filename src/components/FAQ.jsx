import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  // Expanded FAQ content
  const faqs = [
    { 
      q: "How does Officer help my business?", 
      a: "Officer streamlines your asset management process through intelligent automation and real-time tracking. Our platform reduces manual work by up to 70%, provides accurate inventory data, and helps identify cost-saving opportunities through detailed analytics."
    },
    { 
      q: "Is my data secure?", 
      a: "Yes, we implement enterprise-grade encryption and follow industry best practices for data security. Your information is protected with AES-256 bit encryption, regular security audits, and compliance with SOC 2 and GDPR standards. We also offer customizable access controls to protect sensitive data."
    },
    { 
      q: "Can I cancel anytime?", 
      a: "Absolutely. We believe in the quality of our service rather than locking you in. You can cancel your subscription at any time through your account dashboard with no hidden fees or complicated processes. We'll even provide a prorated refund for unused time on annual plans."
    },
    {
      q: "How quickly can I get started?",
      a: "Most customers are up and running within 24-48 hours. Our onboarding specialists will guide you through the setup process, help with initial data import, and provide personalized training for your team. We also offer a comprehensive knowledge base and 24/7 support."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 text-white text-center mx-2 md:mx-10 rounded-3xl overflow-hidden">
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
        <h2 className="text-3xl md:text-6xl font-bold mb-4 title-font">Frequently Asked Questions</h2>
        <p className="text-blue-200 mb-12 max-w-2xl mx-auto">
          Everything you need to know about Officer's asset management platform
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
                  className="w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-full"
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
                      <p className="text-blue-100 py-5">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <p className="text-blue-200 mb-4">Still have questions?</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}