import React, { useState } from 'react';
import Footer from '../components/Footer';
import Faq from '../components/FAQ';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="min-h-screen w-screen relative">
      {/* Decorative Elements - Moved to the top and set z-index to -1 */}
      <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 z-[-1]"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-tr-full blur-3xl pointer-events-none z-[-1]"></div>
      
      {/* Hero Section */}
      <section className="relative pt-10 pb-2">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 title-font">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-font">
              Have questions about our asset management platform? We're here to help you streamline your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-200 mb-6 title-font">Send us a message</h2>
                
                {formStatus.submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 title-font">Thank you for reaching out!</h3>
                    <p className="text-font">Your message has been received. Our team will get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setFormStatus({ submitted: false, error: false })}
                      className="mt-4 text-green-700 underline hover:text-green-800"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-500 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-b from-white/10 to-white/5 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-200 mb-6 title-font">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-200 title-font">Phone</h4>
                      <p className="text-gray-500 text-font">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-200 title-font">Email</h4>
                      <p className="text-gray-500 text-font">info@assetflow.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-200 title-font">Address</h4>
                      <p className="text-gray-500 text-font">
                        123 Tech Boulevard<br />
                        Suite 400<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-white/10 to-white/5 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-200 mb-6 title-font">Business Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-500 text-font">Monday - Friday</span>
                    <span className="font-medium text-gray-200 title-font">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500 text-font">Saturday</span>
                    <span className="font-medium text-gray-200 title-font">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500 text-font">Sunday</span>
                    <span className="font-medium text-gray-200 title-font">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b3%3A0x5045675218ceed30!2sRandom%20Location!5e0!3m2!1sen!2sus!4v1633031234567!5m2!1sen!2sus" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Random Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-5 md:mb-0">
        <Faq />
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#003466]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 title-font">Stay Updated</h2>
            <p className="text-font text-blue-100 mb-8">
              Subscribe to our newsletter for the latest product updates, industry insights, and asset management best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border-b border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 "
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};