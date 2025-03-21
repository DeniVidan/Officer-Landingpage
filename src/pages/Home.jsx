import { PieChart, Pie, Cell } from "recharts";
import ProductShowcase from "../components/ProductShowcase"; // Import the new component
import { motion } from "framer-motion"; // Import motion from framer-motion
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Faq from "../components/FAQ";
import Test from "../components/test";
import Footer from "../components/Footer";

const data = [
  { name: "Approved", value: 60, color: "#2F80ED" },
  { name: "Pending", value: 15, color: "#828282" },
  { name: "Rejected", value: 10, color: "#EB5757" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent w-[100vw] overflow-x-hidden">
      {/* Decorative Elements */}
      <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 z-0"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-tr-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <section className="text-center py-20 md:pb-32 md:pt-32 w-auto mx-auto relative">
        {/* Floating Comment Bubbles - Desktop */}
        <div className="hidden md:block absolute top-6 left-[15%] bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] transform -rotate-3 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium text-sm text-gray-400">More Profit</span>
          </div>
        </div>

        <div className="hidden md:block absolute top-16 right-[20%] bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] transform rotate-2 animate-bounce" style={{ animationDuration: '3.5s' }}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium text-sm text-gray-400">Faster Growth</span>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-20 left-[25%] bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] transform rotate-6 animate-bounce" style={{ animationDuration: '4s' }}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium text-sm text-gray-400">Enhanced Security</span>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-12 right-[15%] bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] transform -rotate-4 animate-bounce" style={{ animationDuration: '4.5s' }}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium text-sm text-gray-400">Save Time</span>
          </div>
        </div>

        {/* Mobile comment bubbles - Positioned around hero section */}
{/*         <div className="md:hidden absolute top-[35px] left-2 bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] flex items-center animate-pulse transform -rotate-6" style={{ animationDuration: '3.2s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium text-xs text-gray-400">More Profit</span>
        </div> */}
        
        <div className="md:hidden absolute top-[40px] right-3 bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] flex items-center animate-pulse transform rotate-3" style={{ animationDuration: '2.5s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-medium text-xs text-gray-400">Faster Growth</span>
        </div>
        
        <div className="md:hidden absolute bottom-[15px] left-1 bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] flex items-center animate-pulse transform -rotate-3" style={{ animationDuration: '4.3s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-medium text-xs text-gray-400">Enhanced Security</span>
        </div>
{/*         
        <div className="md:hidden absolute bottom-[40px] right-2 bg-transparent p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] flex items-center animate-pulse transform rotate-6" style={{ animationDuration: '3.6s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="#66A3FE">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium text-xs text-gray-400">Save Time</span>
        </div> */}

        <motion.div 
          className="absolute left-0 z-10"
          initial={{ y: 100, opacity: 0.1 }}
          animate={{ 
            y: 0,
            opacity: [0.2, 0.4, 0.2],
            transition: {
              duration: 1.5,
              opacity: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
        >
          <img src="hero_line.svg" alt="" />
        </motion.div>
        
        <h2 className="text-3xl md:text-7xl font-extrabold text-white title-font">
          Improve Your Asset  
          <br />Management with <span className="text-[#007BCC] ">Officer</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-[CreatoDisplayRegular]">
        Simplify your business's asset management with our easy-to-use, scalable SaaS platform. Built for all around the world companies, our tools make complex processes simple.
        </p>
        <button className="mt-6 px-6 py-3 bg-[white] text-[#007BCC] rounded-full">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="#007BCC">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6" />
          </svg>
        </button>
      </section>

      {/* Product Showcase Section */}
      <div className="relative bg-transparent mt-24 mx-5 md:mt-40 z-20">
          <Test />
      </div>
      <ProductShowcase />  
      <Benefits />
      <Testimonials />
      <div className="relative z-20">
 <Pricing/>
      </div>
     
      <Faq />
      <Footer />
      
    </div>
  );
}