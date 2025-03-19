import React from 'react';
import Footer from '../components/Footer';

export default function About () {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Simplifying Asset Management for Modern Enterprises
              </h1>
              <p className="text-lg text-gray-600 mb-8">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
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
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2022, AssetFlow began when our founders identified a critical gap in how enterprises were managing their assets. Coming from backgrounds in finance, technology, and operations, they saw firsthand how outdated systems were costing companies millions in inefficiencies.
              </p>
              <p className="text-lg text-gray-700">
                After two years of development and collaboration with industry leaders, we launched our SaaS platform with a clear mission: to provide a secure, intuitive, and comprehensive asset management solution that drives real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Security First</h3>
              <p className="text-gray-600">
                We build with security as our foundation, not an afterthought. Your asset data is protected with enterprise-grade encryption and compliance measures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our success. We partner closely with our clients to ensure they realize the full potential of our platform.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Continuous Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing boundaries to bring the latest technologies and methodologies to asset management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
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
              <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
              <p className="text-blue-600 mb-4">Chief Executive Officer</p>
              <p className="text-gray-600">
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
              <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
              <p className="text-blue-600 mb-4">Chief Technology Officer</p>
              <p className="text-gray-600">
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
              <h3 className="text-xl font-semibold text-gray-800">David Martinez</h3>
              <p className="text-blue-600 mb-4">Chief Operations Officer</p>
              <p className="text-gray-600">
                Operations strategist with extensive experience in scaling SaaS businesses globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Industry Leaders</h2>
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
            <p className="text-lg text-gray-700">
              Join over 500 companies optimizing their asset management with our solutions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your asset management?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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


