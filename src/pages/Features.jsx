import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Clipboard, BarChart2, ShieldCheck, Puzzle, ChevronRight } from "lucide-react";
import DemoCTA from '../components/DemoCta';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('assetTracking');
  const features = [
    { 
      icon: <Clipboard size={30} />, 
      title: "Asset Tracking", 
      desc: "Track every asset with precision using barcodes, QR codes, RFID, and GPS location data." 
    },
    { 
      icon: <BarChart2 size={30} />, 
      title: "Advanced Analytics", 
      desc: "Transform data into actionable insights with customizable reports and interactive dashboards." 
    },
    { 
      icon: <ShieldCheck size={30} />, 
      title: "Enterprise Security", 
      desc: "Bank-grade security with role-based access control, encryption, and comprehensive audit logs." 
    },
    { 
      icon: <Puzzle size={30} />, 
      title: "Seamless Integration", 
      desc: "Connect with your existing business systems through our comprehensive API and pre-built connectors." 
    },
  ];
  const tabContent = {
    assetTracking: {
      title: "Asset Tracking & Management",
      description: "Real-time visibility into all your assets with advanced tracking capabilities.",
      features: [
        "Barcode and QR code scanning for quick identification",
        "GPS and location tracking for mobile assets",
        "Comprehensive asset lifecycle management",
        "Custom fields and asset categorization",
        "Automated depreciation calculations",
        "Asset check-in/check-out system"
      ],
      image: "https://picsum.photos/600/400"
    },
    reporting: {
      title: "Advanced Reporting & Analytics",
      description: "Transform your asset data into actionable insights with powerful reporting tools.",
      features: [
        "Custom report builder with drag-and-drop interface",
        "Scheduled automated reporting via email",
        "Interactive data visualization dashboards",
        "Export options including PDF, Excel, and CSV",
        "Predictive maintenance analytics",
        "Custom KPI tracking and benchmarking"
      ],
      image: "https://picsum.photos/600/400"
    },
    compliance: {
      title: "Compliance & Security",
      description: "Meet regulatory requirements and keep your asset data secure.",
      features: [
        "SOC 2 Type II compliance",
        "GDPR and CCPA compliant data handling",
        "Role-based access control",
        "Detailed audit logs and history tracking",
        "Secure data encryption at rest and in transit",
        "Automated compliance reporting"
      ],
      image: "https://picsum.photos/600/400"
    },
    integration: {
      title: "Seamless Integrations",
      description: "Connect with your existing business systems for a unified workflow.",
      features: [
        "Pre-built connectors for popular ERP systems",
        "REST API for custom integrations",
        "SSO integration with major identity providers",
        "Data import/export tools",
        "Webhook support for real-time updates",
        "Mobile app with offline capabilities"
      ],
      image: "https://picsum.photos/600/400"
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Decorative Elements - Moved to the beginning and set z-index to make them behind content */}
      <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 z-[-1]"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-tr-full blur-3xl pointer-events-none z-[-1]"></div>
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="title-font text-4xl md:text-5xl font-bold text-gray-200 mb-6">
                Powerful Features for Modern Asset Management
              </h1>
              <p className="text-font text-gray-400 mb-8">
                Our comprehensive platform gives you the tools to track, manage, and optimize your company's assets with precision and ease.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition duration-300">
                Request a Demo
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/600/400"
                alt="Asset Management Dashboard Preview"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-10 mb-30 text-center border-1 border-[#00509D] rounded-3xl mx-5 relative z-[1]">
        <p className="text-blue-400 font-semibold mb-2 uppercase tracking-wider">KEY FEATURES</p>
        <h2 className="title-font text-3xl font-bold text-white mb-4">Powerful Asset Management</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10 px-6">
          Our enterprise-grade asset management platform provides everything you need to optimize your asset lifecycle, from acquisition to retirement.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 bg-white/3 hover:bg-transparent border-1 border-transparent hover:border-1 hover:border-white/7 rounded-xl shadow-md transition-all duration-300">
              <div className="flex items-center justify-center text-blue-300 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-100 mt-2">{feature.desc}</p>
              
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Feature Tabs */}
      <section className="py-20 bg-gray-50 relative z-[1]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="title-font text-3xl font-bold text-gray-800 mb-4">Explore Our Features</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center">
            <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 rounded-lg font-medium transition duration-300 ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="title-font text-2xl font-bold text-gray-800 mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-font text-gray-600 mb-6">
                  {tabContent[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-100">
                <img
                  src={tabContent[activeTab].image}
                  alt={`${tabContent[activeTab].title} Screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative z-[1]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="title-font text-3xl font-bold text-gray-200 mb-4">Use Cases</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-font text-gray-400 max-w-3xl mx-auto">
              See how companies across industries are using our platform to transform their asset management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://picsum.photos/400/200"
                alt="Manufacturing Use Case"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="title-font text-xl font-semibold text-gray-200 mb-3">Manufacturing</h3>
                <p className="text-font text-gray-400 mb-4">
                  Track equipment performance, schedule preventive maintenance, and maximize production uptime with real-time insights.
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white/3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://picsum.photos/400/200"
                alt="Healthcare Use Case"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="title-font text-xl font-semibold text-gray-200 mb-3">Healthcare</h3>
                <p className="text-font text-gray-400 mb-4">
                  Ensure compliance with regulatory requirements while managing medical equipment, devices, and IT assets across facilities.
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white/3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://picsum.photos/400/200"
                alt="IT Department Use Case"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="title-font text-xl font-semibold text-gray-200 mb-3">IT & Technology</h3>
                <p className="text-font text-gray-400 mb-4">
                  Manage hardware, software licenses, and digital assets with automated lifecycle tracking and compliance reporting.
                </p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50 relative z-[1] w-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="title-font text-3xl font-bold text-gray-800 mb-4">How We Compare</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-font text-gray-600 max-w-3xl mx-auto">
              See how our comprehensive asset management solution stacks up against traditional approaches.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-gray-100 text-left text-gray-600 font-semibold">Features</th>
                  <th className="px-6 py-4 bg-gray-100 text-center text-gray-600 font-semibold">Traditional Solutions</th>
                  <th className="px-6 py-4 bg-blue-50 text-center text-blue-700 font-semibold">Our Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-800">Real-time Asset Tracking</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 text-gray-800">
                  <td className="px-6 py-4 font-medium">Mobile Access</td>
                  <td className="px-6 py-4 text-center opacity-65">Limited</td>
                  <td className="px-6 py-4 text-center bg-blue-50 opacity-65">Full Capability</td>
                </tr>
                <tr className="border-b border-gray-200 text-gray-800">
                  <td className="px-6 py-4 font-medium ">API Integration</td>
                  <td className="px-6 py-4 text-center opacity-65">Basic</td>
                  <td className="px-6 py-4 text-center bg-blue-50 opacity-65">Advanced</td>
                </tr>
                <tr className="border-b border-gray-200 text-gray-800">
                  <td className="px-6 py-4 font-medium">Predictive Analytics</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <svg className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 text-gray-800">
                  <td className="px-6 py-4 font-medium">Setup Time</td>
                  <td className="px-6 py-4 text-center opacity-65">Weeks/Months</td>
                  <td className="px-6 py-4 text-center bg-blue-50 opacity-65">Days</td>
                </tr>
                <tr className='text-gray-800'>
                  <td className="px-6 py-4 font-medium">Cost Efficiency</td>
                  <td className="px-6 py-4 text-center opacity-65">Variable</td>
                  <td className="px-6 py-4 text-center bg-blue-50 opacity-65">Predictable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <DemoCTA
      /*  title="Transform Your Asset Management"
  text="Discover how our platform can streamline your operations and reduce costs."
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  onPrimaryClick={() => {
    // Handle primary button click
    console.log('Primary button clicked');
  }}
  onSecondaryClick={() => {
    // Handle secondary button click
    console.log('Secondary button clicked');
  }} */
      />

      <Footer />
    </div>
  );
};