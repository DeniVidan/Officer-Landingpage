import React from 'react';
import Footer from '../components/Footer';
import { HandHeart, Scale, LightbulbIcon, Activity, Code, ChevronRight } from "lucide-react"; // Icons

export default function About () {
  const values = [
    { icon: <HandHeart size={30} />, title: "Integrity", desc: "We act with honesty and adhere to the highest ethical standards." },
    { icon: <Scale size={30} />, title: "Reliability", desc: "Our solutions are dependable and perform consistently." },
    { icon: <LightbulbIcon size={30} />, title: "Innovation", desc: "We constantly evolve to meet the changing needs of our clients." },
    { icon: <Activity size={30} />, title: "Excellence", desc: "We strive for quality in everything we do." },
  ];
  return (
    <div className="min-h-screen bg-transparent">
            {/* Decorative Elements */}
            <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-tr-full blur-3xl pointer-events-none"></div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6 title-font">
                Simplifying Asset Management for Modern Enterprises
              </h1>
              <p className="text-gray-300 mb-8 text-font">
                We're on a mission to transform how companies track, manage, and optimize their assets through innovative cloud solutions.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition duration-300">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/600/400"
                alt="Asset Management Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-200 mb-4 title-font">Our Story</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/500/400"
                alt="Team Working Together"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-6 text-font">
                Founded in 2022, AssetFlow began when our founders identified a critical gap in how enterprises were managing their assets. Coming from backgrounds in finance, technology, and operations, they saw firsthand how outdated systems were costing companies millions in inefficiencies.
              </p>
              <p className="text-gray-300 text-font">
                After two years of development and collaboration with industry leaders, we launched our SaaS platform with a clear mission: to provide a secure, intuitive, and comprehensive asset management solution that drives real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-10 mb-30 text-center border-1 border-[#00509D] rounded-3xl mx-5">
      <p className="text-blue-400 font-semibold mb-10 uppercase tracking-wider">OUR VALUES</p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mx-20">
        {values.map((value, i) => (
          <div key={i} className="p-6 bg-white/3 hover:bg-transparent border-1 border-transparent hover:border-1 hover:border-white/7 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center justify-center text-blue-300 mb-4">{value.icon}</div>
            <h3 className="text-lg font-semibold text-white title-font">{value.title}</h3>
            <p className="text-gray-100 mt-2 text-font">{value.desc}</p>
            {i < values.length - 1 && <ChevronRight size={24} className="text-gray-100 mt-4 mx-auto hidden md:block" />}
          </div>
        ))}
      </div>
    </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-200 mb-4 title-font">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://picsum.photos/200/200?random=1"
                  alt="CEO Portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 title-font">Sarah Johnson</h3>
              <p className="text-blue-600 mb-4 text-font">Chief Executive Officer</p>
              <p className="text-gray-400 text-font">
                Former fintech executive with 15+ years of experience in asset management solutions.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://picsum.photos/200/200?random=2"
                  alt="CTO Portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 title-font">Michael Chen</h3>
              <p className="text-blue-600 mb-4 text-font">Chief Technology Officer</p>
              <p className="text-gray-400 text-font">
                Cloud architecture expert who previously built enterprise systems for Fortune 500 companies.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://picsum.photos/200/200"
                  alt="COO Portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 title-font">David Martinez</h3>
              <p className="text-blue-600 mb-4 text-font">Chief Operations Officer</p>
              <p className="text-gray-400 text-font">
                Operations strategist with extensive experience in scaling SaaS businesses globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-200 mb-4 title-font">Trusted By Industry Leaders</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="flex items-center justify-center p-4">
              <img src="https://picsum.photos/150/60?random=1" alt="Client Logo" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://picsum.photos/150/60?random=2" alt="Client Logo" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://picsum.photos/150/60?random=3" alt="Client Logo" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://picsum.photos/150/60?random=4" alt="Client Logo" className="max-h-12" />
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 text-font">
              Join over 500 companies optimizing their asset management with our solutions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003466] w-screen">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6 title-font">Ready to transform your asset management?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-font">
            Schedule a demo today and see how our platform can drive efficiency and security for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
              Request a Demo
            </button>
            <button className="bg-transparent text-white border border-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
        
      </section>
      <Footer />  
    </div>
  );
};
