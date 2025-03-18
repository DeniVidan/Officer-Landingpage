import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProductShowcase = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    // Only apply mouse effect on desktop/larger screens
    const isDesktop = window.innerWidth >= 768;
    
    const handleMouseMove = (e) => {
      if (!containerRef.current || !isDesktop) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const images = containerRef.current.querySelectorAll('.product-image');
      
      images.forEach((img, index) => {
        const factor = (index + 1) * 5; // Different movement factor for each image
        img.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    
    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const slideUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <>
      <section className="pt-15 px-5 md:px-5 relative overflow-hidden bg-transparent rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-18 font-[CreatoDisplayBold]">
            Streamline Your <span className="text-[#007BCC]">Asset Management</span>
          </h2>
          
          <div 
            ref={containerRef}
            className="relative h-[600px] md:h-[700px] w-full"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Image Grid with Perspective Effect */}
            <motion.div 
              variants={slideUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="product-image absolute top-0 left-1/2 transform -translate-x-1/2 w-104 md:w-[500px] z-40 shadow-xl rounded-lg"
            >
              <img src="/front_image2.svg" alt="Product Interface 2" className="w-full h-auto" />
            </motion.div>
            
            <motion.div
              variants={slideUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="product-image absolute top-56 md:top-36 right-[-10%] md:right-[0%] w-54 md:w-64 z-30 shadow-xl rounded-lg"
            >
              <img src="/front_image1.svg" alt="Product Interface 1" className="w-full h-auto" />
            </motion.div>
            
            <motion.div
              variants={slideUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="product-image absolute top-56 md:top-40 left-[-10%] md:left-[0%] w-48 md:w-56 z-10 shadow-xl rounded-lg"
            >
              <img src="/front_image3.svg" alt="Product Interface 3" className="w-full h-auto" />
            </motion.div>
            
            <motion.div
              variants={slideUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="product-image absolute bottom-28 md:bottom-34 right-[15%] md:right-[30%] transform -translate-x-1/4 w-48 md:w-56 z-20 shadow-xl rounded-lg"
            >
              <img src="/front_image4.svg" alt="Product Interface 4" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <p className="text-gray-400 max-w-xl mx-auto mx-2 mb-6 font-[CreatoDisplayRegular]">
          Our intuitive interface helps you manage assets with powerful visualization tools and real-time tracking capabilities.
        </p>
        <button className="px-6 py-3 bg-[#007BCC] text-white rounded-full hover:bg-blue-700 transition-colors">
          See it in action
        </button>
      </div>
    </>
  );
};

export default ProductShowcase;