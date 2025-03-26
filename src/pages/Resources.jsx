import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Download, FileText, Video, BarChart2, Calculator, Book } from "lucide-react";
import Newsletter from '../components/Newsletter';
export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const resources = [
    {
      id: 1,
      title: "Asset Management Best Practices Whitepaper",
      type: "Whitepaper",
      category: "Guides",
      icon: <FileText size={36} className="text-blue-400" />,
      description: "Comprehensive guide to optimizing asset tracking, maintenance, and lifecycle management.",
      downloadLink: "/resources/asset-management-whitepaper.pdf"
    },
    {
      id: 2,
      title: "ROI Calculator for Enterprise Asset Management",
      type: "Tool",
      category: "Tools",
      icon: <Calculator size={36} className="text-green-400" />,
      description: "Interactive calculator to estimate potential savings and efficiency gains from our platform.",
      downloadLink: "/tools/roi-calculator"
    },
    {
      id: 3,
      title: "2024 State of Asset Management Report",
      type: "Research",
      category: "Research",
      icon: <BarChart2 size={36} className="text-purple-400" />,
      description: "In-depth analysis of asset management trends, challenges, and technological innovations.",
      downloadLink: "/resources/2024-asset-management-report.pdf"
    },
    {
      id: 4,
      title: "Implementing Asset Tracking in Large Enterprises",
      type: "Webinar",
      category: "Webinars",
      icon: <Video size={36} className="text-red-400" />,
      description: "Expert panel discussing strategies for successful asset management system implementation.",
      downloadLink: "/webinars/enterprise-asset-tracking"
    },
    {
      id: 5,
      title: "Complete Guide to Compliance in Asset Management",
      type: "eBook",
      category: "Guides",
      icon: <Book size={36} className="text-orange-400" />,
      description: "Navigating regulatory requirements and maintaining compliance across different industries.",
      downloadLink: "/resources/compliance-guide.pdf"
    }
  ];

  const categories = ['All', ...new Set(resources.map(resource => resource.category))];

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="min-h-screen relative">
      {/* Decorative Background Elements */}
      <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 z-[-1]"></div>
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="title-font text-3xl md:text-5xl font-bold text-gray-200 mb-6">
              Resource Center
            </h1>
            <p className="text-font text-gray-400 max-w-3xl mx-auto">
              Unlock insights, strategies, and tools to maximize your asset management effectiveness. Download our curated resources to drive operational excellence.
            </p>
          </div>

          {/* Category Filter - Updated for Responsiveness */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg shadow-md p-2 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 whitespace-nowrap ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div 
                key={resource.id} 
                className="bg-white/3 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 bg-white/10 p-3 rounded-full">
                      {resource.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-200 bg-white/10 px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-200 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-6">
                    {resource.description}
                  </p>

                  <a 
                    href={resource.downloadLink} 
                    className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    <Download size={20} className="mr-2" />
                    Download Resource
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <Newsletter
          title="Join Our Community"
          text="Subscribe for exclusive content and industry updates."
          buttonText="Sign Up"
          backgroundColor="bg-[#003466]"
          inputPlaceholder="Your work email"
          onSubscribe={(email) => {
            // Custom subscribe logic
            console.log(`Subscribing email: ${email}`);
            // Add your newsletter signup API call here
          }}
        />

      <Footer />
    </div>
  );
}