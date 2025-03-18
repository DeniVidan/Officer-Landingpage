import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { 
      name: "Sarah Thompson", 
      position: "Operations Director, Acme Inc.",
      review: "Officer completely transformed our workflow! We've seen a 40% increase in productivity since implementation.", 
      avatar: "/api/placeholder/100/100",
      stars: 5,
      tag: "Productivity"
    },
    { 
      name: "John Davidson", 
      position: "Asset Manager, TechCorp",
      review: "A game-changer in asset management. The intuitive interface and powerful features have revolutionized how we track and manage our resources. Highly recommend!", 
      avatar: "/api/placeholder/100/100",
      stars: 5,
      tag: "Asset Management"
    },
    { 
      name: "Emma Rodriguez", 
      position: "CFO, Global Solutions",
      review: "Saved us countless hours of manual work. The analytics are top-tier and provide insights we never had access to before. The ROI was evident within the first month.", 
      avatar: "/api/placeholder/100/100",
      stars: 5,
      tag: "Analytics"
    },
    { 
      name: "Mike Wilson", 
      position: "IT Director, Innovate LLC",
      review: "The best SaaS platform for asset tracking! The customer support is exceptional, and the platform consistently exceeds our expectations with regular updates and improvements.", 
      avatar: "/api/placeholder/100/100",
      stars: 5,
      tag: "Support"
    },
    { 
      name: "Lisa Green", 
      position: "Marketing Manager, Creative Co.",
      review: "An invaluable tool for our marketing team! The insights and analytics have helped us tailor our campaigns effectively, leading to a 30% increase in engagement.", 
      avatar: "/api/placeholder/100/100",
      stars: 5,
      tag: "Marketing"
    },
    { 
      name: "David Lee", 
      position: "Product Owner, NextGen Solutions",
      review: "The integration process was seamless, and the support team was incredibly helpful. Our team is now more aligned and productive than ever!", 
      avatar: "/api/placeholder/100/100",
      stars: 5,
      tag: "Integration"
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      

      <div className="mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-3 uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 title-font">
            What Our Users Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Don't just take our word for it. See what our customers have achieved with our platform.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            initialSlide={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + ' bg-blue-400"></span>';
              },
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            onSlideChange={handleSlideChange}
            className="testimonial-swiper py-16 h-[400px] w-full"
          >
            {testimonials.map((user, i) => (
              <SwiperSlide key={i} className="max-w-lg">
                <div className="p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 transition-all duration-300 hover:shadow-blue-900/20 hover:border-blue-500/30">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-400 shadow-md"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{user.name}</h3>
                      <p className="text-gray-400">{user.position}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-blue-900/50 text-blue-300 border border-blue-800/30">
                        {user.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(user.stars)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <svg className="absolute top-0 left-0 w-10 h-10 text-blue-600/20 transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl text-gray-300 leading-relaxed">"{user.review}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>



        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Join thousands of satisfied customers today</p>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:shadow-blue-700/40 transition-all duration-300 hover:translate-y-1">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}